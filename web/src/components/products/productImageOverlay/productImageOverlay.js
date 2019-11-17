import React from 'react';
import './productImageOverlay.scss'

const ProductImageOverlay = (props) => {
  if (props.basketExist) {
    return (
      <span data-test="txt-bakset-quantity" className="image-overlay" >{props.basket[props.basketIndex].quantity} in basket</span>
    )
  } else {
    return null
  }

}

export default ProductImageOverlay