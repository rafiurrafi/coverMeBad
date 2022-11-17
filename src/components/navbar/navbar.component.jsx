import "./navbar.style.scss";
import { FaHome, FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { BsSuitHeartFill, BsFillPlusCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { getPlaylistId, getRandomColor } from "../../utils/utils";
import { useContext } from "react";
import { CreatedPlaylistContext } from "../../context/created-playlist.context";
const Navbar = () => {
  const navigate = useNavigate();
  const { createdPlaylists, addCreatedPlaylist } = useContext(
    CreatedPlaylistContext
  );
  function createPlaylist() {
    const playlistId = getPlaylistId();
    const playlist = {
      id: playlistId,
      title: "playlist #" + createdPlaylists.length,
      songs: [],
      color: getRandomColor(),
    };
    addCreatedPlaylist(playlist);
    navigate("playlist/" + playlistId);
  }
  return (
    <div className="navbar">
      <h1 className="mb-xl">CoverMeBad</h1>
      <div className="navbar-menu">
        <Link to="/" className="mb-m">
          <FaHome /> Home
        </Link>
        <Link to="/search" className="mb-m">
          <FaSearch /> Search
        </Link>
        <Link to="/collection/playlist" className="mb-xl">
          <BiLibrary /> Your Library
        </Link>
        <Link to="/" className="mb-m">
          <BsFillPlusCircleFill /> Create Playlist (-res)
        </Link>
        <button onClick={createPlaylist}>
          <BsFillPlusCircleFill /> Create Playlist
        </button>
        <Link to="/collection/tracks" className="mb-m">
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
