import "./song-list.style.js";
import LoveButton from "../../components/love-button/love-button.component";
import { BsThreeDots } from "react-icons/bs";
import { useContext } from "react";
import { PlayerContext } from "../../context/player.context";
import { FaPause, FaPlay } from "react-icons/fa";
import { SongContext } from "../../context/song.context";
import { ThemeContext } from "../../context/theme.context";
import {
  SongListContainer,
  SongListHidden,
  SongListIcon,
  SongListImg,
  SongListIndex,
  SongListMore,
  SongListTitle,
} from "./song-list.style.js";
import LikeBtn from "../like-btn/like-btn.component.jsx";
import { ArtistContext } from "../../context/artist.context.jsx";
const SongList = ({ song, idx = 0 }) => {
  const { setCurrentSong, setIsPlaying, isPlaying } = useContext(PlayerContext);
  const { artists } = useContext(ArtistContext);
  const { theme } = useContext(ThemeContext);
  const { toggleLikedSongs } = useContext(SongContext);
  const artistsFromSong = song.artists.map((item) => {
    return artists.filter((artist) => artist.id === item)[0];
  });
  console.log(artistsFromSong);
  return (
    <SongListContainer theme={theme}>
      <SongListIndex>{idx + 1}</SongListIndex>
      <SongListImg>
        <img src={song.cover} alt="" />
        <SongListIcon
          onClick={() => {
            setCurrentSong(song);
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <FaPlay /> : <FaPause />}
        </SongListIcon>
      </SongListImg>
      <SongListTitle>
        <h4>{song.title}</h4>
        <p>
          {artistsFromSong.map((artist) => (
            <span>{artist.name}, </span>
          ))}
        </p>
      </SongListTitle>
      <SongListMore>
        <SongListHidden>
          <LikeBtn
            size={25}
            name={song.title}
            item={song}
            onClick={() => toggleLikedSongs(song)}
            isLiked={song.liked}
          />
        </SongListHidden>
        <span className="song-length">03:45</span>
        <SongListHidden>
          <BsThreeDots />
        </SongListHidden>
      </SongListMore>
    </SongListContainer>
  );
};

export default SongList;
