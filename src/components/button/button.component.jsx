import { ButtonLinkContainer } from "./button.style.js";
const Button = () => {
  return <button></button>;
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
