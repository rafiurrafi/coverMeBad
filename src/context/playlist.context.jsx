import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import PlaylistService from "../fake-server/fakePlaylistService";
export const PlaylistContext = createContext({ playlists: [] });

function togglePlaylist(playlists, playlist) {
  const foundList = playlists.find((s) => s.id === playlist.id);
  if (foundList) {
    return playlists.map((s) =>
      s.id === playlist.id ? { ...s, liked: !playlist.liked } : s
    );
  }
}

const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylist] = useState(PlaylistService);
  const [activePlaylist, setActivePlaylist] = useState(false);
  function toggleLikedPlaylist(playlist) {
    setPlaylist(togglePlaylist(playlists, playlist));
  }
  const value = {
    playlists,
    activePlaylist,
    setActivePlaylist,
    setPlaylist,
    toggleLikedPlaylist,
  };
  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
