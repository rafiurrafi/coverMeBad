import styled from "styled-components";

export const UserPlaylistIcon = styled.div`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282828;
  color: rgba(255, 255, 255, 0.7);
  font-size: 10rem;
  text-align: center;
`;
export const EmptyCollection = styled.div`
  color: ${({ theme }) => (theme === "dark" ? "white" : "#444")};
  & > * {
    margin-bottom: 1rem;
  }
`;
