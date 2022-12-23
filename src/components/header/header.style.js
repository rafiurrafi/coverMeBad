import styled from "styled-components";
export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 2;
  margin-left: var(--left-margin);
  width: calc(100% - var(--left-margin));
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#101010")};
  text-align: right;
  padding: 1rem 0;
  .btn {
    &:first-of-type {
      margin-right: 2rem;
    }
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
  input {
    border: none;
    margin-left: 0;
    padding-left: 1rem;
    &:focus {
      outline: none;
    }
  }
  span {
    color: #ddd;
    transform: translateY(0.5rem);
    padding-right: 1rem;
  }
`;
