import styled from "styled-components";
export const CardBtn = styled.button`
  background-color: var(--color-primary);
  border: none;
  height: 4.5rem;
  width: 4.5rem;
  font-size: 3.5rem;
  border-radius: 50%;
  cursor: pointer;

  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  opacity: 0;

  margin-right: -0.5rem;
  transition: 0.5s;

  svg {
    margin-top: 0.5rem;
    margin-right: -0.35rem;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  background-color: #181818;
  padding: 1.6rem;
  border-radius: 1.5rem;
  color: white;
  transition: background-color 0.3s;
  &:hover {
    background-color: #242424;
  }
  &:hover ${CardBtn} {
    opacity: 1;
  }
  img {
    height: 16rem;
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }
  h3 {
    margin: 1rem 0;
  }
  p {
    font-size: 90%;
  }
`;
