import { Link } from "react-router-dom";
import Card from "../card/card.component";
import Title from "../title/title.component";
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
        <Title>{title}</Title>
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
