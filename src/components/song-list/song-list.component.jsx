import "./song-list.style.scss";
import LoveButton from "../../components/love-button/love-button.component";
import { BsThreeDots } from "react-icons/bs";
import { useContext } from "react";
import { PlayerContext } from "../../context/player.context";
import { FaPlay } from "react-icons/fa";
const SongList = ({ song }) => {
  const { addCurrentSong } = useContext(PlayerContext);
  return (
    <div className="song-list">
      <div className="song-list-img">
        <img src={song.cover} alt="" />
        <div
          className="song-list-play-icon"
          onClick={() => addCurrentSong(song)}
        >
          <FaPlay />
        </div>
      </div>
      <div className="song-list-title">
        <h4>{song.title}</h4>
        <p style={{ marginBottom: 0, fontSize: "90%" }}>Usama</p>
      </div>
      <div className="song-list-more">
        <span className="song-list-hidden">
          <LoveButton name={song.title} song={song} />
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
