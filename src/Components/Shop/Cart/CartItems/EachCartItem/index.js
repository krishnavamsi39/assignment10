import React, { Component } from "react";

import {
  CartItem,
  ItemProperties,
  Image,
  ItemPrice,
  ItemTitle,
  DeleteIcon,
  Span,
  Strike,
  StrikePrice,
  StrikeTitle
} from "./styledComponents";
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
          <CartItem>
            <Image src={product.image} height="150px" />
            <ItemProperties>
              {this.state.hover ? (
                <ItemTitle>{product.title}</ItemTitle>
              ) : (
                <StrikeTitle>{product.title}</StrikeTitle>
              )}
              {this.state.hover ? (
                <Span>{product.availableSizes[0]}</Span>
              ) : (
                <Strike>{product.availableSizes[0]}</Strike>
              )}
              {this.state.hover ? (
                <Span>
                  Quantity:{" "}
                  {this.props.shopStore.cartStore.cartMap.get(
                    this.props.cartItem
                  )}
                </Span>
              ) : (
                <Strike>
                  Quantity:{" "}
                  {this.props.shopStore.cartStore.cartMap.get(
                    this.props.cartItem
                  )}
                </Strike>
              )}
            </ItemProperties>

            <DeleteIcon
              src="assets/smallcross.png"
              height="30px"
              width="30px"
              onClick={this.handleClick}
              onMouseOver={this.handlehover}
              onMouseLeave={this.handlehover}
            />
            {this.state.hover ? (
              <ItemPrice>${product.price}</ItemPrice>
            ) : (
              <StrikePrice>${product.price}</StrikePrice>
            )}
          </CartItem>
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
