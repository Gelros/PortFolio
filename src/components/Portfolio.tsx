import React from 'react';
import { NavLink } from 'react-router-dom';

const Portfolio = (props:any) => {
    return (
        <div className='portfolio-section'>
           {props.data.map((el:{title:string, url:string, description:string, image:string})=> (
               <div key={el.title} data-aos="zoom-in">
                    <NavLink to={el.url} className="class-active" target='_blank'>
                        <div className='centrage'>
                          <h1>{el.title}</h1>
                          <p>{el.description}</p>
                        </div>
                    </NavLink>
                    <img className="img-portfolio" src={require(`../assets/${el.image}`)} alt=''/>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;