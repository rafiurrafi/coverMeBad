import { useState } from "react";
import { createContext } from "react";
import SongServer from "../fake-server/fakeSongService";
export const SongContext = createContext({ songs: [] });
function toggleLiked(songs, song) {
  const foundSong = songs.find((s) => s.id === song.id);
  if (foundSong) {
    return songs.map((s) =>
      s.id === song.id ? { ...s, liked: !song.liked } : s
    );
  }
}
function handleToogleActiveSong(songs, song) {
  const foundSong = songs.find((s) => s.id === song.id);
  if (foundSong)
    return songs.map((s) =>
      s.id === song.id ? { ...s, isActive: !s.isActive } : s
    );
}
const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState(SongServer);
  function toggleLikedSongs(song) {
    setSongs(toggleLiked(songs, song));
  }
  // uptil unused
  function toggleActiveSong(song) {
    setSongs(handleToogleActiveSong(songs, song));
  }
  const value = { songs, toggleLikedSongs, toggleActiveSong };
  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};

export default SongProvider;
