import styled from "styled-components";
import { device } from "../../utils/utils";

export const LikedSongEmpty = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  transform: translateY(-10vh);
  h3 {
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
  }
  .btn {
    font-size: 1.8rem;
    cursor: pointer;
  }
  @media ${device.tablet} {
  }
`;
