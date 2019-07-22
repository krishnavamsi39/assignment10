import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class EachCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: true };
  }
  handleClick = () => {
    this.props.shopStore.cartStore.removeFromCart(this.props.cartItem);
  };
  handlehover = () => {
    this.setState({ hover: !this.state.hover });
  };
  renderItem = () => {
    const productList = this.props.shopStore.productList;
    const row = productList.map(product => {
      if (product.id === this.props.cartItem) {
        return (
          <div class="cart-item-div">
            <img className="cart-image" src={product.image} height="150px" />
            <div class="item-properties">
              {this.state.hover ? (
                <span className="item-title">{product.title}</span>
              ) : (
                <strike className="item-title">{product.title}</strike>
              )}
              {this.state.hover ? (
                <span className="item-size">{product.availableSizes[0]}</span>
              ) : (
                <strike className="item-size">
                  {product.availableSizes[0]}
                </strike>
              )}
              {this.state.hover ? (
                <span className="item-quantity">
                  Quantity:{" "}
                  {this.props.shopStore.cartStore.cartMap.get(
                    this.props.cartItem
                  )}
                </span>
              ) : (
                <strike className="item-quantity">
                  Quantity:{" "}
                  {this.props.shopStore.cartStore.cartMap.get(
                    this.props.cartItem
                  )}
                </strike>
              )}
            </div>

            <img
              className="delete-icon"
              src="assets/smallcross.png"
              height="30px"
              width="30px"
              onClick={this.handleClick}
              onMouseOver={this.handlehover}
              onMouseLeave={this.handlehover}
            />
            {this.state.hover ? (
              <span className="item-price">${product.price}</span>
            ) : (
              <strike className="item-price">${product.price}</strike>
            )}
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
