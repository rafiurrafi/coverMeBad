import Content from "../../components/content/content.component";
import "./collection-track.style.scss";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import { useContext } from "react";
import { LikedSongContext } from "../../context/liked-song.context";
import img from "./liked.png";
import LoveButton from "../../components/love-button/love-button.component";
const CollectionTrack = () => {
  const { likedSongs } = useContext(LikedSongContext);
  return (
    <Content>
      <div
        className="playlist-header"
        style={{ backgroundColor: "rgb(80, 56, 160)" }}
      >
        <div className="playlist-header-img">
          <img src={img} alt="" />
        </div>
        <div className="playlist-header-content">
          <h4 className="playlist-header-subtitle">Playlist</h4>
          <h1 className="playlist-header-title">Liked Songs</h1>
          <p>Author</p>
        </div>
      </div>
      <div className="playlist-action">
        <button className="card-btn">
          <BsFillPlayFill />
        </button>
      </div>
      <div className="liked-song-empty">
        <h3>Songs you like will appear here</h3>
        <p>Save songs by tapping the heart icon.</p>
        <button className="btn btn--full">Find Songs</button>
      </div>
    </Content>
  );
};

export default CollectionTrack;
