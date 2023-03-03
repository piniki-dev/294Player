// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import PlayerBar from "./components/PlayerBar";
import PlayerPage from "./components/PlayerPage";

function App() {
  const [items, setItems] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingSongInfo, setPlayingSongInfo] = useState({video_id: "", title: "", artist: "", start_time: 0, end_time: 0, thumbnail_url: ""});
  const [isPlayerPageView, setIsPlayerPageView] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [playingSongIndex, setPlayingSongIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRepeat, setIsRepeat] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [volume, setVolume] = useState(0);
  const [isMute, setIsMute] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <MainPage items={items} setItems={setItems} setPlayingSongInfo={setPlayingSongInfo} isPlaying={isPlaying} setIsPlaying={setIsPlaying}
                isPlayerPageView={isPlayerPageView} setIsPlayerPageView={setIsPlayerPageView} setPlayingSongIndex={setPlayingSongIndex}
      />
      <PlayerPage items={items} playingSongInfo={playingSongInfo} isPlaying={isPlaying} isPlayerPageView={isPlayerPageView}
                  isVideoPlaying={isVideoPlaying} setIsVideoPlaying={setIsVideoPlaying} playingSongIndex={playingSongIndex} setPlayingSongIndex={setPlayingSongIndex}
                  setCurrentTime={setCurrentTime} isRepeat={isRepeat} volume={volume} setVolume={setVolume} isMute={isMute} setIsMute={setIsMute} 
      />
      <PlayerBar playingSongInfo={playingSongInfo} isPlaying={isPlaying} isPlayerPageView={isPlayerPageView} setIsPlayerPageView={setIsPlayerPageView}
                 isVideoPlaying={isVideoPlaying} setIsVideoPlaying={setIsVideoPlaying} isRepeat={isRepeat} setIsRepeat={setIsRepeat}
                 isShuffle={isShuffle} setIsShuffle={setIsShuffle} currentTime={currentTime} setCurrentTime={setCurrentTime}
                 volume={volume} setVolume={setVolume} isMute={isMute} setIsMute={setIsMute}
      />
    </React.Fragment>
  );
}

export default App;
