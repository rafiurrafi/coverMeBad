import { useContext } from "react";
import { useParams } from "react-router-dom";
import Content from "../../components/content/content.component";
import { PlaylistContext } from "../../context/playlist.context";
import { BsFillPlayFill, BsSuitHeart, BsThreeDots } from "react-icons/bs";
import "./playlist.style.scss";
import { SongContext } from "../../context/song.context";
const Playlist = () => {
  const { id } = useParams();
  const { playlists } = useContext(PlaylistContext);
  const {
    cover,
    title,
    desc,
    songs: songIds,
    color,
  } = playlists.filter((item) => item.id === id)[0];
  const { songs } = useContext(SongContext);

  function getSongs(songIds) {
    return songIds.map((id) => {
      return songs.filter((song) => song.id === id)[0];
    });
  }
  const filteredSongs = getSongs(songIds);
  return (
    <Content>
      <div className="playlist-header" style={{ backgroundColor: color }}>
        <div className="playlist-header-img">
          {cover && <img src={cover} alt="" />}
        </div>
        <div className="playlist-header-content">
          <h4 className="playlist-header-subtitle">Playlist</h4>
          <h1 className="playlist-header-title">{title}</h1>
          <p>{desc}</p>
          <p>
            Cover Me Bad . <span>{songs.length}</span> songs
          </p>
        </div>
      </div>
      <div className="playlist-action">
        <button className="card-btn">
          <BsFillPlayFill />
        </button>
        <button>
          <BsSuitHeart />
        </button>
        <button>
          <BsThreeDots />
        </button>
      </div>
      <div className="playlist-table">
        {filteredSongs.map((song) => (
          <h1>{song.title}</h1>
        ))}
      </div>
    </Content>
  );
};

export default Playlist;
