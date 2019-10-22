import React from 'react';
import AppLazyInput from './lazy/lazy';


export default class extends React.Component {
    state = {
        inp1: 'start',
        inp2: 'start another input'
    }


  render() {    
    return (
      <div>
        <h2>Lazy Input</h2>
        <p>{this.state.inp1}</p>
        <AppLazyInput 
          nativeProps={{type: 'text', className: 'beauty'}}
          value={this.state.inp1}
          onChange={(e) => this.setState({inp1: e.target.value})}  
        /> 
        <h2>Lazy Input Not so Lazy with NativeProps</h2>
        <p>{this.state.inp2}</p>
        <AppLazyInput 
          nativeProps={{
            type: 'text',
            className: 'even more beauty',
            onChange: (e) => this.setState({inp2: e.target.value})
          }}
          value={this.state.inp2}            
        />
        <hr/>
        <button 
          onClick={(e) => this.setState({inp1: 'boohaaha'})}
        >
          Changed data spontaneously
        </button>
      </div>
      
    )     
  }
}
