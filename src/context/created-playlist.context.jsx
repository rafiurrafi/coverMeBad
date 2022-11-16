import { useState } from "react";
import { createContext } from "react";

export const CreatedPlaylistContext = createContext({
  createdPlaylists: [],
});
const CreatedPlaylistProvider = ({ children }) => {
  const [createdPlaylists, setCreatedPlaylists] = useState([
    {
      id: "playlist-1",
      title: "Nehu",
      cover: "/assets/albums/album-1.jpeg",
      songs: ["song-1"],
      color: "red",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Cumqu",
    },
  ]);
  const value = { createdPlaylists };
  return (
    <CreatedPlaylistContext.Provider value={value}>
      {children}
    </CreatedPlaylistContext.Provider>
  );
};

export default CreatedPlaylistProvider;
