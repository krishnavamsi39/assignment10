import React, { Component } from "react";
import "./style.css";
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
    this.state = { classdiv: "division1" };
  }
  handleClick = () => {
    this.value = !this.value;

    if (this.value === true) {
      this.src = "assets/cross.png";
      this.setState({
        classdiv: "division2"
      });
    } else {
      this.src = "assets/images.png";
      this.setState({
        classdiv: "division1"
      });
    }
  };
  render() {
    return (
      <div class="cart-box">
        <img
          className="cart-image"
          src={this.src}
          height="40px"
          onClick={this.handleClick}
        />

        <div className={this.state.classdiv}>
          <CartHeader shopStore={this.props.shopStore} />
          <CartItems shopStore={this.props.shopStore} />
          <CartTotal shopStore={this.props.shopStore} />
        </div>
      </div>
    );
  }
}
export default Cart;
