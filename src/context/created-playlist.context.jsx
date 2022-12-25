import { useState } from "react";
import { createContext } from "react";

export const CreatedPlaylistContext = createContext({
  createdPlaylists: [],
});
const CreatedPlaylistProvider = ({ children }) => {
  const [createdPlaylists, setCreatedPlaylists] = useState([]);
  function addCreatedPlaylist(playlist) {
    setCreatedPlaylists([...createdPlaylists, playlist]);
  }
  const value = { createdPlaylists, addCreatedPlaylist };
  return (
    <CreatedPlaylistContext.Provider value={value}>
      {children}
    </CreatedPlaylistContext.Provider>
  );
};

export default CreatedPlaylistProvider;
