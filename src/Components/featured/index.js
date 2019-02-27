import React from 'react';
import Carousal from './Carousal';
import TimeUntil from './TimeUnitl';


const Featured = () => {
   
    return (
        <div style = {{position: 'relative'}}>
        <Carousal/>
       
        <div className="artist_name">
            <div className="wrapper">
                    Jublie
            </div>    
        </div>
        <TimeUntil/>
        </div>
    );
};

export default Featured; 