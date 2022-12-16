import { Link, useParams } from "react-router-dom";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up/sign-up.component";
import { AiFillUnlock } from "react-icons/ai";
import "./auth.style.scss";
const Auth = () => {
  const { auth } = useParams();
  console.log(auth);
  return (
    <div className="auth">
      <div className="auth__content">
        <div className="auth__icon">
          <AiFillUnlock />
        </div>
        <h2 className="auth__title">
          {auth === "sign-in" ? "Sign in" : "Sign Up"}
        </h2>
        {auth === "sign-in" && <SignIn />}
        {auth === "sign-up" && <SignUpForm />}
        {auth === "sign-in" ? (
          <p className="auth__text">
            Create an account <Link to="/auth/sign-up">Sign up</Link>
          </p>
        ) : (
          <p className="auth__text">
            Already have an account <Link to="/auth/sign-in">Sign in</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
