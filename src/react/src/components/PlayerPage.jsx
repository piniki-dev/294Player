import { useEffect, useState } from "react";
import { Box, Slide } from "@mui/material";
import { headerTotalHeight } from "./Setting";
import Youtube from "./Youtube"
import SortableList from "./SortableList";

const PlayerPage = (props) => {
    const [sortableSongList, setSortableSongList] = useState([]);

    useEffect(() => {
        setSortableSongList(props.items);
    }, [props.items])

    if(props.isPlaying === true){
        return(
            <Slide direction="up" in={props.isPlayerPageView} mountOnEnter /* unmountOnExit */ >
                <Box
                    sx={{
                        display: "flex",
                        top: headerTotalHeight,
                        width: "100%",
                        height: "calc(100% - 144px)",
                        position: "fixed",
                        backgroundColor: "primary.main",
                        zIndex: 1,
                        alignItems: "center",
                    }}
                >
                    <Youtube playingSongInfo={props.playingSongInfo} isVideoPlaying={props.isVideoPlaying} setIsVideoPlaying={props.setIsVideoPlaying} 
                             sortableSongList={sortableSongList} playingSongIndex={props.playingSongIndex} setPlayingSongIndex={props.setPlayingSongIndex}
                             setCurrentTime={props.setCurrentTime} isRepeat={props.isRepeat}
                             volume={props.volume} setVolume={props.setVolume} isMute={props.isMute} setIsMute={props.setIsMute}
                    />
                    <SortableList sortableSongList={sortableSongList} setSortableSongList={setSortableSongList} />
                </Box>
            </Slide>
        );
    } else {
        return null;
    }
}

export default PlayerPage;