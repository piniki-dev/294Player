import { styled } from "@mui/material";

const ContentInfoWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    margin: "0 8px 0 16px",
    padding: 0,
    border: 0
});

const FormattedSongTitle = styled("span")({
    fontSize: "14px",
    lineHeight: 1.3,
    fontWeight: 500,
    color: "rgb(255, 255, 255)",
    display: "block",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
});

const FormattedSongSubtitle = styled("span")({
    fontSize: "14px",
    lineHeight: 1.3,
    fontWeight: 400,
    color: "rgba(255, 255, 255, 0.7)",
    width: "100%",
    overflow: "hidden"
});

const ContentInfo = (props) => {
    return(
        <ContentInfoWrapper>
            <FormattedSongTitle>{props.title} / {props.artist}</FormattedSongTitle>
            <FormattedSongSubtitle>月紫アリアch / Tsukushi Aria</FormattedSongSubtitle>
        </ContentInfoWrapper>
    );
}

export default ContentInfo;