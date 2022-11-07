import Card from "../card.component";
import "./cards.style.scss";
const Cards = ({ albums }) => {
  return (
    <div className="cards">
      {albums.map((album) => (
        <Card content={album} />
      ))}
    </div>
  );
};

export default Cards;
