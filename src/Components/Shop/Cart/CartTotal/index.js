import React, { Component } from "react";

import {
  CartFooter,
  FooterHeading,
  CheckOut,
  Total,
  Installment,
  EmptyCart
} from "./styledComponents";
import { observer } from "mobx-react";
@observer
class CartTotal extends Component {
  render() {
    return (
      <>
        {this.props.shopStore.cartStore.cartMap.size > 0 ? (
          <CartFooter>
            <FooterHeading>SUBTOTAL</FooterHeading>
            <CheckOut>CheckOut</CheckOut>
            <Total>${this.props.shopStore.cartStore.total[0]} </Total>
            <Installment>
              OR UPTO {this.props.shopStore.cartStore.total[1]}x{" "}
              {this.props.shopStore.cartStore.total[2]}
            </Installment>
          </CartFooter>
        ) : (
          <EmptyCart>Add Some Products To Cart</EmptyCart>
        )}
      </>
    );
  }
}
export default CartTotal;
