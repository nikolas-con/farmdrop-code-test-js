import React, {Fragment} from 'react';
import './productVariants.scss'
import ProductPrice from '../productPrice/productPrice'

const ProductVariants = (props) => {
  if (props.variants.length === 0) {
    return (
      <div>
        <p data-test="txt-variants-product-measurement" className="variants-product-measurement">{props.productMeasurement}</p>
        <p data-test="txt-variants-price-per-unit" className="variants-price-per-unit">{props.productPricePerUnit}</p>
        <p data-test="txt-variants-price" className="variants-price">£{props.handlePrice(props.productPrice)}</p>
      </div>
    )
  } else if (props.variants.length > 0) {
    const configProductSeles = { handlePrice : props.handlePrice, selectedDefault : props.selectedDefault, saleText : props.saleText, salePrice : props.salePrice, productMeasurement : props.productMeasurement, productPrice : props.productPrice, productPricePerUnit : props.productPricePerUnit, selectedVariantsValeu : props.selectedVariantsValeu }
    return (
      <div style={{display: 'contents'}}>
        <select onChange={props.handleSelectVariantsValue}>
          <option className="variants-opotions" value={props.productMeasurement}>{props.productMeasurement}</option>
          {props.variants.map((variant, index) =>
            <option className="variants-opotions" key={index} value={index}>{variant.measurement.displayName}</option>)}
        </select>
        <ul>
          {props.variants.map((variant, index) =>
            <ProductPrice {...configProductSeles} key={index} index={index} variant={variant}/>)}
        </ul>
      </div>  
    );

  }
}
 
export default ProductVariants;