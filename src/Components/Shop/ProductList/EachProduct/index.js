import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class EachProduct extends Component {
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
        <button class="cart">Add to cart</button>
      </div>
    );
  }
}
export default EachProduct;
