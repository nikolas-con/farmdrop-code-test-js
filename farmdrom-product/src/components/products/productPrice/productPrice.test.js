import React from 'react';
import { mount } from 'enzyme';
import ProductPrice from './productPrice'

import mockData from '../../../support/mock/mockData'

const indexSeles = mockData.data.productSearch.nodes.findIndex((mockData)=>{
  return mockData.name === 'Shetland X Romney Lamb Leg'
})
const indexNoSeles = mockData.data.productSearch.nodes.findIndex((mockData)=>{
  return mockData.name === 'Shetland X Romney Saddle of Lamb'
})
const mockProductWithSeles = mockData.data.productSearch.nodes[indexSeles]
const mockProductWithOutSeles = mockData.data.productSearch.nodes[indexNoSeles]

const handlePrice = price =>{
  let pounds = price/100
  return pounds.toFixed(2)
}

describe('renders ProductPrice', ()=>{
  it('variants no sele', ()=>{
    console.log(mockProductWithOutSeles.saleText)
    const configPros = { handlePrice :handlePrice, selectedVariantsValeu: indexNoSeles, selectedDefault: false, saleText : mockProductWithOutSeles.saleText, salePrice : mockProductWithOutSeles.salePrice, productMeasurement : mockProductWithOutSeles.measurement.displayName, productPrice : mockProductWithOutSeles.price.pence, productPricePerUnit : mockProductWithOutSeles.pricePerUnit}
    const warper = mount(<ProductPrice {...configPros} index={indexNoSeles} variant={mockProductWithOutSeles.variants[0]} dispatch={() => {}}/>)
    console.log(warper.debug())
    expect(warper.find(`[data-test='txt-price-per-unit']`).text()).toBe(mockProductWithOutSeles.variants[0].pricePerUnit)
    expect(warper.find(`[data-test='txt-price-default']`).text()).toBe(`£${handlePrice(mockProductWithOutSeles.variants[0].price.pence)}`)
  })  
  it('variants with sele', ()=>{
    const configPros = { handlePrice :handlePrice, selectedVariantsValeu: indexSeles, selectedDefault: false, saleText : mockProductWithSeles.saleText, salePrice : mockProductWithSeles.salePrice, productMeasurement : mockProductWithSeles.measurement.displayName, productPrice : mockProductWithSeles.price.pence, productPricePerUnit : mockProductWithSeles.pricePerUnit}
    const warper = mount(<ProductPrice {...configPros} index={indexSeles} variant={mockProductWithSeles.variants[0]} dispatch={() => {}}/>)
    console.log(warper.debug())
    expect(warper.find(`[data-test='txt-price-per-unit']`).text()).toBe(mockProductWithSeles.variants[0].pricePerUnit)
    expect(warper.find(`[data-test='txt-seles']`).text()).toBe(mockProductWithSeles.variants[0].saleText)
    expect(warper.find(`[data-test='txt-price-seles-off']`).text()).toBe(`£${handlePrice(mockProductWithSeles.variants[0].price.pence)}`)
    expect(warper.find(`[data-test='txt-price-seles']`).text()).toBe(`£${handlePrice(mockProductWithSeles.variants[0].salePrice.pence)}`)
  })  
  it('no variants no sele', ()=>{
    const configPros = { handlePrice :handlePrice, selectedVariantsValeu: null, selectedDefault: true, saleText : mockProductWithOutSeles.saleText, salePrice : mockProductWithOutSeles.salePrice, productMeasurement : mockProductWithOutSeles.measurement.displayName, productPrice : mockProductWithOutSeles.price.pence, productPricePerUnit : mockProductWithOutSeles.pricePerUnit}
    const warper = mount(<ProductPrice {...configPros} index={indexNoSeles} variant={mockProductWithOutSeles.variants[0]} dispatch={() => {}}/>)
    console.log(warper.debug())
    expect(warper.find(`[data-test='txt-price-per-unit-no-variant']`).text()).toBe(mockProductWithOutSeles.pricePerUnit)
    expect(warper.find(`[data-test='txt-price-default-no-variant']`).text()).toBe(`£${handlePrice(mockProductWithOutSeles.price.pence)}`)
  })  
  it('no variants with sele', ()=>{
    const configPros = { handlePrice :handlePrice, selectedVariantsValeu: null, selectedDefault: true, saleText : mockProductWithSeles.saleText, salePrice : mockProductWithSeles.salePrice, productMeasurement : mockProductWithSeles.measurement.displayName, productPrice : mockProductWithSeles.price.pence, productPricePerUnit : mockProductWithSeles.pricePerUnit}
    const warper = mount(<ProductPrice {...configPros} index={indexNoSeles} variant={mockProductWithSeles.variants[0]} dispatch={() => {}}/>)
    console.log(warper.debug())
    expect(warper.find(`[data-test='txt-price-per-unit-no-variant']`).text()).toBe(mockProductWithSeles.pricePerUnit)
    expect(warper.find(`[data-test='txt-sele-no-variant']`).text()).toBe(mockProductWithSeles.saleText)
    expect(warper.find(`[data-test='txt-price-seles-off-no-variant']`).text()).toBe(`£${handlePrice(mockProductWithSeles.price.pence)}`)
    expect(warper.find(`[data-test='txt-price-seles-no-variant']`).text()).toBe(`£${handlePrice(mockProductWithSeles.salePrice.pence)}`)
  })  
})