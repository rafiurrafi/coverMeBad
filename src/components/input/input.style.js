import styled from "styled-components";
export const Userlabel = styled.label`
  position: absolute;
  left: 15px;
  color: #e8e8e8;
  pointer-events: none;
  transform: translateY(0.9rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const InputContainer = styled.input`
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1.5rem;
  font-size: 1rem;
  color: #f5f5f5;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:valid {
    outline: none;
    border: 1.5px solid var(--color-primary);
  }
  &:focus ~ ${Userlabel}, &:valid ~ ${Userlabel} {
    transform: translateY(-50%) scale(0.8);
    background-color: #212121;
    padding: 0 0.2em;
    // color: #2196f3;
    color: var(--color-primary);
  }
`;
export const InputGroup = styled.div`
  position: relative;
`;
