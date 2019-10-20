import React from 'react'

export default class extends React.Component {
    state = {
        counter: 0
    }

    increment = () => {
        if (this.state.counter < 5) {
            this.setState({
                counter: this.state.counter + 1
            })
        }
    };
    
    decrement = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
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
