import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Content from "../../components/content/content.component";
import { CreatedPlaylistContext } from "../../context/created-playlist.context";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { HiMusicNote } from "react-icons/hi";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import {
  PlaylistAction,
  PlaylistBottom,
  PlaylistHeader,
  PlaylistHeaderContent,
  PlaylistTitle,
} from "../playlist/playlist.style";
import SongList from "../../components/song-list/song-list.component";
import { ThemeContext } from "../../context/theme.context";
import { EmptyCollection, UserPlaylistIcon } from "./user-playlist.style";
import LikeBtn from "../../components/like-btn/like-btn.component";
const UserPlaylist = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const { createdPlaylists } = useContext(CreatedPlaylistContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const item = createdPlaylists.filter((list) => list.id === id)[0];
  if (!item) {
    navigate("/");
    return;
  }
  const { title, songs, color, desc } = item;

  return (
    <Content full>
      <PlaylistHeader theme={theme} colorTop={color[0]} colorBottom={color[1]}>
        <UserPlaylistIcon>
          <HiMusicNote />
        </UserPlaylistIcon>
        <PlaylistHeaderContent>
          <h4 className="playlist-header-subtitle">Playlist</h4>
          <PlaylistTitle>{title}</PlaylistTitle>
          <p>{desc}</p>
          <p>
            Cover Me Bad . <span>{songs?.length}</span> songs
          </p>
        </PlaylistHeaderContent>
      </PlaylistHeader>

      <PlaylistBottom theme={theme} color={color[2]}>
        <PlaylistAction>
          <button className="card-btn">
            <BsFillPlayFill />
          </button>
          <button className="playlist-love-btn">
            <LikeBtn name={title} item={item} isLiked={true} />
          </button>
          <button>
            <BsThreeDots />
          </button>
        </PlaylistAction>
        <div className="playlist-table">
          {songs.length ? (
            songs.map((song, idx) => (
              <>{song && <SongList key={song.id} song={song} idx={idx} />}</>
            ))
          ) : (
            <EmptyCollection theme={theme}>
              <h3>Let's find something for your playlist</h3>
              <p>It's easy, we'll help you.</p>
              <button className="btn btn--full">Create Playlist</button>
            </EmptyCollection>
          )}
        </div>
      </PlaylistBottom>
    </Content>
  );
};

export default UserPlaylist;
