import styled from "styled-components";

export const CardRoundContainer = styled.div`
  padding: 1.5rem;
  color: white;
  background-color: #1f1f1f;
  &:hover {
    background-color: #282828;
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
`;
