import React, { useState } from 'react';
import HW1 from './homework/1-simple';
import HW2 from './homework/2-input';
import Lazy from './homework/3-lazy';
import Derived from './homework/4-derived';

export default function(){
    let [someMin, setSomeMin] = useState(20);
    setTimeout(() => {
        setSomeMin(40);
    }, 2000)
    
    return (
        <div>
            <h2>MinMax simple</h2>
            <HW1 min={1} max={5}/>   
              <br/>
             <h2>Input Range</h2>
             <HW2 min={20} max={30}/>      
             <Lazy min={20} max={50}/>
             <h2>Derived input</h2>
             <Derived min={someMin} max={50}/>
        </div>
    );
}