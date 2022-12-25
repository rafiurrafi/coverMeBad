import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { AiOutlineMenu } from "react-icons/ai";
import { GiSkullCrossedBones } from "react-icons/gi";
import "./mobile-menu.style.scss";
const MobileMenu = () => {
  const [active, setActive] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  function toggleActive() {
    setActive(!active);
  }
  return (
    <>
      <button className="mobile-menu__open" onClick={toggleActive}>
        <AiOutlineMenu />
      </button>
      <div className={`${active ? "active" : ""} mobile-menu`}>
        {active && (
          <button
            className="mobile-menu__open"
            onClick={toggleActive}
            style={{ fontSize: "3rem" }}
          >
            <GiSkullCrossedBones />
          </button>
        )}
        <div className="mobile-menu__links">
          {!currentUser ? (
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
          <div className="mobile-menu__others">
            <Link to="/">Premium</Link>
            <Link to="/">Help</Link>
            <Link to="/">Download</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
