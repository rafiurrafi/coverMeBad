import { useContext, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PlayerContext } from "../../context/player.context";
import { PlaylistContext } from "../../context/playlist.context";
import { SongContext } from "../../context/song.context";
import { getSong } from "../../utils/utils";
import { CardBtn, CardContainer } from "./card.style";
import { ThemeContext } from "../../context/theme.context";
const Card = ({
  content: { id, cover, title, desc, songs, link },
  created = false,
}) => {
  const { theme } = useContext(ThemeContext);
  const [isActivePlaylist, setIsActivePlaylist] = useState(false); // current play/pause
  const { activePlaylist, setActivePlaylist, playlists, setPlaylist } =
    useContext(PlaylistContext);
  const { songs: allSongs } = useContext(SongContext);
  const { setCurrentSong, setIsPlaying, isPlaying } = useContext(PlayerContext);

  const songId = songs[0];
  const song = getSong(allSongs, songId);
  function handlePlaySong(playlistId) {
    //change the play to pause
    const updatedPlaylist = playlists.map((list) =>
      list.id === playlistId
        ? { ...list, isActive: !list.isActive }
        : { ...list, isActive: false }
    );
    setPlaylist(updatedPlaylist);
    const idx = +playlistId.split("-")[1] - 1;
    if (updatedPlaylist[idx].isActive) {
      setIsActivePlaylist(true);
      setActivePlaylist(playlistId);
      setCurrentSong(song);
      setIsPlaying(true);
    } else {
      setIsActivePlaylist(false);
      setActivePlaylist(false);
      setIsPlaying(false);
    }

    // setIsActivePlaylist(!isActivePlaylist);
    // setActivePlaylist(playlistId);
    // setCurrentSong(song);
    // setIsPlaying(!isPlaying);
  }
  return (
    <CardContainer theme={theme}>
      <img src={cover} alt="" />
      <Link to={created ? link : `/playlist/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{desc}</p>
      <CardBtn onClick={() => handlePlaySong(id)}>
        {activePlaylist === id && isActivePlaylist ? (
          <BsPauseFill />
        ) : (
          <BsFillPlayFill />
        )}
      </CardBtn>
    </CardContainer>
  );
};

export default Card;
