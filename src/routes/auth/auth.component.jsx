import { Link, useParams } from "react-router-dom";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up/sign-up.component";
import { AiFillUnlock } from "react-icons/ai";

import image1 from "../../assets/cover-1.jpg";
import image2 from "../../assets/large.jpeg";

import {
  AuthContainer,
  AuthContent,
  AuthIcon,
  AuthText,
  AuthTitle,
} from "./auth.style.js";
const Auth = () => {
  const { auth } = useParams();
  console.log(auth);
  return (
    <AuthContainer image={image2}>
      <AuthContent>
        <AuthIcon>
          <AiFillUnlock />
        </AuthIcon>
        <AuthTitle>{auth === "sign-in" ? "Sign in" : "Sign Up"}</AuthTitle>
        {auth === "sign-in" && <SignIn />}
        {auth === "sign-up" && <SignUpForm />}
        {auth === "sign-in" ? (
          <AuthText>
            Create an account <Link to="/auth/sign-up">Sign up</Link>
          </AuthText>
        ) : (
          <AuthText>
            Already have an account <Link to="/auth/sign-in">Sign in</Link>
          </AuthText>
        )}
      </AuthContent>
    </AuthContainer>
  );
};

export default Auth;
