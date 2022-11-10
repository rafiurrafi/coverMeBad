import "./navbar.style.scss";
import { FaHome, FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { BsSuitHeartFill, BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="mb-xl">Logo</h1>
      <div className="navbar-menu">
        <Link to="/" className="mb-m">
          <FaHome /> Home
        </Link>
        <Link to="/search" className="mb-m">
          <FaSearch /> Search
        </Link>
        <Link to="/" className="mb-xl">
          <BiLibrary /> Your Library
        </Link>
        <Link to="/" className="mb-m">
          <BsFillPlusCircleFill /> Create Playlist
        </Link>
        <Link to="/" className="mb-m">
          <BsSuitHeartFill /> Liked songs
        </Link>
      </div>
      <div className="navbar-playlist">
        <Link to="/">Playlist #1</Link>
      </div>
    </div>
  );
};

export default Navbar;
