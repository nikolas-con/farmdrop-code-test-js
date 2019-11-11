import React from 'react';
import { mount } from 'enzyme';
import ProductVariants from './productVariants'

import mockData from '../../../support/mock/mockData'
const mockProduct = mockData.data.productSearch.nodes[0]

describe('renders TheProductGrind', ()=>{
  it('no variants', ()=>{
    const handlePrice = price =>{
      let pounds = price/100
      return pounds.toFixed(2)
    }
    const configPros = { handlePrice: handlePrice, selectedDefault : true,saleText : mockProduct.saleText, salePrice : mockProduct.salePrice, selectedVariantsValeu : null, variants : mockProduct.variants, productMeasurement : mockProduct.measurement.displayName, productPrice : mockProduct.price.pence, productPricePerUnit : mockProduct.pricePerUnit  }
    const warper = mount(<ProductVariants {...configPros} dispatch={() => {}}/>)
    console.log(warper.debug())
    expect(warper.find(`[data-test='txt-variants-product-measurement']`).text()).toBe(mockProduct.measurement.displayName)
    expect(warper.find(`[data-test='txt-variants-price-per-unit']`).text()).toBe(mockProduct.pricePerUnit)
    expect(warper.find(`[data-test='txt-variants-price']`).text()).toBe(`£${handlePrice(mockProduct.price.pence)}`)
  })  
})