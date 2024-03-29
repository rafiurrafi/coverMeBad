import styled from "styled-components";
export const InputContainer = styled.div`
  svg {
    height: ${({ size }) => size + "px"};
    //   height: 300px;
    overflow: visible;
    cursor: pointer;
  }

  label {
    //   transform: translateX(-25px);
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    // width: 250px;
    // height: 250px;
    width: ${({ size }) => size - 10 + "px"};
    height: ${({ size }) => size - 10 + "px"};
    position: relative;
    display: grid;
    place-content: center;
    #center-heart {
      #inner {
        fill: transparent;
        transition: 0.2s ease;
      }
      #outer {
        fill: ${({ theme }) => (theme === "dark" ? "white" : "#000")};
        transition: 0.2s ease;
      }
    }
    #left-hearts > *,
    #right-hearts > * {
      opacity: 0;
      transition: 0.2s ease;
    }
  }

  input[type="checkbox"]: ${({ checked }) => (checked ? "checked" : "")} + label {
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      display: grid;
      border-radius: 100%;
      position: absolute;
      outline: 15px solid #64d26d;
      // height: 300px;
      // width: 300px;
      width: ${({ size }) => size - 10 + "px"};
      height: ${({ size }) => size - 10 + "px"};
      animation: scalePulse 0.5s cubic-bezier(0.12, 0.84, 0.5, 0.44) forwards;
    }
    &::after {
      opacity: 1;
      transform: scale(0);
      animation-delay: 0.2s;
    }
    #center-heart {
      #inner {
        fill: #64d26d;
      }
      #outer {
        fill: #64d26d;
      }
    }
    #left-hearts > *,
    #right-hearts > * {
      transform-origin: center center;
      animation: floatingHearts 0.65s cubic-bezier(0.12, 0.84, 0.5, 0.44)
        forwards;
    }
    #right-hearts {
      g:first-child {
        animation-delay: 0.3s;
      }
      g:last-child {
        animation-delay: 0.1s;
      }
    }
    #left-hearts {
      g:first-child {
        animation-delay: 0.2s;
      }
      g:last-child {
        animation-delay: 0.5s;
      }
    }
  }

  @keyframes floatingHearts {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
      transform: translateY(-50px);
    }
  }

  @keyframes scalePulse {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1.1);
      opacity: 0;
    }
  }
`;
