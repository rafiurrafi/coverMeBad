import "./song-list.style.js";
import LoveButton from "../../components/love-button/love-button.component";
import {
  BsFillPauseBtnFill,
  BsFillPlayFill,
  BsThreeDots,
} from "react-icons/bs";
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
import { Link } from "react-router-dom";
import { useState } from "react";
import { MusicLoaderSong } from "../music-loader/music-loader.component.jsx";
const SongList = ({ song, idx = 0 }) => {
  const { currentSong, setCurrentSong, setIsPlaying, isPlaying } =
    useContext(PlayerContext);
  const { artists } = useContext(ArtistContext);
  const { theme } = useContext(ThemeContext);
  const { toggleLikedSongs, toggleActiveSong } = useContext(SongContext);

  const [hover, setHover] = useState(false);

  const artistsFromSong = song.artists.map((item) => {
    return artists.filter((artist) => artist.id === item)[0];
  });
  const isActiveSong = song.id === currentSong.id && isPlaying;
  function handleSongPlaying(song) {
    if (currentSong.id === song.id && isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setCurrentSong(song);
    }
  }
  return (
    <SongListContainer
      theme={theme}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <SongListIndex onClick={() => handleSongPlaying(song)}>
        {hover ? (
          <div>
            {isActiveSong ? <BsFillPauseBtnFill /> : <BsFillPlayFill />}
          </div>
        ) : (
          <div>
            {isActiveSong ? (
              <div className="music-loader-song">
                <MusicLoaderSong />
              </div>
            ) : (
              idx + 1
            )}
          </div>
        )}
      </SongListIndex>
      <SongListImg>
        <img src={song.cover} alt="" />
      </SongListImg>
      <SongListTitle>
        <h4>{song.title}</h4>
        <p>
          {artistsFromSong.map((artist) => (
            <Link to={"/artists/" + artist.id} key={artist.id}>
              {artist.name},{" "}
            </Link>
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
