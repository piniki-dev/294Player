import { IconButton } from "@mui/material";
import { SkipNext } from '@material-ui/icons';

const NextSongButton = () => {
    return(
        <IconButton aria-label="次の曲" size="large" sx={{
            m: "0 0 0 8px",
            p: "8px"
        }}>
            <SkipNext fontSize="medium" style={{
                color: "white"
            }} />
        </IconButton>
    );
}

export default NextSongButton;