import { Box, styled } from "@mui/material";
import loading_img from "./loading.gif";
import { headerTotalHeight } from "./Setting";

const StyledImg = styled("img")({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
});

const LoadingImg = () => {
    return(
        <Box 
            sx={{
                width: "100%",
                height: "100vh",
                position: "relative",
                paddingTop: headerTotalHeight,
                backgroundColor: "primary.main",
                // justifyContent: "center",
                // alignItems: "center",
            }}
        >
            <StyledImg src={loading_img} alt="Loading..." />
        </Box>
    );
}

export default LoadingImg;