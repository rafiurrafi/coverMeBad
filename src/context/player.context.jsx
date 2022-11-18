import { useState } from "react";
import { createContext } from "react";

export const PlayerContext = createContext({
  currentSong: null,
  setCurrentSong,
});
const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const value = [currentSong, setCurrentSong];
  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

export default PlayerProvider;
