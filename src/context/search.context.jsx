import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext({ searchQuery: "" });
const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const value = { searchQuery, setSearchQuery };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
