import { AiOutlineCheck } from "react-icons/ai";
import "./card.scss";

export default function Card({
  id,
  featured,
  img,
  title,
  icon,
  desc,
  name,
}) {
  return (
    <div className={featured ? "card featured" : "card"}>
      <div className="top">
        <AiOutlineCheck style={{ color: `green` }} className="left" />
        <img className="user" src={img} alt={title} />
        <div className="right">{icon}</div>
      </div>
      <div className="center">
        <p>{desc}</p>
      </div>
      <div className="bottom">
        <h3>{name}</h3>
        <h4>{title}</h4>
      </div>
    </div>
  );
}
