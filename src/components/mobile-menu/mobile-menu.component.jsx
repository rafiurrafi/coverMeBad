import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { AiOutlineMenu } from "react-icons/ai";
import { GiSkullCrossedBones } from "react-icons/gi";
import { useWindowSize } from "../../utils/custom-hooks";
import {
  MobileMenuBtn,
  MobileMenuContainer,
  MobileMenuLinks,
  MobileMenuOthers,
} from "./mobile-menu.style";
import { ThemeContext } from "../../context/theme.context";
const MobileMenu = () => {
  const [active, setActive] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const width = useWindowSize();
  function toggleActive() {
    setActive(!active);
  }

  return (
    <>
      {width < 900 && (
        <MobileMenuBtn onClick={toggleActive} theme={theme}>
          <AiOutlineMenu />
        </MobileMenuBtn>
      )}
      <MobileMenuContainer active={active}>
        {active && (
          <MobileMenuBtn
            theme="dark"
            onClick={toggleActive}
            style={{ fontSize: "3rem" }}
          >
            <GiSkullCrossedBones />
          </MobileMenuBtn>
        )}
        <MobileMenuLinks>
          {currentUser ? (
            <div>
              <Link to="/">View Account</Link>
              <Link to="/">Profile</Link>
              <Link to="/">Sign Out</Link>
            </div>
          ) : (
            <div>
              <Link to="/auth/sign-in">Log in</Link>
              <Link to="/auth/sign-up">Sign Up</Link>
            </div>
          )}

          <MobileMenuOthers>
            <Link to="/">Premium</Link>
            <Link to="/">Help</Link>
            <Link to="/">Download</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
          </MobileMenuOthers>
        </MobileMenuLinks>
      </MobileMenuContainer>
    </>
  );
};

export default MobileMenu;
