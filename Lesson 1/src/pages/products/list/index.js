import React from "react";
import productModel from "~s/products.js";
import cart from "~s/cart.js";
import { Card, Button } from "react-bootstrap";
import { urlBuilder } from "~/routes";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function(props) {
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
        <Card>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <strong>Price: {product.price}</strong>
            </Card.Text>
            <Link to={urlBuilder("product", { id: product.id })}>
              Get more...
            </Link>
            <hr />
            <Button variant="success" onClick={() => cart.add(product.id)}>
              Add to Cart
            </Button>
            {btn}
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <h1>Products Page</h1>
      <div className="row">{productsCards}</div>;
    </div>
  );
}
