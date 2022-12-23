import { Link } from "react-router-dom";
import styled from "styled-components";
import { InputGroup } from "../../components/input/input.style";

export const AuthContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-image: ${({
    image,
  }) => `linear-gradient(to right bottom, #00000075, #00000075),
    url(${image})`};
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const AuthContent = styled.div`
  background-color: rgba($color: #000000, $alpha: 0.15);
  width: 40vw;
  backdrop-filter: blur(10px);
  padding: 3rem 5rem;
  ${InputGroup} {
    margin-bottom: 2rem;
    input {
      width: 100%;
    }
  }
`;
export const AuthIcon = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  color: white;
  background-color: var(--color-primary);
  font-size: 2.5rem;
  text-align: center;
  line-height: 5rem;
  vertical-align: middle;
  margin: auto;
  margin-bottom: 1.5rem;
`;
export const AuthTitle = styled.h2`
  text-align: center;

  margin-bottom: 2rem;
  font-size: 3rem;
`;
export const AuthText = styled.p`
  margin-top: 1.5rem;
  a {
    text-decoration: none;
    margin-left: 1rem;
    color: var(--color-primary);
    font-weight: 700;
  }
`;
export const AuthHomeLink = styled(Link)`
  text-decoration: none;
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: white;
  font-size: 3rem;
`;
