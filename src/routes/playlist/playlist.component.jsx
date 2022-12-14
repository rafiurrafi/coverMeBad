import { useContext } from "react";
import { useParams } from "react-router-dom";
import Content from "../../components/content/content.component";
import { PlaylistContext } from "../../context/playlist.context";
import { BsFillPlayFill, BsSuitHeart, BsThreeDots } from "react-icons/bs";

import { SongContext } from "../../context/song.context";
import { PlayerContext } from "../../context/player.context";
import {
  PlaylistAction,
  PlaylistBottom,
  PlaylistHeader,
  PlaylistHeaderContent,
  PlaylistTitle,
} from "./playlist.style.js";
const Playlist = () => {
  const { id } = useParams();
  const { playlists } = useContext(PlaylistContext);
  const { setCurrentSong, isPlaying, setIsPlaying } = useContext(PlayerContext);
  const playlist = playlists.filter((item) => item.id === id)[0] || {};

  const { cover, title, desc, songs: songIds, color } = playlist;

  const { songs } = useContext(SongContext);
  const red = "red";

  function getSongs(songIds) {
    return songIds.map((id) => {
      return songs.filter((song) => song.id === id)[0];
    });
  }
  const filteredSongs = getSongs(songIds);
  return (
    <Content full>
      <PlaylistHeader style={{ backgroundColor: color }}>
        <div className="playlist-header-img">
          {cover && <img src={cover} alt="" />}
        </div>
        <PlaylistHeaderContent>
          <h4 className="playlist-header-subtitle">Playlist</h4>
          <PlaylistTitle>{title}</PlaylistTitle>
          <p>{desc}</p>
          <p>
            Cover Me Bad . <span>{songs.length}</span> songs
          </p>
        </PlaylistHeaderContent>
      </PlaylistHeader>

      <PlaylistBottom color={color}>
        <PlaylistAction>
          <button className="card-btn">
            <BsFillPlayFill />
          </button>
          <button>
            <BsSuitHeart />
          </button>
          <button>
            <BsThreeDots />
          </button>
        </PlaylistAction>
        <div className="playlist-table">
          {filteredSongs.map((song) => (
            <div key={song.id}>
              <h1>{song.title}</h1>{" "}
              <button
                onClick={() => {
                  setCurrentSong(song);
                  setIsPlaying(!isPlaying);
                }}
              >
                play
              </button>
            </div>
          ))}
        </div>
      </PlaylistBottom>
    </Content>
  );
};

export default Playlist;
