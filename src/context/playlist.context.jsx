import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import PlaylistService from "../fake-server/fakePlaylistService";
export const PlaylistContext = createContext({ playlists: [] });

const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylist] = useState(PlaylistService);
  const [activePlaylist, setActivePlaylist] = useState(false);
  const value = { playlists, activePlaylist, setActivePlaylist };
  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
