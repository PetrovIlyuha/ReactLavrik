import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

export default class extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    formData: PropTypes.object.isRequired,
    onSend: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    let formFields = [];
    for (let name in this.props.formData) {
      let field = this.props.formData[name];
      formFields.push(
        <Form.Group key={name} controlId={"order-form-" + name}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type="text"
            value={field.value}
            onChange={e => this.props.onChange(name, e.target.value)}
          />
        </Form.Group>
      );
    }
    return (
      <div>
        <h2>Order</h2>
        <hr />
        {formFields}
        <Button variant="warning" onClick={this.props.onBack}>
          Back to Cart
        </Button>
        <Button variant="info" onClick={this.props.onSend}>
          Go to CheckOut
        </Button>
      </div>
    );
  }
}
