import React from 'react';
import HW1 from './homework/1-simple';
import HW2 from './homework/2-input';
import Lazy from './homework/3-lazy';


export default function(){
    return (
        <div>
            <h2>MinMax simple</h2>
            <HW1 min={1} max={5}/>   
              <br/>
             <h2>Input Range</h2>
             <HW2 min={20} max={30}/>      
             <Lazy min={1} max={10}/>
        </div>
    );
}