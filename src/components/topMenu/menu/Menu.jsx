import "./menu.scss"

export default function Menu({toggler}) {
  return (
    <div className={toggler ? "menu active" : "menu"}>
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portifolio</a>
        </li>
        <li>
          <a href="#works">Serviços</a>
        </li>
        <li>
          <a href="#testimonials">Depoimentos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  )
}
