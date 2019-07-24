import React, { Component } from "react";
import "./style.css";
import {
  CartBox,
  CartCount,
  Image,
  DisplayCart,
  HideCart
} from "./styledComponents";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { observer } from "mobx-react";
@observer
class Cart extends Component {
  constructor(props) {
    super(props);
    this.value = 0;
    this.cartcountclass = "cart-count";
    this.src = "assets/images.png";
    this.state = { classdiv: "cart-display-hide" };
  }
  handleClick = () => {
    this.value = !this.value;

    if (this.value === true) {
      this.cartcountclass = "cart-count-hide";
      this.src = "assets/cross.png";
      this.setState({
        classdiv: "cart-display"
      });
    } else {
      this.cartcountclass = "cart-count";
      this.src = "assets/images.png";
      this.setState({
        classdiv: "cart-display-hide"
      });
    }
  };
  render() {
    return (
      <CartBox>
        <Image src={this.src} height="40px" onClick={this.handleClick} />
        <CartCount> {this.props.shopStore.cartStore.cartCount}</CartCount>
        {this.state.classdiv === "cart-display-hide" ? (
          <HideCart />
        ) : (
          <DisplayCart>
            <CartHeader shopStore={this.props.shopStore} />
            <CartItems shopStore={this.props.shopStore} />
            <CartTotal shopStore={this.props.shopStore} />
          </DisplayCart>
        )}
      </CartBox>
    );
  }
}
export default Cart;
