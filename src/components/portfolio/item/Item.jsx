import "./item.scss";

export default function Item({title, image}) {
  return (
    <div className="container__item">
          <img src={image} alt={title+" imagem"} />
          <h3>{title}</h3>
    </div>
  )
}
