import { useState } from "react";
import { createContext } from "react";
function toogleLiked(likedSongs, songToBeLiked) {
  const foundSong = likedSongs.find((song) => song.id === songToBeLiked.id);
  if (foundSong)
    return likedSongs.filter((song) => song.id !== songToBeLiked.id);
  return [...likedSongs, { ...songToBeLiked, liked: true }];
}
export const LikedSongContext = createContext({
  likedSongs: [],
  toggleLikedSongs: () => null,
});

const LikedSongProvider = ({ children }) => {
  const [likedSongs, setLikedSongs] = useState([]);
  function toggleLikedSongs(songToBeLiked) {
    setLikedSongs(toogleLiked(likedSongs, songToBeLiked));
  }
  const value = { toggleLikedSongs, likedSongs };
  return (
    <LikedSongContext.Provider value={value}>
      {children}
    </LikedSongContext.Provider>
  );
};

export default LikedSongProvider;
