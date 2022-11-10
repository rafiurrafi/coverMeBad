import Card from "../card/card.component";
import "./cards.style.scss";
const Cards = ({ albums }) => {
  return (
    <div className="cards">
      <div className="cards-header mb-m">
        <h3>Latest Playlist</h3>
        <a href="">See All</a>
      </div>
      <div className="cards-item">
        {albums.map((album) => (
          <Card content={album} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
