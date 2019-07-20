import React, { Component } from "react";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { observer } from "mobx-react";
@observer
class Shop extends Component {
  render() {
    return (
      <div class="shop">
        <FilterPanel shopStore={this.props.shopStore} />
        <ProductList
          shopStore={this.props.shopStore}
          cartStore={this.props.cartStore}
        />
        <Cart
          shopStore={this.props.shopStore}
          cartStore={this.props.cartStore}
        />
      </div>
    );
  }
}
export default Shop;
