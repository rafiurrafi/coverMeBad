import styled from "styled-components";
import { device } from "../../utils/utils";

export const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #181818;
  border-top: 1px solid #333;
  height: 100%;
  width: 100%;
  color: white;
  padding: 0 1rem;
  position: relative;
  @media ${device.tablet} {
    background-color: #424242;
  }
  .small-size-icons {
    display: flex;
    gap: 3rem;
    button {
      background-color: transparent;
      color: white;
      border: none;
    }
  }
`;
export const PlayerLeft = styled.div`
  display: flex;
  img {
    width: 3rem;
    margin-right: 0.5rem;
  }
`;
export const PlayerMiddle = styled.div`
  flex: 0 0 60%;
  text-align: center;
  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    font-size: 2rem;
    color: white;
    &:nth-child(2) {
      margin: 0 8rem;
    }
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
    background-color: white;
    width: 100%;
    height: 0.7rem;
    border-radius: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    &:hover {
      background-color: red;
    }
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
      height: 0.7rem;
      width: 0.7rem;
      border-radius: 50%;
      background-color: white;
      z-index: 1;
      position: relative;
      opacity: 0;
    }
    &:hover::-webkit-slider-thumb {
      opacity: 1;
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
export const PlayerProgress = styled.div`
  position: absolute;
  height: 0.7rem;
  background-color: var(--color-primary);
  left: 0;
  bottom: 0;
  width: ${({ percent }) => percent}%;
  z-index: 1;
`;
