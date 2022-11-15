import { useState } from "react";
import { createContext } from "react";
import SongServer from "../fake-server/fakeSongService";
export const SongContext = createContext({ songs: [] });
const SongProvider = ({ children }) => {
  const [songs] = useState(SongServer);
  const value = { songs };
  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};

export default SongProvider;
