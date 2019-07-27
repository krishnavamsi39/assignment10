import React, { Component } from "react";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { Button } from "./styledComponents";
import { observer } from "mobx-react";
import * as Cookies from "js-cookie";
import { withRouter } from "react-router";
@observer
class Shop extends Component {
  handleClick = () => {
    Cookies.remove("login");
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <Button onClick={this.handleClick}>Signout</Button>
        <FilterPanel shopStore={this.props.shopStore} />
        <ProductList shopStore={this.props.shopStore} />
        <Cart shopStore={this.props.shopStore} />
      </>
    );
  }
}
export default withRouter(Shop);
