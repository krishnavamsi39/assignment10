import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class EachCartItem extends Component {
  handleClick = () => {
    this.props.cartStore.removeFromCart(this.props.cartItem);
  };
  renderItem = () => {
    const productList = this.props.shopStore.productList;
    const row = productList.map(product => {
      if (product.id === this.props.cartItem) {
        return (
          <div class="cart-item-div">
            <img src={product.image} height="150px" />
            <span>
              Quantity {this.props.cartStore.cartMap.get(this.props.cartItem)}
            </span>
            <span className="item-title">{product.title}</span>
            <span className="item-price">${product.price}</span>
            <img
              src="assets/smallcross.png"
              height="30px"
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
