import styled from "styled-components";
import { device } from "../../utils/utils";

export const HomeFooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 7rem;
  width: 100%;
  z-index: 3;
  h1 {
    margin-left: 25%;
  }
  @media ${device.tablet} {
    bottom: 5rem;
  }
`;
