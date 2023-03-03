import { IconButton } from "@mui/material";
import { Shuffle } from "@material-ui/icons";

const ShuffleButton = (props) => {
    if(props.isShuffle === false){
        return(
            <IconButton aria-label="シャッフルオフ" size="large" 
                onClick={() => {
                    props.setIsShuffle(true);
                }}
                sx={{
                    m: "0 8px 0 0",
                    p: "8px"
                }}
            >
                <Shuffle fontSize="medium" style={{
                    color: "rgb(144, 144, 144)",
                    padding: 0
                }} />
            </IconButton>
        );
    } else {
        return(
            <IconButton aria-label="シャッフルオン" size="large" 
                onClick={() => {
                    props.setIsShuffle(false);
                }}
                sx={{
                    m: "0 8px 0 0",
                    p: "8px"
                }}
            >
                <Shuffle fontSize="medium" style={{
                    color: "white",
                    padding: 0
                }} />
            </IconButton>
        );
    }
}

export default ShuffleButton;