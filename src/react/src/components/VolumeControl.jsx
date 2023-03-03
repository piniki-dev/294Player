import { Slider, styled } from "@mui/material";
import MuteButton from "./MuteButton";
import { controlHeight } from "./Setting";

const StyledDiv = styled("div")(() => ({
    width: "200px",
    height: controlHeight,
    display: "flex",
    alignItems: "center",
}));

const VolumeControl = (props) => {
    return(
        <StyledDiv>
            <Slider 
                aria-label="音量"
                size="small"
                value={props.volume}
                min={0}
                step={5}
                max={100}
                onChange={(_, value) => {
                    props.setVolume(value);
                    console.log("volume : %d", value);
                }}
                sx={{
                    color: "white",
                    height: 2,
                    p: "15px 0",
                    '&.MuiSlider-thumb': {
                        width: 4,
                        height: 4,
                    }
                }}
            />
            <MuteButton isMute={props.isMute} setIsMute={props.setIsMute} />
        </StyledDiv>
    );
}

export default VolumeControl;