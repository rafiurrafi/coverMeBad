import "./navbar.style.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <div className="navbar-menu">
        <a href="">Home</a>
        <a href="">Search</a>
        <a href="">Your Library</a>
        <a href="">Create Playlist</a>
        <a href="">Liked songs</a>
      </div>
      <div className="navbar-playlist">
        <a href="">Playlist #1</a>
      </div>
    </div>
  );
};

export default Navbar;
