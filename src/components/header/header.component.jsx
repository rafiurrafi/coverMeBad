import "./header.style.scss";
import { RiMoonClearFill } from "react-icons/ri";
import { BsFillEmojiSunglassesFill, BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { PageContext } from "../../context/page.context";
import { SearchContext } from "../../context/search.context";
const Header = () => {
  const { currentPage } = useContext(PageContext);
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  return (
    <div className="header">
      {currentPage === "search" && (
        <div className="header-search">
          <input
            placeholder="Search your music"
            className="header-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span>
            <BsSearch />
          </span>
        </div>
      )}
      <button
        style={{
          fontSize: "2rem",
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
      >
        <RiMoonClearFill />
      </button>
      <button
        style={{
          fontSize: "2rem",
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
      >
        <BsFillEmojiSunglassesFill />
      </button>
      <a href="" className="btn btn--ghost">
        Sign in
      </a>
      <a href="" className="btn btn--full">
        Sign up
      </a>
    </div>
  );
};

export default Header;
