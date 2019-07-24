import React, { Component } from "react";
import sizes from "../../../Constants/filters/sizes";
import { Filter, Button, SelectedButton } from "./styledComponents";
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
        return (
          <Button onClick={this.handleClick} value={size}>
            {size}
          </Button>
        );
      } else {
        return (
          <SelectedButton onClick={this.handleClick} value={size}>
            {size}
          </SelectedButton>
        );
      }
    });
    return allsizes;
  };

  render() {
    return <Filter>{this.renderSizes()}</Filter>;
  }
}
export default FilterPanel;
