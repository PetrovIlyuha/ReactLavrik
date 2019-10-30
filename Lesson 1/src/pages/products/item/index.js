import React from "react";
import E404 from "~c/errors/404";
import { routesMap } from "~/routes";
import { Link } from "react-router-dom";
import ProductItem from "~c/products/item";
import withStore from "~/hocs/withStore.js";

class Product extends React.Component {
  render() {
    let id = this.props.match.params.id;
    let product = this.props.stores.products.getById(id);
    let cart = this.props.stores.cart;

    if (product === null) {
      return <E404 />;
    } else {
      return (
        <ProductItem
          title={product.title}
          price={product.price}
          backUrl={routesMap.home}
          linkComponent={Link}
          image={product.image}
          description={product.description}
          inCart={cart.inCart(product.id)}
          onAdd={() => cart.add(product.id)}
          onRemove={() => cart.remove(product.id)}
        />
      );
    }
  }
}

export default withStore(Product);
