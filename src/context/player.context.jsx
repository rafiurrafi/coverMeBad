import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const PlayerContext = createContext({
  currentSong: "",
  setCurrentSong: () => "",
});
const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const audioRef = useRef(null);

  function timeUpdate() {
    const { currentTime, duration } = audioRef.current;
    setSongInfo({ currentTime, duration });
  }

  useEffect(() => {
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying]);

  const value = {
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    timeUpdate,
    songInfo,
    setSongInfo,
  };
  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

export default PlayerProvider;
