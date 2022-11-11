import { useState } from "react";
import Cards from "../../components/cards/cards.component";
import Content from "../../components/content/content.component";
import AlbumServer from "../../fake-server/fakeAlbum";
import Template from "../../components/template/template.component";
import "./home.style.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { PageContext } from "../../context/page.context";
const Home = () => {
  const [albums] = useState(AlbumServer);
  const { setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("home");
  }, []);
  return (
    <Content>
      <Cards albums={albums} />
    </Content>
  );
};

export default Home;
