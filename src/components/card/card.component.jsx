import { useContext, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PlayerContext } from "../../context/player.context";
import { PlaylistContext } from "../../context/playlist.context";
import { SongContext } from "../../context/song.context";
import { getSong } from "../../utils/utils";
import "./card.style.scss";
const Card = ({ content: { id, cover, title, desc, songs } }) => {
  const [isActivePlaylist, setIsActivePlaylist] = useState(false); // current play/pause
  const { activePlaylist, setActivePlaylist } = useContext(PlaylistContext);
  const { songs: allSongs } = useContext(SongContext);
  const { setCurrentSong, setIsPlaying, isPlaying } = useContext(PlayerContext);

  const songId = songs[0];
  const song = getSong(allSongs, songId);
  function handlePlaySong(playlistId) {
    //change the play to pause
    setIsActivePlaylist(!isActivePlaylist);
    setActivePlaylist(playlistId);
    setCurrentSong(song);
    setIsPlaying(!isPlaying);
  }
  return (
    <div className="card">
      <img src={cover} alt="" />
      <Link to={`/playlist/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{desc}</p>
      <button
        className="card-btn card-inner-btn"
        onClick={() => handlePlaySong(id)}
      >
        {activePlaylist === id && isActivePlaylist ? (
          <BsPauseFill />
        ) : (
          <BsFillPlayFill />
        )}
      </button>
    </div>
  );
};

export default Card;
