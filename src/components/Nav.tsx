import { useState } from "react";
import Pp from "./Pp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { Link, Element } from "react-scroll"

const Nav = () => {
  const [visible, setVisible] = useState(false);

  const mouseEnter = () => {
    setVisible(true);
  };

  const mouseLeave = () => {
    setVisible(false);
  };

  return (
    <div
      className={`navigation `}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <Pp visible={visible} />
      <Link
        className={`bloc-menu ${visible ? "bloc-menu-visible" : ""}`}
        to="accueil"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {" "}
        <li>Accueil</li>{" "}
      </Link>
      <Link
        className={`bloc-menu ${visible ? "bloc-menu-visible" : ""}`}
        to="presentation"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {" "}
        <li>Présentation</li>{" "}
      </Link>
      <Link
        className={`bloc-menu ${visible ? "bloc-menu-visible" : ""}`}
        to="portfolio"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {" "}
        <li>Projets</li>{" "}
      </Link>
      <Link
        className={`bloc-menu ${visible ? "bloc-menu-visible" : ""}`}
        to="competence"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {" "}
        <li>Compétences</li>{" "}
      </Link>
      <Link
        className={`bloc-menu ${visible ? "bloc-menu-visible" : ""}`}
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {" "}
        <li>Contact</li>{" "}
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className={`bloc-menu ${visible ? "bloc-menu-visible" : ""}`}
      >
        <FontAwesomeIcon icon={faAddressBook} />
      </Link>
    </div>
  );
};

export default Nav;
