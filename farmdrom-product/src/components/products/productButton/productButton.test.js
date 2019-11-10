import React from 'react';
import { mount } from 'enzyme';
import ProductButon from './productButton'

import mockData from '../../../support/mock/mockData'
const mockProduct = mockData.data.productSearch.nodes[0]

describe('renders TheProductGrind', ()=>{
  it('no in basket', ()=>{
    const configPros = {  product: mockProduct, basket : [] }
    const warper = mount(<ProductButon {...configPros} dispatch={() => {}}/>)
    // console.log(warper.debug())
    expect(warper.find(`[data-test='btn-add-basket']`).exists()).toBe(true)
  })
  it('in basket and plus', ()=>{
    const basketMock = [{...mockProduct, quantity: 1}]
    const configPros = {  product: mockProduct, basket : basketMock }
    const warper = mount(<ProductButon {...configPros} dispatch={() => {}}/>)
    // console.log(warper.debug())
    expect(warper.find(`[data-test='btn-minus']`).exists()).toBe(true)
    expect(warper.find(`[data-test='txt-basket-quantity-product']`).text()).toBe(String(basketMock[0].quantity))
    expect(warper.find(`[data-test='btn-plus']`).exists()).toBe(true)
  })
  
})