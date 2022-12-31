import styled from "styled-components";
import { device } from "../../utils/utils";
export const PlaylistHeader = styled.div`
  display: flex;
  color: ${({ theme }) => (theme === "dark" ? "white" : "#444")};
  padding-top: 8rem;
  padding-bottom: 4rem;
  padding-left: 4rem;
  background-image: ${({ colorTop, colorBottom, theme }) =>
    theme === "dark"
      ? `linear-gradient(to bottom, ${colorTop}, ${colorBottom})`
      : "#fff"};
  img {
    height: 23rem;
    width: 23rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0.5rem 1rem 2rem rgba($color: #000000, $alpha: 0.6);
  }
  @media ${device.tablet} {
    display: block;
    img {
      margin: 0 auto;
      display: block;
    }
  }
`;
export const PlaylistHeaderContent = styled.div`
  margin-left: 3rem;
  padding-top: 3rem;
  @media ${device.tablet} {
    margin-left: 0;
  }
`;
export const PlaylistTitle = styled.h1`
  font-size: 6rem;
  @media ${device.tablet} {
    font-size: 3rem;
  }
`;
export const PlaylistBottom = styled.div`
  background-image: ${({ color, theme }) =>
    theme === "dark"
      ? `linear-gradient(to bottom, ${color}, #000, #000)`
      : "#fff"};
  .playlist-table {
    padding: 0 3rem;
    @media (max-width: 576px) {
      padding: 0 2rem;
    }
  }
`;
export const PlaylistAction = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem 3rem;
  button {
    color: ${({ theme }) => (theme === "dark" ? "white" : "#444")};
    font-size: 4rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:first-of-type {
      color: white !important;
    }
    &:last-of-type {
      margin-bottom: -1rem;
    }
  }
  .card-btn {
    padding-top: 0.5rem;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    background-color: var(--color-primary);
  }
  .playlist-love-btn {
    margin: 0 4rem;
  }
`;
