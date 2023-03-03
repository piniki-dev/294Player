import { IconButton } from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";

const PlayerPageViewButton = (props) => {

    if(props.isPlayerPageView === true){
        return(
            <IconButton aria-label="プレーヤーページを閉じる" size="medium" 
                onClick={() => {
                    props.setIsPlayerPageView(false);
                }}
                sx={{
                    m: 0,
                    p: "8px"
                }}
            >
                <ArrowDropDown fontSize="large" style={{
                    color: "white",
                    padding: 0
                }} />
            </IconButton>
        );
    } else {
        return(
            <IconButton aria-label="プレーヤーページを開く" size="medium" 
                onClick={() => {
                    props.setIsPlayerPageView(true);
                }}
                sx={{
                    m: 0,
                    p: "8px"
                }}
            >
                <ArrowDropUp fontSize="large" style={{
                    color: "white",
                    padding: 0
                }} />
            </IconButton>
        );
    }
}

export default PlayerPageViewButton;