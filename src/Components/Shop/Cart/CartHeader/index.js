import React, { Component } from "react";
import "./style.css";
class CartHeader extends Component {
  render() {
    return (
      <div class="cart-header">
        <img
          className="cart-image"
          src="assets/images.png"
          height="40px"
          onClick={this.handleClick}
        />
        <span>Cart</span>
      </div>
    );
  }
}
export default CartHeader;
