/* eslint-disable array-callback-return */
import React from 'react';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Accueil = () => {
    
    return (
        <div className='accueil-section' data-aos="fade-down">
            <h1 >Bienvenue sur mon Portfolio</h1>
            <Typewriter
              onInit={(typewriter) => { 
              typewriter
              .changeDelay(35)
              .changeDeleteSpeed(25)
              .pauseFor(1000)
              .typeString('Je suis, Guillaume,')
              .typeString("<strong> développeur,</strong>")
              .pauseFor(500)
              .typeString("<span style='color:#FF0000'> JavaScript !</span>")
              .pauseFor(500)
              .deleteChars(13)
              .pauseFor(500)
              .typeString("<span style='color:#FF0000'> React !</span>")
              .pauseFor(500)
              .deleteChars(8)
              .pauseFor(500)
              .typeString("<span style='color:#FF0000'> Node !</span>")
              .pauseFor(500)
              .deleteChars(7)
              .pauseFor(500)
              .typeString("<span style='color:#FF0000'> Web !</span>")
             .start();
            }}
            />
            <a href="https://www.linkedin.com/in/guillaume-lacolley-892877281/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://github.com/Gelros" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
    );
};

export default Accueil;