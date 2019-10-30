import React from "react";
import { Button } from "react-bootstrap";

export default function(props) {
  let btn;
  if (props.inCart) {
    btn = (
      <Button variant="danger" onClick={props.onRemove}>
        Remove from Cart
      </Button>
    );
  } else {
    btn = (
      <Button variant="success" onClick={props.onAdd}>
        Add to Cart
      </Button>
    );
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <hr />
      <div>
        <div>
          <img src={props.image} alt="Phone image" style={{ width: '300px'}} />
          <h3 style={{color: '#fff'}}>{props.description}</h3>
        </div>

        <h2>Price: {props.price}</h2>
      </div>
      <props.linkComponent to={props.backUrl}>
        <Button className="mt-3 p-3 bg-warning">Back To Product Gallery</Button>
      </props.linkComponent>
      <p>Text About Product</p>
      {btn}
    </div>
  );
}
