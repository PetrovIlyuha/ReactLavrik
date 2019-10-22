import React from 'react';
import AppMinMax from './inputs/minmax/minmax';
import { Button } from 'react-bootstrap';


export default class extends React.Component {
    state = {
        products: getProducts(),
        formDone: false
    }

changeCnt(index, cnt){
    let products = [...this.state.products];    
    products[index] = {...products[index], current: cnt};
    this.setState({products})
}

removeItem(index) {
   let products = [...this.state.products].filter((product, ind) => ind !== index)
   this.setState({products})
}

sendForm = () => {
    this.setState({formDone: true})
}

render() {         
let productsTableRows = this.state.products.map((product, index) => {
    return (
        <tr key={index}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
                <AppMinMax 
                    min={1} 
                    max={product.rest} 
                    cnt={product.current}    
                    onChange={(cnt) => this.changeCnt(index, cnt)}
                    onClick={() => this.removeItem(index)}                  
                />
            </td>
            <td>{product.price * product.current}</td>
            <td>
                <Button variant="primary" onClick={() => this.removeItem(index)}>Remove Item</Button>
            </td>
        </tr>
    )
});
    let totalShippingCost = this.state.products
        .reduce((acc, product) => (product.price * product.current) + acc, 0);
    let pages = this.state.formDone ? showCongrats() : showForm(productsTableRows, totalShippingCost, this.sendForm)
      return (
          <div className="container">              
             {pages} 
             <hr/>
             <button onClick={() => this.changeCnt(1,4)}>
                Change Counter Min
             </button>
          </div>
      );
  }
}

function showForm(productsTableRows, totalShippingCost, sendForm){
    return (
        <div>
            <h2>Cart</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {productsTableRows}
                </tbody>                
            </table>
            <hr/>               
            <h2 style={{"marginLeft": '500px'}}>Total: </h2>
            <span style={{"marginLeft": '490px', "fontSize": '1.5rem'}}>{totalShippingCost}</span>
            <hr/>
            <button onClick={sendForm}>Send</button>
        </div>
    );
}

const showCongrats = () => (
    <div>   
        <h3>Your Order is in Process</h3>
        <p># 324</p>        
    </div>
)
const getProducts = () => {
    return (
        [
            {
                id: 100,
                title: 'Galaxy Fold',
                price: 120000,
                rest: 10,
                current: 1
            },
            {
                id: 101,
                title: 'Huawei P30',
                price: 40000,
                rest: 10,
                current: 1
            },
            {
                id: 102,
                title: 'Xiaomi Mi6 Note',
                price: 15000,
                rest: 10,
                current: 1
            },
            {
                id: 103,
                title: 'IPhone XS',
                price: 88000,
                rest: 10,
                current: 1
            }
        ]
    )
}