import { styled } from "@mui/material";
import { webAppTitle } from "./Setting";

const StyledTitle = styled("h1")(() => ({
    height: 24,
    color: "white",
    // position: "absolute",
    margin: 0
}));

const Title = () => {
    return(
        <StyledTitle>{webAppTitle}</StyledTitle>
    );
}

export default Title;