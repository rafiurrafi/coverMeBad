import { RiMoonClearFill } from "react-icons/ri";
import { BsFillEmojiSunglassesFill, BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { PageContext } from "../../context/page.context";
import { SearchContext } from "../../context/search.context";
import {
  HeaderAuthBtn,
  HeaderContainer,
  HeaderRight,
  HeaderSearch,
} from "./header.style";
import { ThemeContext } from "../../context/theme.context";

import { ButtonLink } from "../button/button.component";
const Header = () => {
  const { currentPage } = useContext(PageContext);
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer theme={theme}>
      {currentPage === "search" ? (
        <HeaderSearch>
          <input
            placeholder="Search your music"
            className="header-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span>
            <BsSearch />
          </span>
        </HeaderSearch>
      ) : (
        <div>&nbsp;</div>
      )}
      <HeaderRight>
        {theme === "light" ? (
          <button
            style={{
              fontSize: "2rem",
              backgroundColor: "transparent",
              color: theme === "light" ? "black" : "white",
              border: "none",
            }}
            onClick={toggleTheme}
          >
            <RiMoonClearFill />
          </button>
        ) : (
          <button
            style={{
              fontSize: "2rem",
              backgroundColor: "transparent",
              color: theme === "light" ? "black" : "white",
              border: "none",
            }}
            onClick={toggleTheme}
          >
            <BsFillEmojiSunglassesFill />
          </button>
        )}

        <HeaderAuthBtn>
          <ButtonLink
            to="/auth/sign-in"
            type="ghost"
            theme={theme}
            style={{ marginLeft: "1.5rem" }}
          >
            Sign in
          </ButtonLink>
          <ButtonLink
            to="/auth/sign-up"
            style={{ marginLeft: "1.5rem" }}
            theme={theme}
          >
            Sign up
          </ButtonLink>
        </HeaderAuthBtn>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
