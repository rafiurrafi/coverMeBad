import styled from "styled-components";
import { device } from "../../utils/utils";

export const NavbarContainer = styled.div`
  position: fixed;
  z-index: 3;
  width: var(--left-margin);
  background-color: ${({ theme }) => (theme === "dark" ? "#000" : "#fff")};
  height: 100vh;
  h1 {
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
    margin-left: 2rem;
    margin-top: 2rem;
  }
  a,
  button {
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => (theme === "dark" ? "rgb(186, 186, 186)" : "#000")};
    padding-left: 2rem;
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => (theme === "dark" ? "white" : "#000")};
      font-weight: 400;
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`;
export const NavbarMenu = styled.div`
  button {
    background-color: transparent;
    font-size: 1.6rem;
    margin-bottom: 2rem;
    border: none;
    &:focus {
      outline: none;
    }
  }
  a,
  button {
    display: flex;
    align-items: center;
    &.active {
      color: white;
      background-color: ${({ theme }) => theme && "black"};
    }
    svg {
      margin-right: 0.7rem;
      font-size: 2rem;
    }

    &:last-child {
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #636161;
    }
  }
`;
