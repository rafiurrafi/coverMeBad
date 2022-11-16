import "./song-list.style.scss";

import { BsSuitHeart, BsThreeDots } from "react-icons/bs";
const SongList = ({ song }) => {
  return (
    <div className="song-list">
      <div className="song-list-img">
        <img src={song.cover} alt="" />
      </div>
      <div className="song-list-title">
        <h4>{song.title}</h4>
        <p style={{ marginBottom: 0, fontSize: "90%" }}>Usama</p>
      </div>
      <div className="song-list-more">
        <span className="song-list-hidden">
          <BsSuitHeart />
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
