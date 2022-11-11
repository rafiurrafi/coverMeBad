import "./search.style.scss";
import Content from "../../components/content/content.component";
import { useContext } from "react";
import { PageContext } from "../../context/page.context";
import { useEffect } from "react";
import { GenreContext } from "../../context/genre.context";

const Search = () => {
  const { setCurrentPage } = useContext(PageContext);
  const { genres } = useContext(GenreContext);
  useEffect(() => {
    setCurrentPage("page");
  }, []);
  return (
    <Content>
      <div className="search-page">
        <h3>Browse All</h3>
        <div className="search-genres">
          {genres.map(({ id, title, color, cover }) => (
            <div
              className="search-box"
              style={{ backgroundColor: color }}
              key={id}
            >
              <h3>{title}</h3>
              <img src={cover} alt={title} />
            </div>
          ))}
        </div>
      </div>
    </Content>
  );
};

export default Search;
