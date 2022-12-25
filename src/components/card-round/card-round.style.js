import styled from "styled-components";

export const CardRoundContainer = styled.div`
  padding: 1.5rem;
  color: ${({ theme }) => (theme === "dark" ? "white" : "#444")};
  background-color: ${({ theme }) =>
    theme === "dark" ? "#1f1f1f" : "#a0a0a0"};
  &:hover {
    background-color: ${({ theme }) =>
      theme === "dark" ? "#282828" : "#797979"};
  }
  img {
    height: 16.8rem;
    width: 16.8rem;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
  &-title {
    font-size: 1rem;
  }
  a {
    color: white;
  }
`;
