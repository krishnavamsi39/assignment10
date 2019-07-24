import React, { Component } from "react";
import "./style.css";
import { CartBox, CartCount, Image, DisplayCart } from "./styledComponents";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { observer } from "mobx-react";
@observer
class Cart extends Component {
  constructor(props) {
    super(props);
    this.value = 0;
    this.src = "assets/images.png";
    this.state = { showCart: false };
  }
  handleClick = () => {
    this.value = !this.value;

    if (this.value === true) {
      this.src = "assets/cross.png";
      this.setState({
        showCart: true
      });
    } else {
      this.src = "assets/images.png";
      this.setState({
        showCart: false
      });
    }
  };
  render() {
    return (
      <CartBox>
        <Image src={this.src} height="40px" onClick={this.handleClick} />
        <CartCount>{this.props.shopStore.cartStore.cartCount}</CartCount>
        {!this.state.showCart ? (
          <DisplayCart />
        ) : (
          <DisplayCart show>
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
