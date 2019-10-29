import React from "react";
import { Button } from "react-bootstrap";

export default function(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <hr />
      <div>
        <strong>Price: {props.price}</strong>
      </div>
      <props.linkComponent to={props.backUrl}>
        <Button className="mt-3 p-3 bg-warning">Back To Product Gallery</Button>
      </props.linkComponent>
    </div>
  );
}
