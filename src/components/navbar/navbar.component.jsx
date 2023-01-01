import { FaHome, FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { BsSuitHeartFill, BsFillPlusCircleFill } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { colorShade, getPlaylistId, getRandomColor } from "../../utils/utils";
import { useContext } from "react";
import { CreatedPlaylistContext } from "../../context/created-playlist.context";
import { ThemeContext } from "../../context/theme.context";
import { v4 as uuidv4 } from "uuid";
import { NavbarContainer, NavbarMenu } from "./navbar.style";
const Navbar = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const { createdPlaylists, addCreatedPlaylist } = useContext(
    CreatedPlaylistContext
  );
  function createPlaylist() {
    const playlistId = uuidv4();
    const link = "/user-playlist/" + playlistId;
    const color = getRandomColor();
    const playlist = {
      id: playlistId,
      title: "playlist #" + createdPlaylists.length,
      songs: [],
      color: [color, colorShade(color, -70), colorShade(color, -90)],
      link: link,
    };
    addCreatedPlaylist(playlist);
    navigate(link);
  }

  return (
    <NavbarContainer theme={theme}>
      <Link to="/" className="mb-xl">
        <h1 className="logo">
          Cover<span id="me">me</span>
          <span id="bad">Bad</span>
        </h1>
      </Link>
      <NavbarMenu theme={theme}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active mb-m" : "mb-m")}
        >
          <FaHome /> Home
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? "active mb-m" : "mb-m")}
        >
          <FaSearch /> Search
        </NavLink>
        <NavLink
          to="/collection/playlist"
          className={({ isActive }) => (isActive ? "active mb-m" : "mb-m")}
        >
          <BiLibrary /> Your Library
        </NavLink>
        {/* <Link to="/" className="mb-m">
          <BsFillPlusCircleFill /> Create Playlist (-res)
        </Link> */}
        <button onClick={createPlaylist}>
          <BsFillPlusCircleFill /> Create Playlist
        </button>
        <NavLink
          to="/collection/tracks"
          className={({ isActive }) => (isActive ? "active mb-m" : "mb-m")}
        >
          <BsSuitHeartFill /> Liked songs
        </NavLink>
      </NavbarMenu>
      <div className="navbar-playlist">
        {createdPlaylists.map((playlist) => (
          <NavLink
            to={`/user-playlist/${playlist.id}`}
            className={({ isActive }) => (isActive ? "active mb-m" : "mb-m")}
          >
            {playlist.title}
          </NavLink>
        ))}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
