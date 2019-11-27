import React from 'react';
import { mount } from 'enzyme';
import ProductImageOverlay from './productImageOverlay'

import mockData from '../../../utility/mock/mockData'


const mockProduct = mockData.data.productSearch.nodes[0]

describe('renders <ProductImageOverlay/>', ()=>{
  it('renders the product is not in basket', ()=> {
  const configPros = { basketExist: false, basketIndex: -1, basket: [] }
  const warper = mount(<ProductImageOverlay {...configPros}/>)
  expect(warper.isEmptyRender()).toBe(true)
  })
  it('renders the product in basket', ()=> {
  const configPros = { basketExist: true, basketIndex: 0, basket: [{...mockProduct, quantity: 1}] }
  const warper = mount(<ProductImageOverlay {...configPros}/>)
  expect(warper.find(`[data-test='txt-bakset-quantity']`).text()).toBe('1 in basket')
  })
})