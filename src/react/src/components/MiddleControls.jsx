import { styled } from "@mui/material";
import { controlHeight } from "./Setting";
import ThumbnailImage from "./ThumbnailImage";
import ContentInfo from "./ContentInfo";
// import MiddleControlButtons from "./MiddleControlButtons";

const StyledDiv = styled("div")(() => ({
    height: controlHeight,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "flex-start"
}));

const MiddleControls = (props) => {
    return(
        <StyledDiv>
            <ThumbnailImage url={props.playingSongInfo.thumbnail_url}/>
            <ContentInfo title={props.playingSongInfo.title} artist={props.playingSongInfo.artist} />
            {/* <MiddleControlButtons /> */}
        </StyledDiv>
    );
}

export default MiddleControls;