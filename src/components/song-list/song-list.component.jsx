import "./song-list.style.scss";
import LoveButton from "../../components/love-button/love-button.component";
import { BsThreeDots } from "react-icons/bs";
import { useContext } from "react";
import { PlayerContext } from "../../context/player.context";
import { FaPause, FaPlay } from "react-icons/fa";
import { SongContext } from "../../context/song.context";
const SongList = ({ song, idx = 0 }) => {
  const { setCurrentSong, setIsPlaying, isPlaying } = useContext(PlayerContext);

  const { toggleLikedSongs } = useContext(SongContext);
  return (
    <div className="song-list">
      <div className="song-list-index">{idx + 1}</div>
      <div className="song-list-img">
        <img src={song.cover} alt="" />
        <div
          className="song-list-play-icon"
          onClick={() => {
            setCurrentSong(song);
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <FaPlay /> : <FaPause />}
        </div>
      </div>
      <div className="song-list-title">
        <h4>{song.title}</h4>
        <p style={{ marginBottom: 0, fontSize: "90%" }}>Usama</p>
      </div>
      <div className="song-list-more">
        <span className="song-list-hidden">
          <LoveButton
            name={song.title}
            item={song}
            onClick={toggleLikedSongs}
          />
        </span>
        <span>03:45</span>
        <span className="song-list-hidden">
          <BsThreeDots />
        </span>
      </div>
    </div>
  );
};

export default SongList;
