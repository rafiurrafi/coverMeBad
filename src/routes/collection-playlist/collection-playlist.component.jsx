import Card from "../../components/card/card.component";
import Content from "../../components/content/content.component";
import "./collection-playlist.style.scss";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { useContext } from "react";
import { CreatedPlaylistContext } from "../../context/created-playlist.context";
const CollectionPlaylist = () => {
  const { createdPlaylists } = useContext(CreatedPlaylistContext);

  return (
    <Content>
      <div className="collection-playlist">
        <h3>Collection playlist</h3>
        <div className="collection-playlist-items">
          <div className="collection-playlist-item">
            <h3>Liked Songs</h3>
            <p>0 Liked songs</p>
          </div>
          {createdPlaylists.map((playlist) => (
            <div className="collection-playlist-item">
              <Card id={playlist.id} content={playlist} />
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
