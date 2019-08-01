import React from 'react';
import FilterPanel from './index';
import renderer from 'react-test-renderer';

import ShopStore from '../../../Stores/ShopStore'


const shopStore=new ShopStore()
it('renders correctly', () => {
  const tree = renderer
    .create(<FilterPanel shopStore={shopStore}>Facebook</FilterPanel>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});