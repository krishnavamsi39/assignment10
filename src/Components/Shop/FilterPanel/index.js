import React, { Component } from "react";

import "./style.css";
import { observer } from "mobx-react";
@observer
class FilterPanel extends Component {
  handleClick = e => {
    this.props.shopStore.AddorRemoveSizes(e.target.value);
  };
  renderSizes = () => {
    let sizeList = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
    let buttonclass;
    const sizes = sizeList.map(size => {
      if (this.props.shopStore.selectedSizes.indexOf(size) === -1) {
        buttonclass = "size";
      } else {
        buttonclass = "selected-size";
      }
      return (
        <button className={buttonclass} onClick={this.handleClick} value={size}>
          {size}
        </button>
      );
    });
    return sizes;
  };

  render() {
    return <div className="Filter">{this.renderSizes()}</div>;
  }
}
export default FilterPanel;
