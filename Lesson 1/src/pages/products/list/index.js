import React from "react";
import productModel from "~s/products.js";
import cart from "~s/cart.js";
import { Card, Button } from "react-bootstrap";
import { urlBuilder } from "~/routes";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { observer } from "mobx-react";

@observer
class Products extends React.Component {
  render() {
    let productsCards = productModel.items.map(product => {
      let btn;

      if (cart.inCart(product.id)) {
        btn = (
          <Button variant="danger" onClick={() => cart.remove(product.id)}>
            Remove from Cart
          </Button>
        );
      } else {
        btn = (
          <Button variant="success" onClick={() => cart.add(product.id)}>
            Add to Cart
          </Button>
        );
      }
      return (
        <div className={"col col-4" + styles.col} key={product.id}>
          <Card
            bg="warning"
            text="blue"
            style={{ width: "18rem", margin: "15px" }}
          >
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <strong>Price: {product.price}</strong>
              </Card.Text>
              <Link
                style={{ color: "#fff" }}
                to={urlBuilder("product", { id: product.id })}
              >
                Get more...
              </Link>
              <hr />
              {btn}
            </Card.Body>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Products Page</h1>
        <div className="row">{productsCards}</div>;
      </div>
    );
  }
}

export default Products;
