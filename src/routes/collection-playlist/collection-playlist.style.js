import styled from "styled-components";
export const CollectionPlaylistItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  color: white;
`;
export const CollectionPlaylistItem = styled.div`
  &:first-of-type {
    background: linear-gradient(
      149.46deg,
      rgb(69, 10, 245),
      rgb(142, 142, 229) 99.16%
    );
    height: 27rem;
    grid-column: span 2 / auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    border-radius: 1rem;
    h3 {
      font-size: 3rem;
    }
  }
`;

export const CollectionEmpty = styled.div`
  color: white;
  text-align: center;
  padding: 3rem 0;
  svg {
    font-size: 4rem;
  }
  h3,
  p,
  svg {
    margin-bottom: 2rem;
  }
`;