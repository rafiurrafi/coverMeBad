import { ButtonContainer, ButtonLinkContainer } from "./button.style.js";
const Button = ({ children, type = "", theme = "dark", style = {} }) => {
  return (
    <ButtonContainer type={type} theme={theme} style={style}>
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
