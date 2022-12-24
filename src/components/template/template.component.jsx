import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import Header from "../header/header.component";
import HomeFooter from "../home-footer/home-footer.component";
import SignUpbanner from "../sign-up-banner/sign-up-banner.component";
import Player from "../player/player.component";
import { useState } from "react";
import MobileFooter from "../mobile-footer/mobile-footer.component";
const Template = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <HomeFooter>{isSignIn ? <Player /> : <SignUpbanner />}</HomeFooter>
      <MobileFooter />
    </div>
  );
};

export default Template;
