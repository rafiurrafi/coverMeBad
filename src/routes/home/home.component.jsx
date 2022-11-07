import { useState } from "react";
import Cards from "../../components/card/cards/cards.component";
import Content from "../../components/content/content.component";
import Header from "../../components/header/header.component";
import HomeFooter from "../../components/home-footer/home-footer.component";
import Navbar from "../../components/navbar/navbar.component";
import Player from "../../components/player/player.component";
import SignUpbanner from "../../components/sign-up-banner/sign-up-banner.component";
import AlbumServer from "../../fake-server/fakeAlbum";
import "./home.style.scss";
const Home = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [albums] = useState(AlbumServer);
  console.log(albums);
  return (
    <div>
      <Header />
      <Navbar />
      <Content>
        <Cards albums={albums} />
      </Content>
      <HomeFooter>{isSignIn ? <Player /> : <SignUpbanner />}</HomeFooter>
    </div>
  );
};

export default Home;
