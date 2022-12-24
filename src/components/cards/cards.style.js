import styled from "styled-components";

export const CardsContainer = styled.div`
  margin-bottom: 3rem;
`;
export const CardsItem = styled.div`
  display: grid;
  grid-template-columns: ${({ width }) =>
    `repeat(${width > 1200 ? 5 : 4}, 1fr)`};
  grid-gap: 2rem;
`;
export const CardsHeader = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #b3b3b3;
    font-size: 90%;
    font-weight: 600;
  }
`;
