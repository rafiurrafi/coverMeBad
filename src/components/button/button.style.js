import { Link } from "react-router-dom";
import styled from "styled-components";

// let color = ""

// if(theme === "light") color = "green"
// else
// else  color Black,
// if type === "ghost" color =white
// else color "black"

export const ButtonLinkContainer = styled(Link)`
  color: ${({ type }) => (type === "ghost" ? "white" : "black")};
  background-color: ${({ type }) =>
    type === "ghost" ? "transparent" : "white"};
  text-decoration: none;
  padding: 0.5rem 2.5rem;
  border: 1px solid white;
  display: inline-block;
  border-radius: 2rem;
  backface-visibility: hidden;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.03);
  }
`;
