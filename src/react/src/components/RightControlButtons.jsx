import React, { useEffect } from "react";
import VolumeControl from "./VolumeControl";
import PlayerPageViewButton from "./PlayerPageViewButton";
import RepeatButton from "./RepeatButton";
import ShuffleButton from "./ShuffleButton";

const RightControlButtons = (props) => {

    useEffect(() => {
        console.log("is PlayerPageView : %s", props.isPlayerPageView);
    })

    return(
        <React.Fragment>
            <VolumeControl volume={props.volume} setVolume={props.setVolume} isMute={props.isMute} setIsMute={props.setIsMute} />
            <RepeatButton isRepeat={props.isRepeat} setIsRepeat={props.setIsRepeat} />
            <ShuffleButton isShuffle={props.isShuffle} setIsShuffle={props.setIsShuffle} />
            <PlayerPageViewButton isPlayerPageView={props.isPlayerPageView} setIsPlayerPageView={props.setIsPlayerPageView} />
        </React.Fragment>
    );
    
}

export default RightControlButtons;