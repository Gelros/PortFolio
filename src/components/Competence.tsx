import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import {faGauge} from "@fortawesome/free-solid-svg-icons"
import {faReact} from "@fortawesome/free-brands-svg-icons"
import {faT} from "@fortawesome/free-solid-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
const Competence = () => {
    return (
        <div className='comp-section' >
            <h1 data-aos="fade-down">Mes compétences</h1>
            <div className="comp-grille">
                <div className="grille" data-aos="fade-up-right">
                    <div className="grille-container js">
                        <h3>Javascript</h3>
                        <FontAwesomeIcon icon={faNodeJs} />
                    </div>

                    <div className="grille-container node">
                        <h3>Node Js</h3>
                        <FontAwesomeIcon icon={faNodeJs} />
                    </div>

                    <div className="grille-container">
                        <h3>SEO</h3>
                        <FontAwesomeIcon icon={faGauge} />
                    </div>

                </div>
                <div className="grille" data-aos="fade-up-left">
                    <div className="grille-container">
                        <h3>React</h3>
                        <FontAwesomeIcon icon={faReact} />
                    </div>

                    <div className="grille-container">
                        <h3>TypeScript</h3>
                        <FontAwesomeIcon icon={faT} />
                    </div>

                    <div className="grille-container">
                        <h3>GitHub</h3>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Competence;