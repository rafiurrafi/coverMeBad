import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ active }) => (active ? "100%" : 0)};
  height: 100%;
  background-color: #121212;
  color: white;
  z-index: 4;
  transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &.active {
    width: 100%;
  }
`;
export const MobileMenuBtn = styled.button`
  position: fixed;
  top: 2.3rem;
  right: 2rem;
  z-index: 4;
  color: ${({ theme }) => (theme === "dark" ? "white" : "#000")};
  font-size: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const MobileMenuLinks = styled.div`
  padding: 4rem;
  a {
    text-decoration: none;
    font-size: 3rem;
    display: block;
    color: white;
    margin-bottom: 1.3rem;
  }
`;
export const MobileMenuOthers = styled.div`
  position: relative;
  padding-top: 3rem;
  margin-top: 6.5rem;
  a {
    font-size: 2rem;
  }
  &::before {
    position: absolute;
    content: "";
    top: -1.5rem;
    left: 0;
    height: 3px;
    width: 6rem;
    background-color: white;
    display: block;
  }
`;
