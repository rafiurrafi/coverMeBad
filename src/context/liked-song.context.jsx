import { useState } from "react";
import { createContext } from "react";

export const LikedSongContext = createContext({
  likedSongs: [],
  toggleLikedSongs: () => null,
});

const LikedSongProvider = ({ children }) => {
  const [likedSongs, setLikedSongs] = useState([]);
  function toggleLikedSongs(songToBeLiked) {
    const foundSong = likedSongs.find((song) => song.id === songToBeLiked.id);
    console.log(foundSong);
  }
  const value = { toggleLikedSongs, likedSongs };
  return (
    <LikedSongContext.Provider value={value}>
      {children}
    </LikedSongContext.Provider>
  );
};

export default LikedSongProvider;
