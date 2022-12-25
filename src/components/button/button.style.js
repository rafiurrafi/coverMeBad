import { Link } from "react-router-dom";
import styled from "styled-components";

// let color = ""

// if(theme === "light") color = "green"
// else
// else  color Black,
// if type === "ghost" color =white
// else color "black"
function generateBtnColor(type, theme) {
  if (type === "ghost" && theme === "dark")
    return { color: "white", bg: "transparent" };
  else if (type === "ghost" && theme === "light")
    return { color: "#dc1d24", bg: "transparent" };
  else if (theme === "light") return { color: "white", bg: "#dc1d24" };
  else return { color: "#444", bg: "white" };
}

export const ButtonLinkContainer = styled(Link)`
  color: ${({ type, theme }) => generateBtnColor(type, theme).color};
  // color: ${({ type }) => (type === "ghost" ? "white" : "black")};
  background-color: ${({ type, theme }) => generateBtnColor(type, theme).bg};
  text-decoration: none;
  padding: 0.5rem 2.5rem;
  border: 1px solid ${({ type, theme }) => generateBtnColor(type, theme).color};
  display: inline-block;
  border-radius: 2rem;
  backface-visibility: hidden;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.03);
  }
`;
