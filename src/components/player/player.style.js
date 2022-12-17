import styled from "styled-components";

export const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PlayerLeft = styled.div`
  display: flex;
  img {
    width: 3rem;
  }
`;
export const PlayerMiddle = styled.div`
  flex: 0 0 30%;
  text-align: center;
  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    font-size: 2rem;
  }
  input {
    width: 100%;
  }
`;
export const PlayerProgressbar = styled.div`
  display: flex;
  p {
    min-width: 5rem;
  }
`;
