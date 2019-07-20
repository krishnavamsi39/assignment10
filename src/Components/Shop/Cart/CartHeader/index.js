import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
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
        <div className="cart-count">
          {" "}
          {this.props.shopStore.cartStore.cartCount}
        </div>
        <span>Cart</span>
      </div>
    );
  }
}
export default CartHeader;
