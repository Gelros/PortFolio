import React from 'react';

const Pp = (visible: any) => {
    console.log(visible.visible);
    
    return (

        <div className={`PP ${visible.visible?"bloc-menu-visible" : "" }`}>
            
         </div>
    );
};

export default Pp;