import { Link } from "react-router-dom";
import "./button.style.scss";
const Button = () => {
  return <button></button>;
};
export const ButtonLink = ({ to = "/", children, type }) => {
  return (
    <Link to={to} className={`btn btn--${type}`}>
      {children}
    </Link>
  );
};
export default Button;
