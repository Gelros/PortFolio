import React from 'react';
import Portfolio from '../components/Portfolio';
import Data from '../models/projets.json'
const portfolio = () => {
    return (
        <div id='portfolio' className='portfolio  main'>
            <Portfolio data={Data}/>
        </div>
    );
};

export default portfolio;