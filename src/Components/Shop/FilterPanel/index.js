import React, { Component } from "react";
import sizes from "../../../Constants/filters/sizes";
import "./style.css";
import { observer } from "mobx-react";
@observer
class FilterPanel extends Component {
  handleClick = e => {
    this.props.shopStore.AddorRemoveSizes(e.target.value);
  };
  renderSizes = () => {
    let sizeList = Object.values(sizes);

    let buttonclass;
    const allsizes = sizeList.map(size => {
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
    return allsizes;
  };

  render() {
    return <div className="Filter">{this.renderSizes()}</div>;
  }
}
export default FilterPanel;
