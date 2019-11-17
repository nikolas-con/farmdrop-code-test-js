import React from 'react';
import { mount } from 'enzyme';
import ProductImage from './productImage'

import mockData from '../../../utility/mock/mockData'
const mockProductNoTags = mockData.data.productSearch.nodes[1]
const mockProductTags = mockData.data.productSearch.nodes[0]

describe('renders <ProductImage/>', ()=>{
  it('renders the product is not in basket and does not have tags', ()=>{
    const configPros = { basketFilter: false, basketIndex: -1, productMedias: mockProductNoTags.media, productName: mockProductNoTags.name, productTags: mockProductNoTags.tags, basket: [] }
    const warper = mount(<ProductImage {...configPros}/>)
    expect(warper.find(`[data-test='img-product']`).exists()).toBe(true)
  })
  it('renders the product is not in basket and has tags', ()=>{
    const configPros = { basketFilter: false, basketIndex: -1,productMedias: mockProductTags.media, productName: mockProductTags.name, productTags: mockProductTags.tags, basket: [] }
    const warper = mount(<ProductImage {...configPros}/>)
    expect(warper.find(`[data-test='img-product']`).exists()).toBe(true)
    expect(warper.find(`[data-test='txt-product-tag']`).text()).toBe(mockProductTags.tags[0].name)
  })
  it('renders the product is in basket', ()=>{
    const basket = [{...mockProductTags, quantity: 1}]
    const configPros = { basketFilter: true, basketIndex: 0,productMedias: mockProductTags.media, productName: mockProductTags.name, productTags: mockProductTags.tags, basket: basket }
    const warper = mount(<ProductImage {...configPros}/>)
    expect(warper.find(`[data-test='basket-image']`).exists()).toBe(true)
    expect(warper.find(`[data-test='txt-bakset-quantity']`).text()).toBe(`${basket[0].quantity} in basket`)
  })
})