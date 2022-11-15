import "./search.style.scss";
import Content from "../../components/content/content.component";
import { useContext } from "react";
import { PageContext } from "../../context/page.context";
import { useEffect } from "react";
import { GenreContext } from "../../context/genre.context";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/search.context";
import { SongContext } from "../../context/song.context";
import { PlaylistContext } from "../../context/playlist.context";

const Search = () => {
  const { setCurrentPage } = useContext(PageContext);
  const { genres } = useContext(GenreContext);
  const { songs } = useContext(SongContext);
  const { playlists } = useContext(PlaylistContext);
  const { searchQuery } = useContext(SearchContext);
  useEffect(() => {
    setCurrentPage("search");
  }, []);
  const filteredSongs = songs.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  return (
    <Content>
      {searchQuery ? (
        <div className="search-page">
          <div className="search-result-header">
            <div className="search-result-main">{filteredSongs[0].title}</div>
            <div className="search-result-options">
              {songs.map((song) => {
                return song.title;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="search-page">
          <h3>Browse All</h3>
          <div className="search-genres">
            {genres.map(({ id, title, color, cover }) => (
              <Link
                to={`/genre/${id}`}
                className="search-box"
                style={{ backgroundColor: color }}
                key={id}
              >
                <h3>{title}</h3>
                <img src={cover} alt={title} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </Content>
  );
};

export default Search;
