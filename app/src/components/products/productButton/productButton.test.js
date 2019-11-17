import React from 'react';
import { mount } from 'enzyme';
import ProductButon from './productButton'

import mockData from '../../../utility/mock/mockData'
const mockProduct = mockData.data.productSearch.nodes[0]

describe('renders <ProductButon/>', ()=>{
  it('render the product is not in the basket', ()=>{
    const configPros = { basketFilter: false, basketIndex: -1, product: mockProduct, basket : [] }
    const warper = mount(<ProductButon {...configPros} dispatch={() => {}}/>)
    expect(warper.find(`[data-test='btn-add-basket']`).exists()).toBe(true)
  })
  it('render  the product is in the basket and quantity is 1', ()=>{
    const basketMock = [{...mockProduct, quantity: 1}]
    const configPros = { basketFilter: true, basketIndex: 0, product: mockProduct, basket : basketMock }
    const warper = mount(<ProductButon {...configPros} dispatch={() => {}}/>)
    expect(warper.find(`[data-test='btn-minus']`).exists()).toBe(true)
    expect(warper.find(`[data-test='txt-basket-quantity-product']`).text()).toBe(String(basketMock[0].quantity))
    expect(warper.find(`[data-test='btn-plus']`).exists()).toBe(true)
  }) 
})