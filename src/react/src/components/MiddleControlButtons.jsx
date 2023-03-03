import { IconButton } from "@mui/material";
import { MoreVert } from "@material-ui/icons";

const MiddleControlButtons = () => {
    return(
        <IconButton aria-label="その他の操作" size="large" sx={{
            m: "0 16px 0 8px",
            p: "8px"
        }}>
            <MoreVert fontSize="medium" style={{
                color: "rgb(144, 144, 144)",
                padding: 0
            }} />
        </IconButton>
    );
}

export default MiddleControlButtons;