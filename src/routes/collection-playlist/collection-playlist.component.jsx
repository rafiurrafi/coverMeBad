import Card from "../../components/card/card.component";
import Content from "../../components/content/content.component";
import { useEffect } from "react";
import { useContext } from "react";
import { CreatedPlaylistContext } from "../../context/created-playlist.context";
import { Link } from "react-router-dom";
import {
  CollectionPlaylistItem,
  CollectionPlaylistItems,
} from "./collection-playlist.style";
import { PageContext } from "../../context/page.context";

const CollectionPlaylist = () => {
  const { createdPlaylists } = useContext(CreatedPlaylistContext);
  const { setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("home");
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content space>
      <div className="collection-playlist">
        <h3>Collection playlist</h3>
        <CollectionPlaylistItems>
          <CollectionPlaylistItem id="first">
            <Link to="/collection/tracks">
              <h3>Liked Songs</h3>
            </Link>
            <p>0 Liked songs</p>
          </CollectionPlaylistItem>
          {createdPlaylists.map((playlist) => (
            <CollectionPlaylistItem id={playlist.id}>
              <Card id={playlist.id} content={playlist} created />
            </CollectionPlaylistItem>
          ))}
        </CollectionPlaylistItems>
      </div>
    </Content>
  );
};

export default CollectionPlaylist;
