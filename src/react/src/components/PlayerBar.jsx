import React, { useState } from "react";
import { Grid } from "@mui/material";
import ControlBox from "./ControlBox";
import Seekbar from "./Seekbar";
import LeftControls from "./LeftControls";
import MiddleControls from "./MiddleControls";
import RightControls from "./RightControls";
import ControlBackground from "./ControlBackground";

const PlayerBar = (props) => {
    const [count, setCount] = useState(0);

    if(props.isPlaying === true){
        return(
            <React.Fragment>
                <ControlBox>
                    <Seekbar playingSongInfo={props.playingSongInfo} isVideoPlaying={props.isVideoPlaying}
                             currentTime={props.currentTime} setCurrentTime={props.setCurrentTime} 
                             count={count} setCount={setCount}
                    />
                    <Grid container>
                        <Grid item xs={4}>
                            <LeftControls playingSongInfo={props.playingSongInfo} isVideoPlaying={props.isVideoPlaying} setIsVideoPlaying={props.setIsVideoPlaying}
                                          count={count}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <MiddleControls playingSongInfo={props.playingSongInfo} />
                        </Grid>
                        <Grid item xs={4}>
                            <RightControls isPlayerPageView={props.isPlayerPageView} setIsPlayerPageView={props.setIsPlayerPageView}
                                           isRepeat={props.isRepeat} setIsRepeat={props.setIsRepeat}
                                           isShuffle={props.isShuffle} setIsShuffle={props.setIsShuffle}
                                           volume={props.volume} setVolume={props.setVolume} isMute={props.isMute} setIsMute={props.setIsMute}
                            />
                        </Grid>
                    </Grid>
                </ControlBox>
                <ControlBackground />
            </React.Fragment>
        );
    } else {
        return null;
    }
}

export default PlayerBar;