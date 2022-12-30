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
const SongList = ({ song, idx = 0 }) => {
  const { setCurrentSong, setIsPlaying, isPlaying } = useContext(PlayerContext);
  const { theme } = useContext(ThemeContext);
  const { toggleLikedSongs } = useContext(SongContext);
  return (
    <SongListContainer theme={theme}>
      <SongListIndex style={{ backgroundColor: "yellow" }}>
        {idx + 1}
      </SongListIndex>
      <SongListImg style={{ backgroundColor: "green" }}>
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
      <SongListTitle style={{ backgroundColor: "orange" }}>
        <h4>{song.title}</h4>
        <p style={{ marginBottom: 0, fontSize: "90%" }}>Usama</p>
      </SongListTitle>
      <SongListMore style={{ backgroundColor: "red" }}>
        <SongListHidden>
          <LoveButton
            style={{ marginRight: "3rem" }}
            height={10}
            width={10}
            name={song.title}
            item={song}
            onClick={toggleLikedSongs}
          />
        </SongListHidden>
        <span>03:45</span>
        <SongListHidden>
          <BsThreeDots />
        </SongListHidden>
      </SongListMore>
    </SongListContainer>
  );
};

export default SongList;
