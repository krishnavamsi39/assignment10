import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class CartTotal extends Component {
  render() {
    return (
      <>
        {this.props.shopStore.cartStore.cartMap.size > 0 ? (
          <div class="cart-footer">
            <span class="footer-heading">SUBTOTAL</span>
            <button class="check-out">CheckOut</button>
            <span class="total-price">
              ${this.props.shopStore.cartStore.total}{" "}
            </span>
          </div>
        ) : (
          <span class="empty-cart">Add Some Products To Cart</span>
        )}
      </>
    );
  }
}
export default CartTotal;
