import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import Header from "../header/header.component";
import HomeFooter from "../home-footer/home-footer.component";
import SignUpbanner from "../sign-up-banner/sign-up-banner.component";
import Player from "../player/player.component";
import { useContext } from "react";
import MobileFooter from "../mobile-footer/mobile-footer.component";
import MobileMenu from "../mobile-menu/mobile-menu.component";
import { PlayerContext } from "../../context/player.context";
const Template = () => {
  const { currentSong } = useContext(PlayerContext);
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <HomeFooter>
        {currentSong ? (
          <Player />
        ) : (
          <SignUpbanner title="No credit cart needed" btnText="Sign up" />
        )}
      </HomeFooter>
      <MobileFooter />
      <MobileMenu />
    </div>
  );
};

export default Template;
