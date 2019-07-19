import React, { Component } from "react";
import "./style.css";

class ProductList extends Component {
  renderProductList = () => {
    const { shopStore } = this.props;
    let eachproduct = shopStore.productList[0];
    return (
      <div class="item-div">
        {eachproduct.isFreeShipping ? (
          <div class="free-ship">Free Shipping</div>
        ) : (
          <></>
        )}
        <img src={eachproduct.image} />
        <p>{eachproduct.title}</p>
        <span>
          {eachproduct.currencyFormat}
          {eachproduct.price}
        </span>
        <button class="cart">Add to cart</button>
      </div>
    );
  };
  render() {
    return <>{this.renderProductList()}</>;
  }
}
export default ProductList;
