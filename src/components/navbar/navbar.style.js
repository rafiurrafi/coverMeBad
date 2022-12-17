import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  z-index: 3;
  width: var(--left-margin);
  background-color: #000;
  height: 100vh;
  h1 {
    color: white;
    margin-left: 2rem;
    margin-top: 2rem;
  }
  a,
  button {
    display: block;
    text-decoration: none;
    color: rgb(186, 186, 186);
    padding-left: 2rem;
    transition: 0.3s;
    &:hover {
      color: white;
      font-weight: 400;
    }
  }
`;
export const NavbarMenu = styled.div`
  button {
    background-color: transparent;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  a,
  button {
    display: flex;
    align-items: center;
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
