import { useContext, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { HiMusicNote } from "react-icons/hi";
import { Link } from "react-router-dom";
import { PlayerContext } from "../../context/player.context";
import { PlaylistContext } from "../../context/playlist.context";
import { SongContext } from "../../context/song.context";
import { getSong } from "../../utils/utils";
import { CardBtn, CardContainer } from "./card.style";
import { ThemeContext } from "../../context/theme.context";
import { UserPlaylistIcon } from "../../routes/user-playlist/user-playlist.style";
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
  }
  console.log(activePlaylist, id);
  return (
    <CardContainer theme={theme}>
      {cover ? (
        <img src={cover} alt="" />
      ) : (
        <UserPlaylistIcon>
          <HiMusicNote />
        </UserPlaylistIcon>
      )}
      <Link to={created ? link : `/playlist/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{desc}</p>
      <CardBtn onClick={() => handlePlaySong(id)}>
        {activePlaylist === id ? <BsPauseFill /> : <BsFillPlayFill />}
      </CardBtn>
    </CardContainer>
  );
};

export default Card;
