import { useContext } from "react";
import { useParams } from "react-router-dom";
import Content from "../../components/content/content.component";
import { CreatedPlaylistContext } from "../../context/created-playlist.context";
import { BsFillPlayFill, BsSuitHeart, BsThreeDots } from "react-icons/bs";
const UserPlaylist = () => {
  const { id } = useParams();
  const { createdPlaylists, setCreatedPlaylist } = useContext(
    CreatedPlaylistContext
  );
  const item = createdPlaylists.filter((list) => list.id === id)[0];
  const { title, songs, color } = item;
  console.log(id);
  return (
    <Content>
      <div className="playlist-header" style={{ backgroundColor: color }}>
        <div className="playlist-header-img">
          <div>img</div>
        </div>
        <div className="playlist-header-content">
          <h4 className="playlist-header-subtitle">Playlist</h4>
          <h1 className="playlist-header-title">{title}</h1>

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
        {songs.map((song) => (
          <h1>{song.title}</h1>
        ))}
      </div>
    </Content>
  );
};

export default UserPlaylist;
