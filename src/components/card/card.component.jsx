import "./card.style.scss";
const Card = ({ content: { id, cover, title, desc } }) => {
  return (
    <div className="card">
      <img src={cover} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
