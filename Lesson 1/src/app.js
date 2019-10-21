import React from 'react';
import AppMinMax from './homework/5-normal-input';

export default class extends React.Component {
    state = {
        products: [
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
                rest: 7,
                current: 3
            },
            {
                id: 102,
                title: 'Xiaomi Mi6 Note',
                price: 15000,
                rest: 5,
                current: 2
            }
        ]
    }

    changeCnt(index, cnt){
      let newProducts = [...this.state.products];
      console.log([...this.state.products]);
      let newProduct = {...newProducts[index]};
      newProduct.current = cnt;
      newProducts[index] = newProduct;
      this.setState({products: newProducts})
    }
    removeItem(index) {
        let finalCart = [...this.state.products].filter((index) => products.id !== index);
        this.setState({products: finalCart})
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
                    />
                </td>
                <td>{product.price * product.current}</td>
                <button onChange={() => this.removeItem()}>Remove Item</button>
                </tr>
        )
    });
    let totalShippingCost = this.state.products
        .reduce((acc, product) => (product.price * product.current) + acc, 0);
      return (
          <div>
              <h2>Cart</h2>
              <table>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                    </tr>
                    {productsTableRows}
                </tbody>                
                </table>
                <hr/>               
                <h2>Total: </h2>
                <span>{totalShippingCost}</span>
          </div>
      );
  }
}
