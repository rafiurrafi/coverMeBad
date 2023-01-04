import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Content from "../../components/content/content.component";
import { CreatedPlaylistContext } from "../../context/created-playlist.context";
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
import { useState } from "react";
import { SongContext } from "../../context/song.context";
import Button from "../../components/button/button.component";
const UserPlaylist = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const { createdPlaylists, setCreatedPlaylists } = useContext(
    CreatedPlaylistContext
  );
  const [searchSong, setSearchSong] = useState("");
  const { songs: allSongs } = useContext(SongContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setSearchSong("");
  }, []);
  const item = createdPlaylists.filter((list) => list.id === id)[0];
  if (!item) {
    navigate("/");
    return;
  }
  const { title, songs, color, desc } = item;
  const filteredSongs = allSongs?.filter(({ title }) =>
    title.toLowerCase().includes(searchSong.toLocaleLowerCase())
  );
  function handleAddSong(song) {
    const foundPlaylist = createdPlaylists.find((list) => list.id == item.id);
    const updatedList = createdPlaylists.map((list) =>
      list.id === foundPlaylist.id
        ? { ...list, songs: [...list.songs, song] }
        : list
    );
    setCreatedPlaylists(updatedList);
  }
  return (
    <Content full style={{}}>
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
          {songs.length &&
            songs.map((song, idx) => (
              <>{song && <SongList key={song.id} song={song} idx={idx} />}</>
            ))}
          <>
            <EmptyCollection theme={theme}>
              <h3>Let's find something for your playlist</h3>
              <input
                placeholder="Search for songs"
                value={searchSong}
                onChange={(e) => setSearchSong(e.target.value)}
              />
            </EmptyCollection>
            <div>
              {searchSong.length ? (
                <div>
                  {filteredSongs.map((song, idx) => (
                    <SongList
                      key={song.id}
                      song={song}
                      idx={idx}
                      type="fake"
                      onAddClick={() => handleAddSong(song)}
                    />
                  ))}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </>
        </div>
      </PlaylistBottom>
    </Content>
  );
};

export default UserPlaylist;
