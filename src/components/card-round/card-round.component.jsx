import { CardRoundContainer } from "./card-round.style";
const CardRound = ({ artist }) => {
  return (
    <CardRoundContainer>
      <img src={artist.avatar} alt="" />
      <h3 className="card-title">{artist.name}</h3>
      <p>Artist</p>
    </CardRoundContainer>
  );
};

export default CardRound;
