import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./card.style.scss";
const Card = ({ content: { id, cover, title, desc } }) => {
  return (
    <div className="card">
      <img src={cover} alt="" />
      <Link to={`/playlist/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{desc}</p>
      <button className="card-btn card-inner-btn">
        <BsFillPlayFill />
      </button>
    </div>
  );
};

export default Card;
