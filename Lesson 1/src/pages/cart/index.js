import React from "react";
import AppMinMax from "~c/inputs/minmax/minmax";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routesMap } from "~/routes";
import cartModel from "~s/cart.js";
import { observer } from "mobx-react";

@observer
class Cart extends React.Component {
  render() {
    let productsTableRows = cartModel.productsDetailed.map((product, i) => {
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <AppMinMax
              min={1}
              max={product.rest}
              cnt={product.cnt}
              onChange={cnt => cartModel.change(product.id, cnt)}
            />
          </td>
          <td>{product.price * product.cnt}</td>
          <td>
            <Button
              variant="primary"
              onClick={() => cartModel.remove(product.id)}
            >
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
        <Link to={routesMap.order} className="btn btn-info">
          >> Send
        </Link>
      </div>
    );
  }
}

export default Cart;
