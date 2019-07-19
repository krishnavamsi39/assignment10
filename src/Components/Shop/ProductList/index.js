import React, { Component } from "react";
import "./style.css";
import EachProduct from "./EachProduct";
import { observer } from "mobx-react";
@observer
class ProductList extends Component {
  handleSelect = e => {
    this.props.shopStore.changeSelectSortBy(e.target.value);
  };
  renderProductList = () => {
    const { shopStore } = this.props;
    const filteredList = shopStore.getSelectedProducts;
    console.log(filteredList);
    const products = filteredList.map(product => {
      return <EachProduct product={product} key={product.id} />;
    });
    return products;
  };
  render() {
    return (
      <div>
        <select class="sort" onChange={this.handleSelect}>
          <option value="select">select</option>
          <option value="low-to-high">low-to-high</option>
          <option value="high-to-low">high-to-low</option>
        </select>
        <div class="all-products">{this.renderProductList()}</div>
      </div>
    );
  }
}
export default ProductList;
