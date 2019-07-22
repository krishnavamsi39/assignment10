import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class EachProduct extends Component {
  handleClick = () => {
    const { id } = this.props;
    this.props.shopStore.cartStore.addToCart(id);
  };
  installmentPrice = () => {
    const { price, installments } = this.props;
    return (price / installments).toFixed(2);
  };
  render() {
    const {
      title,
      price,
      currencyFormat,
      installments,
      image,
      isFreeShipping
    } = this.props;
    return (
      <div class="item-div">
        {isFreeShipping ? (
          <button class="free-ship">Free Shipping</button>
        ) : (
          <></>
        )}
        <img src={image} />
        <p>{title}</p>
        <span>
          {currencyFormat}
          {price}
        </span>
        {installments > 1 ? (
          <span class>
            or {installments}x${this.installmentPrice()}
          </span>
        ) : (
          <></>
        )}
        <button class="cart" onClick={this.handleClick}>
          Add to cart
        </button>
      </div>
    );
  }
}
export default EachProduct;
