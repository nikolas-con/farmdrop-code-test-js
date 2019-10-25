import React, {Fragment} from 'react';
import './productVariants.scss'
const DropDownList = (props) => {

}
const ProductSales = (props) => {
  if (props.variant.saleText === null && props.index === props.selectedVariantsValeu) {
    return (
      <Fragment>
        <p className="variants-price-per-unit">{props.variant.pricePerUnit}</p>
        <p className="variants-price">£{props.handlePrice(props.variant.price.pence)}</p>
      </Fragment>
    );  
  }
  if (props.variant.saleText!== null && props.index === props.selectedVariantsValeu ) {
    console.log('sele')
    return (
      <Fragment>
        <p className="variants-price-per-unit">{props.variant.pricePerUnit}</p>
        <p className="variants-text-seles">{props.variant.saleText}</p>
        <p className="variants-price-seles-off">£{props.handlePrice(props.variant.price.pence)}</p>
        <p className="variants-price-seles">£{props.handlePrice(props.variant.salePrice.pence)}</p>
      </Fragment>
    );
  }
  return (<div></div>)
}

const ProductVariants = (props) => {
  if (props.variants.length === 0) {
    return (
      <Fragment>
        <p className="variants-product-measurement">{props.productMeasurement}</p>
        <p className="variants-price-per-unit">{props.productPricePerUnit}</p>
        <p className="variants-price">£{props.handlePrice(props.productPrice)}</p>
        <div style={{}}>
          <span></span>
        </div>
      </Fragment>
    )
  } else if (props.variants.length > 0) {
    return (
      <Fragment>
        <DropDownList></DropDownList>
        <select onChange={props.handleSelectVariantsValue} className="variants-drop-down-list">
          {props.variants.map((variant, index) =>
            <option key={index} value={index}>{variant.measurement.displayName}</option>)}
        </select>
        {props.variants.map((variant, index) =>
          <ProductSales handlePrice={props.handlePrice} index={index} variant={variant} selectedVariantsValeu={props.selectedVariantsValeu}/>)}
      </Fragment>
    );

  }
}
 
export default ProductVariants;