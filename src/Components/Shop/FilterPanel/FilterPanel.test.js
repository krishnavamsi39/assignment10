import {render, fireEvent, wait,cleanup} from '@testing-library/react';
import React from 'react';

import ShopStore from '../../../Stores/ShopStore'


const shopStore=new ShopStore()
import FilterPanel from './index'
afterEach(cleanup)

describe('Filter', () => {
  
    it('check if funtion called', () => {
        jest.spyOn(shopStore,'AddorRemoveSizes')
        const {getByText} = render(<FilterPanel shopStore={shopStore}/>)
       const add=getByText("S")
        
       fireEvent.click(add)
       expect(shopStore.AddorRemoveSizes).toHaveBeenCalled();
    })
  
  
});