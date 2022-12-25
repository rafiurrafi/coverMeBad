import Content from "../../components/content/content.component";
import { BsFillPlayFill, BsThreeDots, BsMusicNote } from "react-icons/bs";
import { useContext } from "react";
import SongList from "../../components/song-list/song-list.component";
import img from "./liked.png";
import { useEffect } from "react";
import {
  PlaylistAction,
  PlaylistBottom,
  PlaylistHeader,
  PlaylistHeaderContent,
  PlaylistTitle,
} from "../playlist/playlist.style";
import { useNavigate } from "react-router-dom";
import { SongContext } from "../../context/song.context";
import { LikedSongEmpty } from "./collection-track.style";
const CollectionTrack = () => {
  const navigate = useNavigate();
  const { songs } = useContext(SongContext);
  const likedSongs = songs.filter((song) => song.liked);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content>
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
          <LikedSongEmpty>
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
          </LikedSongEmpty>
        )}
      </PlaylistBottom>
    </Content>
  );
};

export default CollectionTrack;
