import { useState } from "react";
import { createContext } from "react";
import GenreService from "../fake-server/fakeGenre";
export const GenreContext = createContext({ genres: [] });
const GenreProvider = ({ children }) => {
  const [genres, setGenres] = useState(GenreService);
  const value = { genres, setGenres };
  return (
    <GenreContext.Provider value={value}>{children}</GenreContext.Provider>
  );
};

export default GenreProvider;
