import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Presentation = () => {
    return (
        <div className='presentation-section'>
            <h1 data-aos="fade-down">Qui suis-je ?</h1>
            <div className="bloc-pre">
             <div className="desc" data-aos="fade-down-right">
                
                <h2>Je m'appelle Guillaume LACOLLEY</h2>
                <p>J'ai bifurqué dans mes études pour devenir <strong>Développeur web</strong>, 
                   afin d'y parvenir j'ai suivi une formation diplomante <strong>Développeur web</strong> de niveau 5, 
                    par le biais de l'organisme OpenClassrooms.
                </p>
             </div>
             <div className="dev" data-aos="fade-down-left">
                
                    <div className='icon'><FontAwesomeIcon icon={faHtml5} />
                    <div>Développeur Front End</div>
                    </div>
                     
                    <div  className='icon'><FontAwesomeIcon icon={faNodeJs} />
                    <div>Développeur Back End</div>
                    </div>
                    
                
             </div>
            </div>
        </div>
    );
};

export default Presentation;