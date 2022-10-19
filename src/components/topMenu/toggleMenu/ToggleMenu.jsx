import "./toggleMenu.scss"

export default function ToggleMenu({toggler}) {
  return (
    <div className={toggler ? 'hamburger is-active' : 'hamburger'}>
      <div  className="hamburger__container">
        <div className="hamburger__inner"></div>
        <div className="hamburger__hidden"></div>
      </div>
    </div>
  )
}
