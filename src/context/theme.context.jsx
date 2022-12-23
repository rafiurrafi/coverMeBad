import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => "dark",
});
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
  }
  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
