import Content from "../../components/content/content.component";
import "./collection-track.style.scss";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import { useContext } from "react";
import { LikedSongContext } from "../../context/liked-song.context";
import img from "./liked.png";
import LoveButton from "../../components/love-button/love-button.component";
import {
  PlaylistAction,
  PlaylistBottom,
  PlaylistHeader,
  PlaylistHeaderContent,
  PlaylistTitle,
} from "../playlist/playlist.style";
const CollectionTrack = () => {
  const { likedSongs } = useContext(LikedSongContext);
  return (
    <Content full>
      <PlaylistHeader style={{ backgroundColor: "#3B2A72" }}>
        <div className="playlist-header-img">
          <img src={img} alt="" />
        </div>
        <PlaylistHeaderContent>
          <h4 className="playlist-header-subtitle">Playlist</h4>
          <PlaylistTitle>Liked Songs</PlaylistTitle>
          <p>Author</p>
        </PlaylistHeaderContent>
      </PlaylistHeader>
      <PlaylistBottom color="#20173D">
        <PlaylistAction>
          <button className="card-btn">
            <BsFillPlayFill />
          </button>
        </PlaylistAction>
        <div className="liked-song-empty">
          <h3>Songs you like will appear here</h3>
          <p>Save songs by tapping the heart icon.</p>
          <button className="btn btn--full">Find Songs</button>
        </div>
      </PlaylistBottom>
    </Content>
  );
};

export default CollectionTrack;
