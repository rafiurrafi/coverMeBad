import Content from "../../components/content/content.component";
import "./collection-track.style.scss";
import { BsFillPlayFill, BsThreeDots, BsMusicNote } from "react-icons/bs";
import { useContext } from "react";
import SongList from "../../components/song-list/song-list.component";
import img from "./liked.png";
import LoveButton from "../../components/love-button/love-button.component";
import {
  PlaylistAction,
  PlaylistBottom,
  PlaylistHeader,
  PlaylistHeaderContent,
  PlaylistTitle,
} from "../playlist/playlist.style";
import { useNavigate } from "react-router-dom";
import { SongContext } from "../../context/song.context";
const CollectionTrack = () => {
  const navigate = useNavigate();
  const { songs } = useContext(SongContext);
  const likedSongs = songs.filter((song) => song.liked);
  console.log(likedSongs);
  return (
    <Content full>
      <PlaylistHeader colorTop="#4F399A" colorBottom="#2E215A">
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
        {likedSongs.length ? (
          <>
            <PlaylistAction>
              <button className="card-btn">
                <BsFillPlayFill />
              </button>
            </PlaylistAction>

            <div className="playlist-table">
              {likedSongs.map((song, idx) => (
                <>{song && <SongList key={song.id} song={song} idx={idx} />}</>
              ))}
            </div>
          </>
        ) : (
          <div className="liked-song-empty">
            <div style={{ fontSize: "5rem", marginBottom: 10 }}>
              <BsMusicNote />
            </div>
            <h3>Songs you like will appear here</h3>
            <p>Save songs by tapping the heart icon.</p>
            <button
              className="btn btn--full"
              onClick={() => navigate("/search")}
            >
              Find Songs
            </button>
          </div>
        )}
      </PlaylistBottom>
    </Content>
  );
};

export default CollectionTrack;
