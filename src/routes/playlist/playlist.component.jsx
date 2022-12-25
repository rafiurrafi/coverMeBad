import { useContext } from "react";
import { useParams } from "react-router-dom";
import Content from "../../components/content/content.component";
import { PlaylistContext } from "../../context/playlist.context";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import SongList from "../../components/song-list/song-list.component";
import { useEffect } from "react";
import { SongContext } from "../../context/song.context";
import {
  PlaylistAction,
  PlaylistBottom,
  PlaylistHeader,
  PlaylistHeaderContent,
  PlaylistTitle,
} from "./playlist.style.js";
import { ThemeContext } from "../../context/theme.context";
import LikeBtn from "../../components/like-btn/like-btn.component";
import { CreatedPlaylistContext } from "../../context/created-playlist.context";
const Playlist = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const { playlists } = useContext(PlaylistContext);
  const playlist = playlists.filter((item) => item.id === id)[0] || {};

  const { cover, title, desc, songs: songIds, color } = playlist;

  const { songs } = useContext(SongContext);
  const { toggleLikedPlaylist } = useContext(PlaylistContext);
  const { addCreatedPlaylist } = useContext(CreatedPlaylistContext);

  function getSongs(songIds) {
    return songIds?.map((id) => {
      return songs?.filter((song) => song.id === id)[0];
    });
  }
  function handleLikedList(item) {
    toggleLikedPlaylist(item);
    addCreatedPlaylist(item);
  }
  const filteredSongs = getSongs(songIds) || [];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content full>
      <PlaylistHeader colorTop={color[0]} colorBottom={color[1]} theme={theme}>
        <div className="playlist-header-img">
          {cover && <img src={cover} alt="" />}
        </div>
        <PlaylistHeaderContent>
          <h4 className="playlist-header-subtitle">Playlist</h4>
          <PlaylistTitle>{title}</PlaylistTitle>
          <p>{desc}</p>
          <p>
            Cover Me Bad . <span>{songs?.length}</span> songs
          </p>
        </PlaylistHeaderContent>
      </PlaylistHeader>

      <PlaylistBottom color={color[2]} theme={theme}>
        <PlaylistAction theme={theme}>
          <button className="card-btn">
            <BsFillPlayFill />
          </button>

          <button className="playlist-love-btn">
            <LikeBtn
              name={playlist.title}
              item={playlist}
              onClick={() => handleLikedList(playlist)}
              isLiked={playlist.liked}
            />
          </button>
          <button>
            <BsThreeDots />
          </button>
        </PlaylistAction>
        <div className="playlist-table">
          {filteredSongs.map((song, idx) => (
            <>{song && <SongList key={idx} song={song} idx={idx} />}</>
          ))}
        </div>
      </PlaylistBottom>
    </Content>
  );
};

export default Playlist;
