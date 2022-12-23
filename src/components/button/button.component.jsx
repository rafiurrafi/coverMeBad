import { ButtonLinkContainer } from "./button.style.js";
const Button = () => {
  return <button></button>;
};
export const ButtonLink = ({ to = "/", children, type = "", style = {} }) => {
  return (
    <ButtonLinkContainer to={to} type={type} style={style}>
      {children}
    </ButtonLinkContainer>
  );
};
export default Button;
