import { ButtonContainer, ButtonLinkContainer } from "./button.style.js";
const Button = ({
  children,
  type = "",
  theme = "dark",
  style = {},
  onClick = () => {},
}) => {
  return (
    <ButtonContainer type={type} theme={theme} style={style} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};
export const ButtonLink = ({
  to = "/",
  children,
  type = "",
  theme = "dark",
  style = {},
}) => {
  return (
    <ButtonLinkContainer to={to} type={type} theme={theme} style={style}>
      {children}
    </ButtonLinkContainer>
  );
};
export default Button;
