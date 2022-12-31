import styled from "styled-components";
function getColumnNumber(width, page) {
  ///width > 1200 5 repeat(5,1fr)
  //width < 1200 repeat(4,1fr)
  //  page
  if (page) return "repeat(auto-fit, minmax(18rem, 1fr))";
  else if (width > 1200) return "repeat(5,1fr)";
  else return "repeat(4,1fr)";
}
export const CardsContainer = styled.div`
  margin-bottom: 3rem;
`;
export const CardsItem = styled.div`
  display: grid;
  grid-template-columns: ${({ width, page }) => getColumnNumber(width, page)};
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
