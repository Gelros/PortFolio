import React from 'react';
import Accueil from "../pages/accueil"
import Comp from "../pages/competences"
import Contact from "../pages/contact"
import Portfolio from "../pages/portfolio"
import Presentation from "../pages/presentation"
import Navigation from "../components/Nav"

const index = () => {
    return (
        <div>
            <Navigation/>
            <Accueil/>
            <Presentation/>
            <Portfolio/>
            <Comp/>
            <Contact/>
        </div>           
    );
};

export default index;