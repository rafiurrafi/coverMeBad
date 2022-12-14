import Card from "../card/card.component";
import "./cards.style.scss";
const Cards = ({ albums = [], min = 0, max = albums.length, title = "" }) => {
  console.log(albums);
  return (
    <div className="cards">
      <div className="cards-header mb-m">
        <h3>{title}</h3>
        <a href="">See All</a>
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
