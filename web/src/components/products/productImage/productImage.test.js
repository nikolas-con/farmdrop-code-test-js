import React from 'react';
import { mount } from 'enzyme';
import ProductImage from './productImage'

import mockData from '../../../utility/mock/mockData'
const mockProductNoTags = mockData.data.productSearch.nodes[1]
const mockProductTags = mockData.data.productSearch.nodes[0]


describe('renders <ProductImage/>', ()=>{
  it('renders the product is not in basket and does not have tags', ()=>{
    const imagePositionIndex =  mockProductNoTags.media.findIndex(image => { return image.position === 1 })
    const imageTagsExist = mockProductNoTags.tags.length > 0 ? true : false
    const configPros = { imageTagsExist: imageTagsExist, imagePositionIndex: imagePositionIndex, productMedias: mockProductNoTags.media, productName: mockProductNoTags.name, productTags: mockProductNoTags.tags}
    const warper = mount(<ProductImage {...configPros}/>)
    expect(warper.find(`[data-test='img-product']`).exists()).toBe(true)
  })
  it('renders the product is not in basket and has tags', ()=>{
    const imagePositionIndex =  mockProductTags.media.findIndex(image => { return image.position === 1 })
    const imageTagsExist = mockProductTags.tags.length > 0 ? true : false
    const configPros = { imageTagsExist: imageTagsExist, imagePositionIndex: imagePositionIndex, productMedias: mockProductTags.media, productName: mockProductTags.name, productTags: mockProductTags.tags, basket: [] }
    const warper = mount(<ProductImage {...configPros}/>)
    expect(warper.find(`[data-test='img-product']`).exists()).toBe(true)
    expect(warper.find(`[data-test='txt-product-tag']`).text()).toBe(mockProductTags.tags[0].name)
  })
})