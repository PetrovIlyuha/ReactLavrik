import React from "react";
import AppMinMax from "~c/inputs/minmax/minmax";
import { Button, Table } from "react-bootstrap";

import cartModel from "~s/cart.js";
import Router from "~s/router.js";
import { observer } from "mobx-react";

@observer
class Cart extends React.Component {
  prevStep() {
    Router.moveTo("order");
  }
  render() {
    let productsTableRows = cartModel.products.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <AppMinMax
              min={1}
              max={product.rest}
              cnt={product.current}
              onChange={cartModel.changeOn[index]}
            />
          </td>
          <td>{product.price * product.current}</td>
          <td>
            <Button variant="primary" onClick={() => cartModel.remove(index)}>
              Remove Item
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Cart</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <td>Title</td>
              <td>Price</td>
              <td>Count</td>
              <td>Total</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>{productsTableRows}</tbody>
        </Table>
        <hr />
        <h2 style={{ marginLeft: "500px" }}>Total: {cartModel.total}</h2>
        <span style={{ marginLeft: "490px", fontSize: "1.5rem" }}>
          {cartModel.total}
        </span>
        <hr />
        <button className="btn btn-info" onClick={this.prevStep}>
          Send
        </button>
      </div>
    );
  }
}

export default Cart;
