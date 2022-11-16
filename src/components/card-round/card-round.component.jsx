import "./card-round.style.scss";
const CardRound = ({ artist }) => {
  return (
    <div>
      <div className="card-round">
        <img src={artist.avatar} alt="" />
        <h3 className="card-title">{artist.name}</h3>
        <p>Artist</p>
      </div>
    </div>
  );
};

export default CardRound;
