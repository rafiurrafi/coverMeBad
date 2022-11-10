import { createContext, useState } from "react";

export const PageContext = createContext({
  currentPage: "home",
  setCurrentPage: () => "home",
});

const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const value = { currentPage, setCurrentPage };
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageProvider;
