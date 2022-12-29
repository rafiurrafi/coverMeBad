import { useState } from "react";
import { createContext } from "react";

export const CreatedPlaylistContext = createContext({
  createdPlaylists: [],
});
const CreatedPlaylistProvider = ({ children }) => {
  const [createdPlaylists, setCreatedPlaylists] = useState([]);
  function addCreatedPlaylist(playlist) {
    const foundPlaylist = createdPlaylists.find(
      (list) => list.id === playlist.id
    );
    if (!foundPlaylist) setCreatedPlaylists([...createdPlaylists, playlist]);
    else {
      const updatedPlaylist = createdPlaylists.filter(
        (list) => list.id !== playlist.id
      );
      setCreatedPlaylists(updatedPlaylist);
    }
  }
  const value = { createdPlaylists, addCreatedPlaylist };
  return (
    <CreatedPlaylistContext.Provider value={value}>
      {children}
    </CreatedPlaylistContext.Provider>
  );
};

export default CreatedPlaylistProvider;
