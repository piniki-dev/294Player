import { styled } from "@mui/material";

const ThumbnailImageWrapper = styled("div")({
    height: "40px",
    position: "relative",
    margin: 0,
    padding: 0,
    border: 0
});

const ThumbnailImage = (props) => {
    return(
        <ThumbnailImageWrapper>
            <img src={props.url}
                alt=""
                style={{
                    height: "40px",
                    borderRadius: "2px",
                    overflow: "hidden",
                }}
            />
        </ThumbnailImageWrapper>
    );
}

export default ThumbnailImage;