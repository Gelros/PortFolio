import React from 'react';

const Competence = () => {
    return (
        <div className='comp-section' >
            <h1 data-aos="fade-down">Mes compétences</h1>
            <div className="comp-grille">
                <div className="grille" data-aos="fade-up-right">
                    <div className="grille-container">
                        <h3>Javascript</h3>
                        <p className="percent">75%</p>
                        <div className="note">
                            <div className="note-2 a"></div></div>
                    </div>

                    <div className="grille-container">
                        <h3>Node Js</h3>
                        <p className="percent">65%</p>
                        <div className="note">
                            <div className="note-2 b"></div></div>
                    </div>

                    <div className="grille-container">
                        <h3>SEO</h3>
                        <p className="percent">85%</p>
                        <div className="note">
                            <div className="note-2 c"></div></div>
                    </div>

                </div>
                <div className="grille" data-aos="fade-up-left">
                    <div className="grille-container">
                        <h3>React</h3>
                        <p className="percent">80%</p>
                        <div className="note">
                            <div className="note-2 d"></div></div>
                    </div>

                    <div className="grille-container">
                        <h3>TypeScript</h3>
                        <p className="percent">50%</p>
                        <div className="note">
                            <div className="note-2 e"></div></div>
                    </div>

                    <div className="grille-container">
                        <h3>GitHub</h3>
                        <p className="percent">80%</p>
                        <div className="note">
                            <div className="note-2 f"></div></div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Competence;