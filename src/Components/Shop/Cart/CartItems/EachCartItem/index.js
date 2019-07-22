import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class EachCartItem extends Component {
  handleClick = () => {
    this.props.shopStore.cartStore.removeFromCart(this.props.cartItem);
  };
  renderItem = () => {
    const productList = this.props.shopStore.productList;
    const row = productList.map(product => {
      if (product.id === this.props.cartItem) {
        return (
          <div class="cart-item-div">
            <img className="cart-image" src={product.image} height="150px" />
            <div class="item-properties">
              <span className="item-title">{product.title}</span>
              <span className="item-size">{product.availableSizes[0]}</span>
              <span className="item-quantity">
                Quantity:{" "}
                {this.props.shopStore.cartStore.cartMap.get(
                  this.props.cartItem
                )}
              </span>
            </div>
            <span className="item-price">${product.price}</span>
            <img
              className="delete-icon"
              src="assets/smallcross.png"
              height="30px"
              width="30px"
              onClick={this.handleClick}
            />
          </div>
        );
      }
    });
    return row;
  };
  render() {
    return this.renderItem();
  }
}
export default EachCartItem;
