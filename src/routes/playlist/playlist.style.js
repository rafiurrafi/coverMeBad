import styled from "styled-components";
export const PlaylistHeader = styled.div`
  display: flex;
  color: white;
  padding-top: 8rem;
  padding-bottom: 4rem;
  padding-left: 4rem;
  background-image: ${({ colorTop, colorBottom }) =>
    `linear-gradient(to bottom, ${colorTop}, ${colorBottom})`};
  img {
    height: 23rem;
    width: 23rem;
    border-radius: 50%;
    box-shadow: 0.5rem 1rem 2rem rgba($color: #000000, $alpha: 0.6);
  }
`;
export const PlaylistHeaderContent = styled.div`
  margin-left: 3rem;
  padding-top: 3rem;
`;
export const PlaylistTitle = styled.h1`
  font-size: 6rem;
`;
export const PlaylistBottom = styled.div`
  background-image: ${({ color }) =>
    `linear-gradient(to bottom, ${color}, #000, #000)`};
`;
export const PlaylistAction = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem 4rem;
  button {
    margin-right: 3rem;
    &:not(:first-of-type) {
      color: white;
      font-size: 3.3rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;
