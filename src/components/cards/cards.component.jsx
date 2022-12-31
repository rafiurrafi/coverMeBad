import { Link } from "react-router-dom";
import { useWindowSize } from "../../utils/custom-hooks";
import Card from "../card/card.component";
import Title from "../title/title.component";
import { CardsContainer, CardsHeader, CardsItem } from "./cards.style";
import Slider from "react-slick";
import { sliderSettings } from "../../utils/slider-settings";
import "slick-carousel/slick/slick.css";
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
      {width > 991 ? (
        <CardsItem width={width}>
          {albums
            .filter((_, idx) => idx >= min && idx <= max)
            .map((album) => (
              <Card key={album.id} content={album} />
            ))}
        </CardsItem>
      ) : (
        <Slider {...sliderSettings}>
          {albums
            .filter((_, idx) => idx >= min && idx <= max)
            .map((album) => (
              <Card key={album.id} content={album} />
            ))}
        </Slider>
      )}
    </CardsContainer>
  );
};

export default Cards;
