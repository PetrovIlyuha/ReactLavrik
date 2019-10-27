import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import styles from "./minmax.css";

import AppLazyInput from "~c/inputs/lazy";

export default class extends React.PureComponent {
  static defaultProps = {
    onChange: function(cnt) {
      console.log(cnt);
    }
  };

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    cnt: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    onClick: PropTypes.func
  };

  lazyInput = React.createRef();

  increase = () => {
    this.set(this.props.cnt + 1);
  };

  decrease = () => {
    this.set(this.props.cnt - 1);
  };

  set(newCnt) {
    let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
    this.props.onChange(cnt);
    return cnt;
  }

  onChange = e => {
    let cnt = parseInt(e.target.value);
    let realCnt = this.set(isNaN(cnt) ? this.props.min : cnt);
    if (realCnt.toString() !== e.target.value) {
      console.log("HARD SET VALUE");
      this.lazyInput.current.setValue(realCnt);
    }
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button variant="danger" size="sm" onClick={this.decrease}>
          -
        </Button>
        <AppLazyInput
          nativeProps={{ type: "text", className: styles.input }}
          value={this.props.cnt}
          onChange={this.onChange}
          ref={this.lazyInput}
        />
        <Button variant="danger" size="sm" onClick={this.increase}>
          +
        </Button>
      </div>
    );
  }
}
