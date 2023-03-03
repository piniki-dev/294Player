import { Box } from "@mui/material";
import { controlHeight } from "./Setting";

const ControlBackground = () => {
    return(
        <Box
            sx={{
                position: 'fixed',
                width: '100vw',
                height: controlHeight,
                bottom: 0,
                left: 0,
                backgroundColor: "secondary.main",
            }}
        />
    );
}

export default ControlBackground;