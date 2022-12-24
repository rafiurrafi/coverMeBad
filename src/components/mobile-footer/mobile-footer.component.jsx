import { NavLink } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { BsSuitHeartFill } from "react-icons/bs";
import "./mobile-footer.style.scss";
const MobileFooter = () => {
  return (
    <div className="mobile-footer">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <FaHome />
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {" "}
        <FaSearch />
      </NavLink>
      <NavLink
        to="/collection/playlist"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <BiLibrary />
      </NavLink>
      <NavLink
        to="/collection/tracks"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {" "}
        <BsSuitHeartFill />
      </NavLink>
    </div>
  );
};

export default MobileFooter;
