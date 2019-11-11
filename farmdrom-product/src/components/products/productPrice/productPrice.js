import React, { Fragment } from 'react';
import './productPrice.scss'

const ProductSales = (props) => {
  if (props.index === props.selectedVariantsValeu) {
    if (props.variant.saleText === null) {
      return (
        <Fragment>
          <p className="price-per-unit">{props.variant.pricePerUnit}</p>
          <p className="price-default">£{props.handlePrice(props.variant.price.pence)}</p>
        </Fragment>
      ); 
    } else if (props.variant.saleText !== null) {
      return (
        <Fragment>
          <p className="price-per-unit">{props.variant.pricePerUnit}</p>
          <p className="text-seles">{props.variant.saleText}</p>
          <p className="price-seles-off">£{props.handlePrice(props.variant.price.pence)}</p>
          <p className="price-seles">£{props.handlePrice(props.variant.salePrice.pence)}</p>
        </Fragment>
      );
    }
  } else if (props.selectedDefault === true ) {
    if( props.saleText === null) {
      return (
        <Fragment>
          <p className="price-per-unit">{props.productPricePerUnit}</p>
          <p className="price-default">£{props.handlePrice(props.productPrice)}</p>
        </Fragment>
      ) 
    } else if (props.saleText !== null && props.salePrice !== null) {
      return (
        <Fragment>
          <p className="price-per-unit">{props.productPricePerUnit}</p>
          <p className="text-seles">{props.saleText}</p>
          <p className="price-seles-off">£{props.handlePrice(props.productPrice)}</p>
          <p className="price-seles">£{props.handlePrice(props.salePrice.pence)}</p>
        </Fragment>
      );
    }
  }
  return (<div></div>)
}
export default ProductSales