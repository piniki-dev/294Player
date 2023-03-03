import { IconButton } from "@mui/material";
import { VolumeOff, VolumeUp } from "@material-ui/icons";

const MuteButton = (props) => {
    if(props.isMute === false){
        return(
            <IconButton aria-label="ミュートオフ" size="large" 
                onClick={() => {
                    props.setIsMute(true);
                }}
                sx={{
                    m: "0 8px 0 8px",
                    p: "8px"
                }}
            >
                <VolumeUp fontSize="medium" style={{
                    color: "white",
                    padding: 0
                }} />
            </IconButton>
        );
    } else {
        return(
            <IconButton aria-label="ミュートオン" size="large"
                onClick={() => {
                    props.setIsMute(false);
                }}
                sx={{
                    m: "0 8px 0 8px",
                    p: "8px"
                }}
            >
                <VolumeOff fontSize="medium" style={{
                    color: "white",
                    padding: 0
                }} />
            </IconButton>
        );
    }
}

export default MuteButton;