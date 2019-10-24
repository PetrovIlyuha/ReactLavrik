import React from "react";
import PropTypes from "prop-types";
import AppMinMax from "../inputs/minmax/minmax";
import { Button } from "react-bootstrap";

export default class extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    onSend: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
  };

  render() {
    let totalShippingCost = this.props.products.reduce(
      (acc, product) => product.price * product.current + acc,
      0
    );
    let productsTableRows = this.props.products.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <AppMinMax
              min={1}
              max={product.rest}
              cnt={product.current}
              onChange={cnt => this.props.onChange(index, cnt)}
            />
          </td>
          <td>{product.price * product.current}</td>
          <td>
            <Button
              variant="primary"
              onClick={() => this.props.onRemove(index)}
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
          <tbody>{productsTableRows}</tbody>
        </table>
        <hr />
        <h2 style={{ marginLeft: "500px" }}>Total: </h2>
        <span style={{ marginLeft: "490px", fontSize: "1.5rem" }}>
          {totalShippingCost}
        </span>
        <hr />
        <button className="btn btn-info" onClick={this.props.onSend}>
          Send
        </button>
      </div>
    );
  }
}
