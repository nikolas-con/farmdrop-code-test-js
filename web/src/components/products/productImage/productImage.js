import React from 'react';
import './productImage.scss'

const ProductImage = (props) => {
  return (
    <div>
      <img data-test="img-product" className="card-image" src={props.productMedias[props.imagePositionIndex].url} alt=""/>
      {props.imageTagsExist ? <p data-test="txt-product-tag" className="product-tags">{props.productTags[0].name}</p> : null }
    </div>
  )
}
export default ProductImage;