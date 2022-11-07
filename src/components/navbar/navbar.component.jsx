import "./navbar.style.scss";
import { FaHome, FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { BsSuitHeartFill, BsFillPlusCircleFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="mb-xl">Logo</h1>
      <div className="navbar-menu">
        <a href="" className="mb-m">
          <FaHome /> Home
        </a>
        <a href="" className="mb-m">
          <FaSearch /> Search
        </a>
        <a href="" className="mb-xl">
          <BiLibrary /> Your Library
        </a>
        <a href="" className="mb-m">
          <BsFillPlusCircleFill /> Create Playlist
        </a>
        <a href="" className="mb-m">
          <BsSuitHeartFill /> Liked songs
        </a>
      </div>
      <div className="navbar-playlist">
        <a href="">Playlist #1</a>
      </div>
    </div>
  );
};

export default Navbar;
