import styled from "styled-components";

export const SongListTitle = styled.div`
  margin-left: 1rem;
  margin-right: auto;
`;
export const SongListIndex = styled.div`
  margin-right: 1.5rem;
`;
export const SongListImg = styled.div`
  height: 4rem;
  width: 4rem;
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const SongListHidden = styled.div`
  padding: 0 2rem;
  opacity: 0;
  transition: opacity 0.3s;
  box-sizing: border-box;
`;
export const SongListIcon = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #000000b1;
  top: 0;
  left: 0;
  display: none;
  text-align: center;
`;
export const SongListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0rem 0.3rem 1rem;
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#444")};
  &:hover {
    background-color: ${({ theme }) =>
      theme === "dark" ? "#282828" : "#edecec"};
  }
  &:hover ${SongListHidden} {
    opacity: 1;
  }
  &:hover ${SongListIcon} {
    display: block;
  }
`;
export const SongListMore = styled.div`
  display: flex;
  align-items: center;
`;
