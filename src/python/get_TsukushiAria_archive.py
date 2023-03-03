from operator import ne
import statistics
from datetime import datetime
from zoneinfo import ZoneInfo
import isodate
import pandas as pd
from apiclient.discovery import build
#from apiclient.error import HttpError

JST = ZoneInfo("Asia/Tokyo")
API_KEY = 'AIzaSyC9crY9Q0fXIqmdvBXjyO3NFkmbkHVbbK4'
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"
CHANNEL_ID = "UC5XQhzMH08PgWa4Zp02Gcsw"
channels = []
searches = []
videos = []
nextPagetoken = None
nextpagetoken = None


def ytdatetime_to_str(date_from_youtube):
    date = isodate.parse_datetime(date_from_youtube) #datetimeオブジェクトに変換
    date_jst = date.astimezone(JST) #タイムゾーンの設定
    str_date_jst = date_jst.strftime("%Y-%m-%d %H:%M:%S") #mysql登録用の文字列へ変換
    return str_date_jst


youtube = build(
    YOUTUBE_API_SERVICE_NAME,
    YOUTUBE_API_VERSION,
    developerKey=API_KEY
)

#チャンネル情報の取得
channel_response = youtube.channels().list(
    part = "snippet, statistics",
    id = CHANNEL_ID
).execute()

#チャンネル情報の格納
for channel_result in channel_response.get("items", []):
    if channel_result["kind"] == "youtube#channel":
        channels.append([
            channel_result["snippet"]["title"], #チャンネルのタイトル
            channel_result["id"], #チャンネルID
            ytdatetime_to_str(channel_result["snippet"]["publishedAt"]), #チャンネルの作成日時
            channel_result["statistics"]["viewCount"], #チャンネルの再生回数
            channel_result["statistics"]["subscriberCount"], #チャンネルの登録者数
            channel_result["statistics"]["videoCount"] #チャンネルにアップロードされた動画の数
        ])

#チャンネルのビデオIDを取得
while True:
    if nextPagetoken != None:
        nextpagetoken = nextPagetoken
    
    search_response = youtube.search().list(
        part = "id",
        channelId = CHANNEL_ID,
        maxResults = 50, #最大の50件を取得
        order = "date", #日付の新しい順にソート
        pageToken = nextpagetoken #次のページへのトークン
    ).execute()

    for search_result in search_response.get("items", []):
        if search_result["id"]["kind"] == "youtube#video":
            searches.append(search_result["id"]["videoId"])
    
    try:
        nextPagetoken = search_response["nextPageToken"]
    except KeyError:
        break

#ビデオIDから詳細データを取得
for video_id in searches:
    video_response = youtube.videos().list(
        part = "snippet, statistics, contentDetails, status, player",
        id = video_id
    ).execute()

    for video_result in video_response.get("items", []):
        if video_result["kind"] == "youtube#video" and not video_result["contentDetails"]["duration"] == "P0D":
            
            try: #YouTube Shortのサムネイルサイズが違う用の処理
                thumbnail_url = video_result["snippet"]["thumbnails"]["maxres"]["url"]
            except KeyError:
                thumbnail_url = video_result["snippet"]["thumbnails"]["high"]["url"]

            dur_from_youtube = video_result["contentDetails"]["duration"]
            dur = isodate.parse_duration(dur_from_youtube) #timedeltaオブジェクトに変換
            str_dur = str(dur) #hh:mm:ssの文字列へ変換
            
            videos.append([
                video_id, #ビデオID
                video_result["snippet"]["title"], #動画のタイトル
                thumbnail_url, #サムネのURL
                ytdatetime_to_str(video_result["snippet"]["publishedAt"]), #動画のアップロード日時
                video_result["statistics"]["viewCount"], #動画の再生回数
                video_result["statistics"]["likeCount"], #動画を高く評価したユーザーの数
                video_result["statistics"]["commentCount"], #動画へのコメントの数
                str_dur, #動画の長さ
                video_result["status"]["privacyStatus"], #動画のプライバシーステータス
                video_result["player"]["embedHtml"] #動画を再生するプレーヤーを埋め込むための <iframe> タグ
            ])

#動画詳細データをcsvファイルへ出力
video_report = pd.DataFrame(
    videos,
    columns=[
        "videoId",
        "title",
        "thumbnail",
        "publishedAt",
        "viewCount",
        "likeCount",
        "commentCount",
        "duration",
        "privacyStatus",
        "embedHtml"
    ]
)
video_report.to_csv("TsukushiAria_archives.csv", index=None)

#チャンネル詳細データをcsvファイルへ出力
channel_report = pd.DataFrame(
    channels,
    columns=[
        "title",
        "id",
        "publishedAt",
        "viewCount",
        "subscriberCount",
        "videoCount"
    ]
)
channel_report.to_csv("TsukushiAria_channel.csv", index=None)
