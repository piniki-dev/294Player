import { IconButton } from "@mui/material";
import { Repeat, RepeatOne } from "@material-ui/icons";

const RepeatButton = (props) => {
    if(props.isRepeat === 0){
        return(
            <IconButton aria-label="リピートオフ" size="large" 
                onClick={() => {
                    props.setIsRepeat(1);
                }}
                sx={{
                    m: "0 8px 0 0",
                    p: "8px"
                }}
            >
                <Repeat fontSize="medium" style={{
                    color: "rgb(144, 144, 144)",
                    padding: 0
                }} />
            </IconButton>
        );
    } else if(props.isRepeat === 1) {
        return(
            <IconButton aria-label="リピートオン" size="large"
                onClick={() => {
                    props.setIsRepeat(2);
                }}
                sx={{
                    m: "0 8px 0 0",
                    p: "8px"
                }}
            >
                <Repeat fontSize="medium" style={{
                    color: "white",
                    padding: 0
                }} />
            </IconButton>
        );
    } else {
        return(
            <IconButton aria-label="１曲リピート" size="large"
                onClick={() => {
                    props.setIsRepeat(0);
                }}
                sx={{
                    m: "0 8px 0 0",
                    p: "8px"
                }}
            >
                <RepeatOne fontSize="medium" style={{
                    color: "white",
                    padding: 0
                }} />
            </IconButton>
        );
    }
}

export default RepeatButton;