import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

const Title = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <h3 style={{ color: theme == "dark" ? "white" : "#444" }}>{children}</h3>
  );
};

export default Title;
