import { IconButton } from "@mui/material";
import { PlayArrow, Pause } from '@material-ui/icons';

const VideoPlayButton = (props) => {
    if(props.isVideoPlaying === true){
        return(
            <IconButton aria-label="一時停止" size="large"
                onClick={() => {
                    props.setIsVideoPlaying(false);
                }}
                sx={{
                    m: "0 0 0 8px",
                    p: "8px"
                }}
            >
                <Pause fontSize="large" style={{
                    color: "white"
                }} />
            </IconButton>
        );
    } else {
        return(
            <IconButton aria-label="再生" size="large"
                onClick={() => {
                    props.setIsVideoPlaying(true);
                }}
                sx={{
                    m: "0 0 0 8px",
                    p: "8px"
                }}
            >
                <PlayArrow fontSize="large" style={{
                    color: "white"
                }} />
            </IconButton>
        );
    }
}

export default VideoPlayButton;