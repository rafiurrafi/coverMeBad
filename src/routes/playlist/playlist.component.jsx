import { useContext } from "react";
import { useParams } from "react-router-dom";
import Content from "../../components/content/content.component";
import { PlaylistContext } from "../../context/playlist.context";
import { BsFillPlayFill, BsSuitHeart, BsThreeDots } from "react-icons/bs";
import "./playlist.style.scss";
const Playlist = () => {
  const { id } = useParams();
  const { playlists } = useContext(PlaylistContext);
  const playlist = playlists.filter((item) => item.id === id)[0];
  const { cover, title, desc, songs, color } = playlist;
  console.log(cover);
  return (
    <Content>
      <div className="playlist-header" style={{ backgroundColor: color }}>
        <div className="playlist-header-img">
          <img src={cover} alt="" />
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
      <div className="playlist-table"></div>
    </Content>
  );
};

export default Playlist;
