import styled from "styled-components";
import { device } from "../../utils/utils";
export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 2;
  margin-left: var(--left-margin);
  width: calc(100% - var(--left-margin));
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#101010")};

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.5rem;
  padding: 0 2rem;
  .btn {
    &:first-of-type {
      margin-right: 2rem;
    }
  }
  @media ${device.tablet} {
    margin-left: 0;
    width: 100%;
  }
`;
export const HeaderSearch = styled.div`
  margin-bottom: -0.7rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background-color: white;
  width: 30rem;
  padding-left: 1rem;
  margin-left: 2rem;
  float: left;
  height: 3rem;
  border-radius: 1.4rem;
  border: ${({ theme }) =>
    theme === "dark" ? "1px solid transparent" : "1px solid #666"};
  input {
    border: none;
    margin-left: 0;
    padding-left: 1rem;
    &:focus {
      outline: none;
    }
  }
  span {
    color: #555;
    transform: translateY(0.5rem);
    padding-right: 1rem;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    margin-right: 4rem;
  }
`;
export const HeaderAuthBtn = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;
