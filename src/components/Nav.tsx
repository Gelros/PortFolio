import React, { useState } from "react";
import Pp from "./Pp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';



const Nav = () => {
    const [visible, setVisible] = useState(false)
   
    const mouseEnter = () => {
        setVisible(true)
    }

    const mouseLeave = () => {
        setVisible(false)
    }

    return (
        <div className={`navigation ` } onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            
            <Pp visible={visible}/> 
                    <a className={`bloc-menu ${visible?"bloc-menu-visible" : "" }`}  href='#accueil'> <li>Accueil</li> </a>
                    <a className={`bloc-menu ${visible?"bloc-menu-visible" : "" }`} href='#presentation'> <li>Présentation</li> </a>
                    <a className={`bloc-menu ${visible?"bloc-menu-visible" : "" }`} href='#portfolio'> <li>Projets</li> </a>
                    <a className={`bloc-menu ${visible?"bloc-menu-visible" : "" }`}  href='#competence'> <li>Compétences</li> </a>
                    <a className={`bloc-menu ${visible?"bloc-menu-visible" : "" }`} href='#contact'> <li>Contact</li> </a>
                    <a href="#contact" className={`bloc-menu ${visible?"bloc-menu-visible" : "" }`}><FontAwesomeIcon icon={faAddressBook} /></a>
        </div>
    );
};

export default Nav;