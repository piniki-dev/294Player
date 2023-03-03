import React from "react";
import VideoPlayButton from "./VideoPlayButton";
import PreviousSongButton from "./PreviousSongButton";
import NextSongButton from "./NextSongButton";

const LeftControlButtons = (props) => {
    return(
        <React.Fragment>
            <PreviousSongButton />
            <VideoPlayButton isVideoPlaying={props.isVideoPlaying} setIsVideoPlaying={props.setIsVideoPlaying} />
            <NextSongButton />
        </React.Fragment>
    );
}

export default LeftControlButtons;