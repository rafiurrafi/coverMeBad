import { Link } from "react-router-dom";
import Card from "../card/card.component";
import "./cards.style.scss";
const Cards = ({
  albums = [],
  min = 0,
  max = albums.length,
  title = "",
  section = 1,
  page = false,
}) => {
  return (
    <div className="cards">
      <div className="cards-header mb-m">
        <h3>{title}</h3>
        {!page && <Link to={`section/section-${section}`}>See All</Link>}
      </div>
      <div className="cards-item">
        {albums
          .filter((_, idx) => idx >= min && idx <= max)
          .map((album) => (
            <Card key={album.id} content={album} />
          ))}
      </div>
    </div>
  );
};

export default Cards;
