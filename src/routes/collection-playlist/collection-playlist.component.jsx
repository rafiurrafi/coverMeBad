import Card from "../../components/card/card.component";
import Content from "../../components/content/content.component";
import "./collection-playlist.style.scss";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { useContext } from "react";
import { CreatedPlaylistContext } from "../../context/created-playlist.context";
import { Link } from "react-router-dom";

const CollectionPlaylist = () => {
  const { createdPlaylists } = useContext(CreatedPlaylistContext);
  console.log(createdPlaylists);
  return (
    <Content>
      <div className="collection-playlist">
        <h3>Collection playlist</h3>
        <div className="collection-playlist-items">
          <div className="collection-playlist-item">
            <Link to="/collection/tracks">
              <h3>Liked Songs</h3>
            </Link>
            <p>0 Liked songs</p>
          </div>
          {createdPlaylists.map((playlist) => (
            <div id={playlist.id} className="collection-playlist-item">
              <Card id={playlist.id} content={playlist} created />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="collection-empty">
        <div className="collection-empty-icon">
          <BsMusicNoteBeamed />
        </div>
        <h3>Create your first playlist</h3>
        <p>It's easy, we'll help you.</p>
        <button className="btn btn--full">Create Playlist</button>
      </div> */}
    </Content>
  );
};

export default CollectionPlaylist;
