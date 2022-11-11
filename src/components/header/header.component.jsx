import "./header.style.scss";
import { RiMoonClearFill } from "react-icons/ri";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { useContext } from "react";
import { PageContext } from "../../context/page.context";
const Header = () => {
  const { currentPage } = useContext(PageContext);
  return (
    <div className="header">
      <h3>{currentPage}</h3>
      <button
        style={{
          fontSize: "2rem",
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
      >
        <RiMoonClearFill />
      </button>
      <button
        style={{
          fontSize: "2rem",
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
      >
        <BsFillEmojiSunglassesFill />
      </button>
      <a href="" className="btn btn--ghost">
        Sign in
      </a>
      <a href="" className="btn btn--full">
        Sign up
      </a>
    </div>
  );
};

export default Header;
