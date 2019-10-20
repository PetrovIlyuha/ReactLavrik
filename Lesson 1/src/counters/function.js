import React, { useState } from 'react';
// import './function.style.css';


export default function() {
    let [counter, setCounter] = useState(0);

    let increase = () => {
        if (counter < 5) {
            setCounter(counter+1);
        }
    };
    let decrease = () => {
        if (counter > 0) {
            setCounter(counter-1);
        }
    }
    return (
        <div className="counter">
            <button onClick={decrease}>-</button>
            <strong>{counter}</strong>
            <br/>
            <button onClick={increase}>+</button>
        </div>
    );
}
