import React from "react";
import { Card, Button } from "react-bootstrap";
import { urlBuilder } from "~/routes";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import withStore from "~/hocs/withStore.js";

class Products extends React.Component {
  render() {
    let productModel = this.props.stores.products;
    let cart = this.props.stores.cart;
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
              <Card.Img
                variant="top"
                src={product.image}
                style={{
                  width: "200px",
                  borderRadius: "10px",
                  margin: "0 auto"
                }}
              />
              <Card.Text>
                <strong>Price: {product.price}</strong>
              </Card.Text>
              <Link
                style={{ color: "teal" }}
                to={urlBuilder("product", { id: product.id })}
              >
                View Product Details...
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

export default withStore(Products);
