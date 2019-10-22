import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';
// import App from './inputs/app-simple'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDom.render(<App/>, document.querySelector('#app'));

/*
    let hr = React.createElement('hr');
    let div = React.createElement('div', {className: 'test'}, [hr]);

    <div className="test">
        <span>Hello!</span>    
        <hr/>
    </div>
*/

/*
    class -> className
    
    events
        oninput -> onChange
        onchange -> can`t
        ondblclick -> onDoubleClick

    some={x}
*/