import { styled } from "@mui/material";
import { headerHeight, headerPaddingLR, headerPaddingTB, mainPageBackgroundColor } from "./Setting";

const HeaderBox = styled("div")(() => ({
    position: "fixed",
    // right: 0,
    width: "100%",
    height: headerHeight,
    display: "flex",
    paddingTop: headerPaddingTB,
    paddingBottom: headerPaddingTB,
    paddingLeft: headerPaddingLR,
    paddingRight: headerPaddingLR,
    backgroundColor: mainPageBackgroundColor,
    zIndex: 3
}));

export default HeaderBox;