import React, { useState, useEffect } from "react";
import { controlHeight } from "./Setting";
import LoadingImg from "./LoadingImg";
import SongList from "./SongList";

const MainPage = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [marginUnderList, setMarginUnderList] = useState("0px");

    useEffect(() => {
        if(props.isPlaying){
            setMarginUnderList(controlHeight);
        }
    }, [props.isPlaying])

    useEffect(() => {
        fetch("http://localhost:8000/api/Songs")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    props.setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return(
            <LoadingImg />
        );
    } else {
        return(
            <SongList items={props.items} setPlayingSongInfo={props.setPlayingSongInfo} isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying}
                      isPlayerPageView={props.isPlayerPageView} setIsPlayerPageView={props.setIsPlayerPageView} setPlayingSongIndex={props.setPlayingSongIndex}
                      marginUnderList={marginUnderList}
            />
        );
    }
}

export default MainPage;