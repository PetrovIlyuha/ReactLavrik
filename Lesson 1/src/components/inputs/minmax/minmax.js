import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import styles from "./minmax.css";

import AppLazyInput from "~c/inputs/lazy";

export default class extends React.Component {
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

  increase = () => {
    this.set(this.props.cnt + 1);
  };

  decrease = () => {
    this.set(this.props.cnt - 1);
  };

  set(newCnt) {
    let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);

    // как-то сказать родителю, что cnt обновился
    this.props.onChange(cnt);
  }

  onChange = e => {
    let cnt = parseInt(e.target.value);
    this.set(isNaN(cnt) ? this.props.min : cnt);
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button variant="secondary" onClick={this.decrease}>
          -
        </Button>
        <AppLazyInput
          nativeProps={{ type: "text", className: styles.input }}
          value={this.props.cnt}
          onChange={this.onChange}
        />
        <Button variant="secondary" onClick={this.increase}>
          +
        </Button>
      </div>
    );
  }
}
