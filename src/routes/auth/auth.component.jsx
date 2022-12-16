import { useParams } from "react-router-dom";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up/sign-up.component";
import { BsShieldLockFill } from "react-icons/bs";
import "./auth.style.scss";
const Auth = () => {
  const { auth } = useParams();
  console.log(auth);
  return (
    <div className="auth">
      <div className="auth__content">
        <div className="auth__icon">
          <BsShieldLockFill />
        </div>
        {auth === "sign-in" && <SignIn />}
        {auth === "sign-up" && <SignUpForm />}
      </div>
    </div>
  );
};

export default Auth;
