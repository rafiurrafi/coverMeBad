import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme.context";
import { CardRoundContainer } from "./card-round.style";
const CardRound = ({ artist }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <CardRoundContainer theme={theme}>
      <img src={artist.avatar} alt="" />
      <Link to={`/artist/${artist.id}`}>
        <h3 className="card-title">{artist.name}</h3>
      </Link>
      <p>Artist</p>
    </CardRoundContainer>
  );
};

export default CardRound;
