import React from 'react';
import { mount } from 'enzyme';
import ProductVariants from './productVariants'

import mockData from '../../../utility/mock/mockData'

const mockProductWithOutVariants = mockData.data.productSearch.nodes[0]

const handlePrice = price =>{
  let pounds = price/100
  return pounds.toFixed(2)
}
describe('renders <ProductVariants/>', ()=>{
  it('renders the produnt does not have variants', ()=>{
    const configPros = { handlePrice: handlePrice, selectedDefault : true,saleText : mockProductWithOutVariants.saleText, salePrice : mockProductWithOutVariants.salePrice, selectedVariantsValeu : null, variants : mockProductWithOutVariants.variants, productMeasurement : mockProductWithOutVariants.measurement.displayName, productPrice : mockProductWithOutVariants.price.pence, productPricePerUnit : mockProductWithOutVariants.pricePerUnit }
    const warper = mount(<ProductVariants {...configPros} dispatch={() => {}}/>)
    expect(warper.find(`[data-test='txt-variants-product-measurement']`).text()).toBe(mockProductWithOutVariants.measurement.displayName)
    expect(warper.find(`[data-test='txt-variants-price-per-unit']`).text()).toBe(mockProductWithOutVariants.pricePerUnit)
    expect(warper.find(`[data-test='txt-variants-price']`).text()).toBe(`£${handlePrice(mockProductWithOutVariants.price.pence)}`)
  })
})