import Header from "../../components/header/header.component";
import Navbar from "../../components/navbar/navbar.component";
import Player from "../../components/player/player.component";
import "./home.style.scss";
const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Player />
    </div>
  );
};

export default Home;
