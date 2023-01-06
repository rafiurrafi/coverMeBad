import styled from "styled-components";

export const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #181818;
  border-top: 1px solid #f1f1f1;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #ae2896, #519bf5);
  color: white;
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
  align-items: center;
  p {
    min-width: 5rem;
  }
  .track {
    flex: 0 0 70%;
    background-color: green;
    width: 100%;
    height: 1rem;
    border-radius: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  input {
    width: 100%;
    -webkit-appearance: none;
    background-color: transparent;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 1rem;
      width: 1rem;
      background-color: red;
      z-index: 1;
      position: relative;
    }
  }
  .animate-track {
    height: 100%;
    width: 100%;
    background-color: gray;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${({ percent }) => `translateX(${percent}%)`};
    pointer-events: none;
  }
`;
