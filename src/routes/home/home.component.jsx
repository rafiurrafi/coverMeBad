import { useState } from "react";
import Cards from "../../components/cards/cards.component";
import Content from "../../components/content/content.component";
import AlbumServer from "../../fake-server/fakeAlbum";
import Template from "../../components/template/template.component";
import "./home.style.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { PageContext } from "../../context/page.context";
import { PlaylistContext } from "../../context/playlist.context";
const Home = () => {
  const { playlists } = useContext(PlaylistContext);
  console.log(playlists);
  const { setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("home");
  }, []);
  return (
    <Content>
      <Cards title="Latest playlist" albums={playlists} min={0} max={4} />
      <Cards title="Your top mixes" albums={playlists} min={6} max={10} />
      <Cards
        title="Recommended for today"
        albums={playlists}
        min={10}
        max={14}
      />
      <Cards title="Trending Now" albums={playlists} min={3} max={7} />
      <Cards title="Suggested Artists" albums={playlists} min={8} max={12} />
    </Content>
  );
};

export default Home;
