import { useState } from "react";
import { createContext } from "react";
function toogleLiked(likedSongs, songToBeLiked) {
  const foundSong = likedSongs.find((song) => song.id === songToBeLiked.id);
  console.log("found", foundSong);
  if (foundSong) return likedSongs.map((song) => song.id !== songToBeLiked.id);
  return [...likedSongs, { ...songToBeLiked, liked: true }];
}
// export const LikedContext = createContext({
//   likedSongs: [],
//   toggleLikedSongs: () => null,
// });

// const LikedProvider = ({ children }) => {
//   const [likedSongs, setLikedSongs] = useState([]);
//   function toggleLikedSongs(songToBeLiked) {
//     setLikedSongs(toogleLiked(likedSongs, songToBeLiked));
//   }
//   const value = { toggleLikedSongs, likedSongs };
//   return (
//     <LikedContext.Provider value={value}>{children}</LikedContext.Provider>
//   );
// };

// export default LikedProvider;
