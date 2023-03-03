import { IconButton } from "@mui/material";
import { SkipPrevious } from '@material-ui/icons';

const PreviousSongButton = () => {
    return(
        <IconButton aria-label="前の曲" size="large" sx={{
            m: "0 0 0 8px",
            p: "8px"
        }}>
            <SkipPrevious fontSize="medium" style={{
                color: "white",
                padding: 0
            }} />
        </IconButton>
    );
}

export default PreviousSongButton;