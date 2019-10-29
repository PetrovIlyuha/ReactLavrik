import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import orderModel from "~s/order";
import router from "~/routes";
import cartModel from "~s/cart";
import { Link } from "react-router-dom";
import { routesMap } from "~/routes";

@observer
class Order extends Component {
  state = {
    showModal: false
  };

  show = () => {
    this.setState({ showModal: true });
  };

  hide = () => {
    this.setState({ showModal: false });
  };

  confirm = () => {
    this.hide();
    this.props.history.push(routesMap.result);
  };

  render() {
    let formFields = [];
    for (let name in orderModel.formData) {
      let field = orderModel.formData[name];
      formFields.push(
        <Form.Group key={name} controlId={"order-form-" + name}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type="text"
            value={field.value}
            onChange={e => orderModel.change(name, e.target.value)}
          />
          {field.valid === null || field.valid ? (
            ""
          ) : (
            <Form.Text className="text-muted">{field.errorText}</Form.Text>
          )}
        </Form.Group>
      );
    }
    return (
      <div>
        <h2>Order</h2>
        <hr />
        {formFields}
        <Link to={routesMap.home} className="btn btn-warning">
          Back to Cart
        </Link>
        &nbsp;
        <Button
          variant="info"
          onClick={this.show}
          disabled={!orderModel.formValid}
        >
          Go to CheckOut
        </Button>
        <Modal show={this.state.showModal} backdrop="static" onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Check Order Information</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <strong>Total: {cartModel.total}</strong>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hide}>
              Close
            </Button>
            <Button variant="primary" onClick={this.confirm}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Order;
