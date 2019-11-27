import React, { Fragment } from 'react';
import './productPrice.scss'

const ProductSales = (props) => {
  if (props.index === props.selectedVariantsValeu) {
    if (props.variant.saleText === null) {
      return (
        <Fragment>
          <p data-test="txt-price-per-unit" className="price-per-unit">{props.variant.pricePerUnit}</p>
          <p data-test="txt-price-default" className="price-default">£{props.handlePrice(props.variant.price.pence)}</p>
        </Fragment>
      );
    } else if (props.variant.saleText !== null) {
      return (
        <Fragment>
          <p data-test="txt-price-per-unit" className="price-per-unit">{props.variant.pricePerUnit}</p>
          <p data-test="txt-seles" className="text-seles">{props.variant.saleText}</p>
          <p data-test="txt-price-seles-off" className="price-seles-off">£{props.handlePrice(props.variant.price.pence)}</p>
          <p data-test="txt-price-seles" className="price-seles">£{props.handlePrice(props.variant.salePrice.pence)}</p>
        </Fragment>
      );
    }
  } else if (props.selectedDefault === true ) {
    if( props.saleText === null) {
      return (
        <Fragment>
          <p data-test="txt-price-per-unit-no-variant" className="price-per-unit">{props.productPricePerUnit}</p>
          <p data-test="txt-price-default-no-variant" className="price-default">£{props.handlePrice(props.productPrice)}</p>
        </Fragment>
      )
    } else if (props.saleText !== null && props.salePrice !== null) {
      return (
        <Fragment>
          <p data-test="txt-price-per-unit-no-variant" className="price-per-unit">{props.productPricePerUnit}</p>
          <p data-test="txt-sele-no-variant" className="text-seles">{props.saleText}</p>
          <p data-test="txt-price-seles-off-no-variant" className="price-seles-off">£{props.handlePrice(props.productPrice)}</p>
          <p data-test="txt-price-seles-no-variant" className="price-seles">£{props.handlePrice(props.salePrice.pence)}</p>
        </Fragment>
      );
    }
  }
  return null
}
export default ProductSales