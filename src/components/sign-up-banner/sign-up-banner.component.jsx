import { ButtonLink } from "../button/button.component";
import "./sign-up-banner.style.scss";
const SignUpbanner = ({ title, btnText }) => {
  return (
    <div className="sign-up-banner">
      <div>
        <h4>Preview on spotify</h4>
        <p>{title}</p>
      </div>
      <ButtonLink to="/auth/sign-up">{btnText}</ButtonLink>
    </div>
  );
};

export default SignUpbanner;
