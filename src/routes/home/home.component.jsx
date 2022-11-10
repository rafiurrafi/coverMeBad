import { useState } from "react";
import Cards from "../../components/cards/cards.component";
import Content from "../../components/content/content.component";
import AlbumServer from "../../fake-server/fakeAlbum";
import Template from "../../components/template/template.component";
import "./home.style.scss";
const Home = () => {
  const [albums] = useState(AlbumServer);
  console.log(albums);
  return (
    <Content>
      <Cards albums={albums} />
    </Content>
  );
};

export default Home;
