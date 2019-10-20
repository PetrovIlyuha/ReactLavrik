import React from 'react'
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    };

    state = {
        counter: 0
    }

    increment = () => {
        this.set(this.state.counter + 1)
    };
    
    decrement = () => {
        this.set(this.state.counter - 1);
    }

    set(newCounter){
        let counter = Math.min(Math.max(newCounter, this.props.min), this.props.max);
        this.setState({counter});
    }
    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <strong>{this.state.counter}</strong>
                <br/>
                <button onClick={this.increment}>+</button>
            </div>
        );                  
    }
};

