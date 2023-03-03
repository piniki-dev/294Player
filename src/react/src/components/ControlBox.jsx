import { styled } from '@mui/material';
import { controlHeight } from './Setting';

const ControlBox = styled("div")(() => ({
    width: "calc(100vw - 12px)",
    height: controlHeight,
    left: 0,
    bottom: 0,
    position: "fixed",
    zIndex: 3,
    backgroundColor: "secondary.main",
}));

export default ControlBox;