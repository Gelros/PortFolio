import React from 'react';
import imgPp from '../assets/imgpp.png'


const Pp = (visible: any) => {
    console.log(visible.visible);
    
    return (

        <div className={`PP ${visible.visible?"bloc-menu-visible" : "" }`}>
            <img className={`photo-profil`} src={imgPp} alt="photodeprofil" />
         </div>
    );
};

export default Pp;