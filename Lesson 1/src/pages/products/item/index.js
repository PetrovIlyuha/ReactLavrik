import React from "react";
import E404 from "~c/errors/404";
import productModel from "~s/products.js";
import { Link } from "react-router-dom";
import { routesMap } from "~/routes";

export default function(props) {
  let id = props.match.params.id;
  let product = productModel.getById(id);
  return (
    <div>
      <h1>{product.title}</h1>
      <hr />
      <div>
        <strong>Price: {product.price}</strong>
      </div>
      <Link to={routesMap.home}>Back to Products</Link>
    </div>
  );
}
