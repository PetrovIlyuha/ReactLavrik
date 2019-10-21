import React from 'react'
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    };

    static getDerivedStateFromProps(props, state) {
        console.log(props);
        state.counter = Math.min(Math.max(state.counter, props.min), props.max)
        state.inputValue = state.counter
        return state
    } 

    state = {
        counter: this.props.min,
        inputValue: this.props.min
    }

    increment = () => {
        this.set(this.state.counter + 1)
    };
    
    decrement = () => {
        this.set(this.state.counter - 1);
    }

    set(newCounter){
        let counter = Math.min(Math.max(newCounter, this.props.min), this.props.max);
        this.setState({
            counter,
            inputValue: counter
        });
    }

    setValue(newStr) {
       this.setState({inputValue: newStr});
    }

    applyValue = () => {
        let counter = parseInt(this.state.inputValue);
        this.set(isNaN(counter) ? this.props.min : counter);
    }

    checkEnterKey = (e) => {
        if (e.keyCode === 13) {
            this.applyValue();
        }
    }

    render() {
        return (
            <div>
                {this.state.counter}
                <br/>
                {this.state.inputValue}
                <h3>Derived Input</h3>
                <button onClick={this.decrement} style={{marginRight: '10px'}}>-</button>
                <input 
                    value={this.state.inputValue} 
                    onChange={(e) => this.setValue(e.target.value)}
                    onBlur={this.applyValue}
                    onKeyUp={this.checkEnterKey}
                />                
                <button onClick={this.increment} style={{marginLeft: '10px'}}>+</button>                
            </div>
        );                  
    }
};
