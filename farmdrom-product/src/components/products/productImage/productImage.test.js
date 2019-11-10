import React from 'react';
import { mount } from 'enzyme';
import ProductImage from './productImage'

import mockData from '../../../support/mock/mockData'
const mockProductNoTags = mockData.data.productSearch.nodes[1]
const mockProductTags = mockData.data.productSearch.nodes[0]

describe('renders TheProductGrind', ()=>{
  it('no tags and no in basket', ()=>{
    const configPros = { productMedias: mockProductNoTags.media, productName: mockProductNoTags.name, productTags: mockProductNoTags.tags, basket: [] }
    const warper = mount(<ProductImage {...configPros}/>)
    expect(warper.find(`[data-test='img-product']`).exists()).toBe(true)
  })
  it('yes tags and no in basket', ()=>{
    const configPros = { productMedias: mockProductTags.media, productName: mockProductTags.name, productTags: mockProductTags.tags, basket: [] }
    const warper = mount(<ProductImage {...configPros}/>)
    expect(warper.find(`[data-test='img-product']`).exists()).toBe(true)
    expect(warper.find(`[data-test='txt-product-tag']`).text()).toBe(mockProductTags.tags[0].name)
  })
  it('in basket', ()=>{
    const basket = [{...mockProductTags, quantity: 1}]
    const configPros = { productMedias: mockProductTags.media, productName: mockProductTags.name, productTags: mockProductTags.tags, basket: basket }
    const warper = mount(<ProductImage {...configPros}/>)
    expect(warper.find(`[data-test='basket-image']`).exists()).toBe(true)
    expect(warper.find(`[data-test='txt-bakset-quantity']`).text()).toBe(`${basket[0].quantity} in basket`)
  })
})