import React from 'react';
import { mount } from 'enzyme';
import ProductCard from './productCard'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'
import mockData from '../../../utility/mock/mockData'
import realStore from '../../../store/store'

import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

const mockProduct = mockData.data.productSearch.nodes[1]

describe('renders <ProductCard/>', () => {
  it('ckeck the elemenet product card', () => {
    let store = mockStore({basket: []})
    let configProps = { product: mockProduct }
    let wrapper = mount(<Provider store={store}><ProductCard key={mockProduct.name} {...configProps}/></Provider>)
    expect(wrapper.find(`[data-test='txt-product-name']`).text()).toBe(mockProduct.name)
  })
  it('ckeck the elemenet product card', () => {
    let store = mockStore({basket: []})
    let configProps = { product: mockProduct }
    let wrapper = mount(<Provider store={store}><ProductCard key={mockProduct.name} {...configProps}/></Provider>)
    expect(wrapper.find(`[data-test='txt-producer-name']`).text()).toBe(mockProduct.producer.name)
  })
})
describe('renders <ProductCard/>', () => {
  it('ckeck remove and add in basket', async () => {
    let store = realStore
    let configProps = { product: mockProduct }
    let wrapper = mount(<Provider store={store}><ProductCard key={mockProduct.name} {...configProps}/></Provider>)

    wrapper.find(`[data-test='btn-add-basket']`).simulate('click')
    expect(wrapper.find(`[data-test='btn-add-basket']`).exists()).toBe(false)

    expect(wrapper.find(`[data-test='txt-basket-quantity-product']`).text()).toBe('1')
    expect(wrapper.find(`[data-test='txt-bakset-quantity']`).text()).toBe('1 in basket')

    expect(wrapper.find(`[data-test='btn-plus']`).exists()).toBe(true)
    wrapper.find(`[data-test='btn-plus']`).simulate('click')
    expect(wrapper.find(`[data-test='txt-basket-quantity-product']`).text()).toBe('2')
    expect(wrapper.find(`[data-test='txt-bakset-quantity']`).text()).toBe('2 in basket')


    expect(wrapper.find(`[data-test='btn-minus']`).exists()).toBe(true)
    wrapper.find(`[data-test='btn-minus']`).simulate('click')
    expect(wrapper.find(`[data-test='txt-basket-quantity-product']`).text()).toBe('1')
    expect(wrapper.find(`[data-test='txt-bakset-quantity']`).text()).toBe('1 in basket')

    expect(wrapper.find(`[data-test='btn-minus']`).exists()).toBe(true)
    wrapper.find(`[data-test='btn-minus']`).simulate('click')
    expect(wrapper.find(`[data-test='btn-add-basket']`).exists()).toBe(true)
    expect(wrapper.find(`[data-test='txt-basket-quantity-product']`).exists()).toBe(false)
    expect(wrapper.find(`[data-test='txt-bakset-quantity']`).exists()).toBe(false)
  })
})