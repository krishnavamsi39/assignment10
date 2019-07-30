import {render, fireEvent, wait,cleanup} from '@testing-library/react';
import React from 'react';

import ShopStore from '../../../../Stores/ShopStore'
import EachProduct from '../EachProduct';

const shopStore=new ShopStore()
afterEach(cleanup)
const product = { availableSizes: ["S", "XS"],
currencyFormat: "$",
currencyId: "USD",
description: "4 MSL",
id: 12,
installments: 9,
isFreeShipping: true,
price: 10.9,
sku: 12064273040195392,
style: "Black with custom print",
title: "Cat Tee Black T-Shirt",
image:
  "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"}
describe('Products', () => {
  it('finds title', () => {
    const {getByText} = render(<EachProduct {...product}/>)
    getByText("Cat Tee Black T-Shirt")
  })
    it('finds price', () => {
        const {getByText} = render(<EachProduct {...product}/>)
        getByText("$10.9")
    })
  
    it('finds installments', () => {
        const {getByText} = render(<EachProduct {...product}/>)
        getByText("or 9x$1.21")
    })
    it('check if funtion called', () => {
        jest.spyOn(shopStore.cartStore,'addToCart')
        const {getByText} = render(<EachProduct shopStore={shopStore} {...product}/>)
       const addtocart=getByText("Add to cart")
        
       fireEvent.click(addtocart)
       expect(shopStore.cartStore.addToCart).toHaveBeenCalled();
    })
  
  
});