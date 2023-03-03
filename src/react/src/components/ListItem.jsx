import { styled } from "@mui/material";
import { songListItemHeight } from "./Setting";

const ListItem = styled('div')(() => ({
    height: songListItemHeight,
    width: "100%",
    // display: "flex",
    overflow: "hidden",
    justifyContent: "center",
}));

export default ListItem;