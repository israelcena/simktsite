import "./item.scss"

export default function Item({image, icon, title, description}) {
  return (
    <div className="works__item">
      <div className="left">
        <div className="leftContainer">
          <div className="iconContainer">
            {icon}
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <span><a href="#portfolio">Projetos Anteriores</a></span>
        </div>
      </div>
      <div className="right">
        <img
          src={image}
          alt=""/>
      </div>
    </div>
  )
}
