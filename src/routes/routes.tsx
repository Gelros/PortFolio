import React from 'react';
import {Routes, Route} from "react-router-dom"
import Accueil from "../pages/accueil"
import Competence from "../pages/competences"
import Contact from "../pages/contact"
import Portfolio from "../pages/portfolio"
import Presentation from "../pages/presentation"

const routes = () => {
    return (
        <Routes>
            <Route path='/' element={<Accueil/>}/>
            <Route path='/presentation' element={<Presentation/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/competence' element={<Competence/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    );
};

export default routes;