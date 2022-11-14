import { useState } from "react";
import { createContext } from "react";
import PlaylistService from "../fake-server/fakePlaylistService";
export const PlaylistContext = createContext({ playlists: [] });

const PlaylistProvider = ({ children }) => {
  const [playlists] = useState(PlaylistService);
  const value = { playlists };
  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
