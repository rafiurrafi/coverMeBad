import { Link } from "react-router-dom";
import { useWindowSize } from "../../utils/custom-hooks";
import Card from "../card/card.component";
import Title from "../title/title.component";
import { CardsContainer, CardsHeader, CardsItem } from "./cards.style";

const Cards = ({
  albums = [],
  min = 0,
  max = albums.length,
  title = "",
  section = 1,
  page = false,
}) => {
  const width = useWindowSize();
  return (
    <CardsContainer>
      <CardsHeader className="mb-m">
        <Title>{title}</Title>
        {!page && <Link to={`section/section-${section}`}>See All</Link>}
      </CardsHeader>
      <CardsItem width={width}>
        {albums
          .filter((_, idx) => idx >= min && idx <= max)
          .map((album) => (
            <Card key={album.id} content={album} />
          ))}
      </CardsItem>
    </CardsContainer>
  );
};

export default Cards;
