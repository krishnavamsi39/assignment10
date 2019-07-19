import React, { Component } from "react";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";
import { observer } from "mobx-react";
@observer
class Shop extends Component {
  render() {
    return (
      <>
        <FilterPanel shopStore={this.props.shopStore} />
        <ProductList />
      </>
    );
  }
}
export default Shop;
