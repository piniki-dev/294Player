import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const Youtube = (props) => {
    const [player, setPlayer] = useState(null);
    const [status, setStatus] = useState(null);
    const opts = {
        height: '480',
        width: '854',
        playerVars: {
            autoplay: 1, // 0: 自動再生する, 1: 自動再生しない
            controls: 0, // 0: コントロールを表示しない, 1: 表示する
            playsinline: 1, // 0: iOSで全画面再生, 1: iOSでインライン再生
            rel: 0, // 0: 関連動画を表示しない, 1: 関連動画を表示する
            enablejsapi: 1,
            disablekb: 1,
            start: props.playingSongInfo.start_time,
            end: props.playingSongInfo.end_time
        }
    };

    useEffect(() => {
        if(player){
            if(props.isVideoPlaying && player.getPlayerState() !== 1){
                props.setCurrentTime(player.getCurrentTime() - props.playingSongInfo.start_time);
                player.playVideo();
            } else if(!props.isVideoPlaying && player.getPlayerState() === 1) {
                player.pauseVideo();
                props.setCurrentTime(player.getCurrentTime() - props.playingSongInfo.start_time);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isVideoPlaying])

    useEffect(() => {
        if(player){
            if(props.isMute && !player.isMuted()){
                player.mute();
            } else if(!props.isMute && player.isMuted()) {
                player.unMute();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isMute])

    useEffect(() => {
        if(player){
            player.setVolume(props.volume);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.volume])

    useEffect(() => {
        if(status === 0){
            if(props.isRepeat === 0){ // リピートなし
                props.setPlayingSongIndex(prevState => prevState + 1);
                props.sortableSongList.forEach(songInfo => {
                    if(songInfo.id === props.playingSongIndex){
                        player.loadVideoById({
                            videoId: songInfo.video_id,
                            startSeconds: songInfo.start_time,
                            endSeconds: songInfo.end_time
                        });
                    }
                });
            }else if(props.isRepeat === 1){ // １曲リピート
                player.loadVideoById({
                    videoId: props.playingSongInfo.video_id,
                    startSeconds: props.playingSongInfo.start_time,
                    endSeconds: props.playingSongInfo.end_time
                });
                //player.playVideo();
            }else{ // 全曲リピート
                // あとで実装
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])

    return(
        <YouTube
            videoId = {props.playingSongInfo.video_id}
            opts = {opts}
            onReady = {(e) => {
                setPlayer(e.target);
                props.setVolume(e.target.getVolume());
            }}
            onStateChange = {(e) => {
                var y_status = e.target.getPlayerState();
                setStatus(y_status);
                switch (y_status) {
                    case -1:
                        console.log("YouTube Status : Unstarted");
                        // props.setIsVideoPlaying(false);
                        break;
                    case 0:
                        console.log("YouTube Status : Ended");
                        props.setIsVideoPlaying(false);
                        break;
                    case 1:
                        console.log("YouTube Status : Playing");
                        props.setIsVideoPlaying(true);
                        props.setCurrentTime(e.target.getCurrentTime() - props.playingSongInfo.start_time);
                        break;
                    case 2:
                        console.log("YouTube Status : Paused");
                        props.setIsVideoPlaying(false);
                        props.setCurrentTime(e.target.getCurrentTime() - props.playingSongInfo.start_time);
                        break;
                    case 3:
                        console.log("YouTube Status : Buffering");
                        // props.setIsVideoPlaying(false);
                        break;
                    case 5:
                        console.log("YouTube Status : Cued");
                        // props.setIsVideoPlaying(false);
                        break;
                    default:
                        // do nothing
                }
            }}
        />
    );
}

export default Youtube;