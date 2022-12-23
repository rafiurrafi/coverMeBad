import styled from "styled-components";
export const ContentContainer = styled.div`
  min-height: 100vh;
  margin-left: var(--left-margin);
  width: calc(100% - var(--left-margin));
  background-image: ${({ theme }) =>
    theme === "dark" ? `linear-gradient(to bottom, #1e1e1e, #121212)` : "#fff"};
  padding: ${({ space }) => space && "8rem 3rem 0"};
  padding-bottom: 7rem;
`;
