import { styled } from "@mui/material";
import RightControlButtons from "./RightControlButtons";
import { controlHeight } from "./Setting";

const StyledDiv = styled("div")(() => ({
    height: controlHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "5px",
}));

const RightControls = (props) => {
    return(
        <StyledDiv>
            <RightControlButtons isPlayerPageView={props.isPlayerPageView} setIsPlayerPageView={props.setIsPlayerPageView}
                                 isRepeat={props.isRepeat} setIsRepeat={props.setIsRepeat}
                                 isShuffle={props.isShuffle} setIsShuffle={props.setIsShuffle}
                                 volume={props.volume} setVolume={props.setVolume} isMute={props.isMute} setIsMute={props.setIsMute}
            />
        </StyledDiv>
    );
}

export default RightControls;