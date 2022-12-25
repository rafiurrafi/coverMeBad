import { useState } from "react";
import Input from "../input/input.component";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import "./sign-in.style.scss";
import Button, { ButtonLink } from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Enter Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Input
          type="password"
          label="Enter Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {/* <button>Sign in</button> */}
        <Button theme="light">Sign up</Button>
      </form>
    </div>
  );
};

export default SignIn;
