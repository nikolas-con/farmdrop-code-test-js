import React, {Fragment} from 'react';
import './productVariants.scss'

const ProductSales = (props) => {
  if (props.index === props.selectedVariantsValeu) {
    if (props.variant.saleText === null) {
      return (
        <Fragment>
          <p className="variants-price-per-unit">{props.variant.pricePerUnit}</p>
          <p className="variants-price">£{props.handlePrice(props.variant.price.pence)}</p>
        </Fragment>
      ); 
    } else if (props.variant.saleText !== null) {
      return (
        <Fragment>
          <p className="variants-price-per-unit">{props.variant.pricePerUnit}</p>
          <p className="variants-text-seles">{props.variant.saleText}</p>
          <p className="variants-price-seles-off">£{props.handlePrice(props.variant.price.pence)}</p>
          <p className="variants-price-seles">£{props.handlePrice(props.variant.salePrice.pence)}</p>
        </Fragment>
      );
    }
  } else if (props.selectedDefault === true ) {
    if( props.saleText === null) {
      return (
        <Fragment>
          <p className="variants-price-per-unit">{props.productPricePerUnit}</p>
          <p className="variants-price">£{props.handlePrice(props.productPrice)}</p>
        </Fragment>
      ) 
    } else if (props.saleText !== null && props.salePrice !== null) {
      return (
        <Fragment>
          <p className="variants-price-per-unit">{props.productPricePerUnit}</p>
          <p className="variants-text-seles">{props.saleText}</p>
          <p className="variants-price-seles-off">£{props.handlePrice(props.productPrice)}</p>
          <p className="variants-price-seles">£{props.handlePrice(props.salePrice.pence)}</p>
        </Fragment>
      );
    }
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
      </Fragment>
    )
  } else if (props.variants.length > 0) {
    const configProductSeles = { handlePrice : props.handlePrice, selectedDefault : props.selectedDefault, saleText : props.saleText, salePrice : props.salePrice, productMeasurement : props.productMeasurement, productPrice : props.productPrice, productPricePerUnit : props.productPricePerUnit, selectedVariantsValeu : props.selectedVariantsValeu }
    return (
      <Fragment>
        <select onChange={props.handleSelectVariantsValue}>
          <option value={props.productMeasurement}>{props.productMeasurement}</option>
          {props.variants.map((variant, index) =>
            <option className="variants-opotions" key={index} value={index}>{variant.measurement.displayName}</option>)}
        </select>
        <ul>
          {props.variants.map((variant, index) =>
            <ProductSales {...configProductSeles} index={index} variant={variant}/>)}
        </ul>
      </Fragment>
    );

  }
}
 
export default ProductVariants;