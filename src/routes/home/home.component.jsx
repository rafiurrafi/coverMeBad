import Cards from "../../components/cards/cards.component";
import Content from "../../components/content/content.component";
import "./home.style.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { PageContext } from "../../context/page.context";
import { PlaylistContext } from "../../context/playlist.context";
import { useWindowSize } from "../../utils/custom-hooks";
const Home = () => {
  const { playlists } = useContext(PlaylistContext);
  const { setCurrentPage } = useContext(PageContext);
  const width = useWindowSize();
  useEffect(() => {
    setCurrentPage("home");
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content space>
      <Cards
        title="Latest playlist"
        albums={playlists}
        min={0}
        max={width > 1200 ? 4 : 3}
        section={1}
      />
      <Cards
        title="Your top mixes"
        albums={playlists}
        min={6}
        max={width > 1200 ? 10 : 9}
        section={2}
      />
      <Cards
        title="Recommended for today"
        albums={playlists}
        min={10}
        max={width > 1200 ? 14 : 13}
        section={3}
      />
      <Cards
        title="Trending Now"
        albums={playlists}
        min={3}
        max={width > 1200 ? 7 : 6}
        section={4}
      />
      <Cards
        title="Suggested Artists"
        albums={playlists}
        min={8}
        max={width > 1200 ? 12 : 11}
        section={5}
      />
    </Content>
  );
};

export default Home;
