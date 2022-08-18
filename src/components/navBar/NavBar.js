// import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./NavBar.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // intial value will be false
  // set our menu openState to the opposite value
  const menuToggler = () => setMenuOpen((previousValue) => !previousValue);

  return (
    <div className="header">
      <div className="header__content">
        <div>
          <span className="logo">Crotona Park Community Dog Run</span>
        </div>

        <div>
          <nav
            // if menu is Open- run nav--open code, if not, empty object
            className={`$nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <a className="nav__item" href={"/events"}>
              Events
            </a>

            <a className="nav__item" href={"/dogbreeds"}>
              Dog Breeds
            </a>

            <a className="nav__item" href={"/shop"}>
              Shop
            </a>

            <a className="nav__item" href={"/signin"}>
              Sign In
            </a>

            <a className="nav__item" href={"/aboutus"}>
              About Us
            </a>
            <div className="nav__button">
              <Button />
            </div>
          </nav>
        </div>

        <div>
          <div className="header__button"></div>
          {/* // hamburger icon */}
          <button className="header__toggler" onClick={menuToggler}>
            {/* // if menu is not open, display the hamburger icon. If it is,
            display the ai close square icon. */}
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineClose />}
          </button>
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return <button className="button">Click Me!</button>;
};

export default NavBar;
