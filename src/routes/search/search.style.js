import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchPageContainer = styled.div`
  color: white;
  & > h3 {
    margin: 3rem 0;
  }
`;
export const SearchGenres = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2.5rem;
  padding-bottom: 10rem;
`;
export const SearchBox = styled(Link)`
  position: relative;
  height: 20rem;
  overflow: hidden;
  padding: 1.5rem;
  border-radius: 1rem;
  color: white;
  text-decoration: none;

  img {
    height: 13rem;
    width: 13rem;
    transform: rotate(25deg) translate(18%, -2%);
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
export const SearchResultHeader = styled.div`
  display: flex;
`;
export const SearchResultMain = styled.div`
  flex: 0 0 48%;
  padding: 2rem;
  margin-right: 4rem;
  background-color: #1f1f1f;
  &:hover {
    background-color: #282828;
  }
  img {
    height: 9.5rem;
    width: 9.5rem;
  }
  h3 {
    font-size: 3rem;
  }
`;
export const SearchResultOptions = styled.div`
  flex: 1;
`;
export const SearchResultCat = styled.div`
  background-color: #202020;
  padding: 0.35rem 1rem;
  text-transform: uppercase;
  border-radius: 1.5rem;
  margin-left: 1.5rem;
`;
export const SearchResultArtist = styled(Link)`
  text-decoration: none;
  color: #aaa;
`;

export const SearchResultBody = styled.div`
  margin-top: 4rem;
  h3 {
    margin-bottom: 2rem;
  }
`;
export const BlankResult = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const SearchResultBoxs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
`;
