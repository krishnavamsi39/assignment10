import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class EachProduct extends Component {
  handleClick = () => {
    this.props.shopStore.cartStore.addToCart(this.props.product.id);
  };
  render() {
    const { product } = this.props;
    return (
      <div class="item-div">
        {product.isFreeShipping ? (
          <button class="free-ship">Free Shipping</button>
        ) : (
          <></>
        )}
        <img src={product.image} />
        <p>{product.title}</p>
        <span>
          {product.currencyFormat}
          {product.price}
        </span>
        <button class="cart" onClick={this.handleClick}>
          Add to cart
        </button>
      </div>
    );
  }
}
export default EachProduct;
