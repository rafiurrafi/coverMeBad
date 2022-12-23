import Cards from "../../components/cards/cards.component";
import Content from "../../components/content/content.component";
import "./home.style.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { PageContext } from "../../context/page.context";
import { PlaylistContext } from "../../context/playlist.context";
const Home = () => {
  const { playlists } = useContext(PlaylistContext);
  const { setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("home");
  }, []);
  return (
    <Content space>
      <Cards
        title="Latest playlist"
        albums={playlists}
        min={0}
        max={4}
        section={1}
      />
      <Cards
        title="Your top mixes"
        albums={playlists}
        min={6}
        max={10}
        section={2}
      />
      <Cards
        title="Recommended for today"
        albums={playlists}
        min={10}
        max={14}
        section={3}
      />
      <Cards
        title="Trending Now"
        albums={playlists}
        min={3}
        max={7}
        section={4}
      />
      <Cards
        title="Suggested Artists"
        albums={playlists}
        min={8}
        max={12}
        section={5}
      />
    </Content>
  );
};

export default Home;
