import { styled } from "@mui/material";
import LeftControlButtons from "./LeftControlButtons";
import { controlHeight } from "./Setting";
import TimeInfo from "./TimeInfo";

const StyledDiv = styled("div")(() => ({
    height: controlHeight,
    display: "flex",
    alignItems: "center"
}));

const LeftControls = (props) => {
    return(
        <StyledDiv>
            <LeftControlButtons isVideoPlaying={props.isVideoPlaying} setIsVideoPlaying={props.setIsVideoPlaying} />
            <TimeInfo start_time={props.playingSongInfo.start_time} end_time={props.playingSongInfo.end_time} count={props.count} />
        </StyledDiv>
    );
}

export default LeftControls;