import { BsWhatsapp } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";
import ToggleMenu from "./toggleMenu/ToggleMenu";
import { useCallback, useState } from "react";

import "./topBar.scss";
import logoImage from "../../images/marca.svg";
import Menu from "./menu/Menu";

export default function TopBar() {
  const [isTextChanged, setIsTextChanged] = useToggle();
  
  return (
    <nav className={isTextChanged ? "topBar active" : "topBar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src={logoImage} alt="Logo SI Marketing" />
          </a>
        </div>

        <div className="center">
          <h1 className="text-logo">Agência Digital</h1>
          <div className="items">
            <div className="item-container">
              <BsWhatsapp className="icon" />
              <span>22 99924-5355</span>
            </div>
            <div className="item-container">
              <BsMailbox className="icon" />
              <span>israelsjm@gmail.com</span>
            </div>
          </div>
        </div>

        <div onClick={setIsTextChanged} className="right">
          <ToggleMenu toggler={isTextChanged} />
        </div>
      </div>
      <div onClick={setIsTextChanged}>
        <Menu toggler={isTextChanged} />
      </div>
    </nav>
  );
}

const useToggle = (initialState = false) => {
  // Initialize the state
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};
