import { Grid, styled, Typography } from "@mui/material";
import ListItem from "./ListItem";
import ThumbnailImage from "./ThumbnailImage";

// const ListInfoWrapper = styled("div")({
//     display: "flex",
//     flexDirection: "column",
//     overflow: "hidden",
//     margin: "0 8px 0 16px",
//     padding: 0,
//     border: 0,
//     justifyContent: "center",
// });

const StyledDiv = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "flex-start"
}));

const SongListItem = (props) => {
    return(
        <ListItem
            onClick={() => {
                props.setPlayingSongIndex(props.item.id);
                props.setPlayingSongInfo({
                    video_id: props.item.video_id,
                    title: props.item.song_title,
                    artist: props.item.artist,
                    start_time: props.item.start_time,
                    end_time: props.item.end_time,
                    thumbnail_url: props.item.thumbnail_url
                });
                props.setIsPlaying(true);
                props.setIsPlayerPageView(true);
                console.log("is Playing : %s", props.isPlaying);
                console.log("is PlayerPageView : %s", props.isPlayerPageView);
            }}
        >
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={4}
                    // sx={{
                    //     display: "flex",
                    //     justifyContent: "center",
                    //     alignItems: "center"
                    // }}
                >
                    <StyledDiv>
                        <ThumbnailImage url={props.item.thumbnail_url} />
                        <Typography sx={{marginLeft: "15px"}}>{props.item.song_title}</Typography>
                    </StyledDiv>
                </Grid>
                <Grid item xs={3}>
                    <Typography>{props.item.artist}</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography noWrap>{props.item.title}</Typography>
                </Grid>
            </Grid>
        </ListItem>
    );
}

export default SongListItem;