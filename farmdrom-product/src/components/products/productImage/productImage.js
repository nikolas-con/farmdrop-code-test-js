import React, {Fragment} from 'react';
import './productImage.scss'

const ProductImage = (props) => {
  const medias = props.productMedias
  const tags = props.productTags

  const basket = props.basket
  const productName = props.productName

  let basketFilter =  basket.some(items => {
    return items.name === productName
  })
  let basketIndex = basket.findIndex(items => {
    return items.name === productName
  })

  if (tags.length === 0 && !basketFilter ) {
    return (
      <Fragment>
        {medias.map(media => 
          media.position === 1 ? <img data-test="img-product" className="card-image" src={media.url} alt=""/> : ''
        )}
    </Fragment>
    )
  } else if (tags.length > 0 && !basketFilter) {
    return (
      <Fragment>
        {medias.map(media => media.position === 1 ? <img data-test="img-product" className="card-image" src={media.url} alt=""/>  : '')}
        {tags.map(tag => <p data-test="txt-product-tag" className="product-tags">{tag.name}</p>)}
      </Fragment>
    )   
  } else if (basketFilter) {
    return (
      <Fragment>
        {medias.map(media => media.position === 1 ? <img data-test="img-product" className="card-image" src={media.url} alt=""/>  : '')}
        <p data-test="basket-image" className="basket-image"><span data-test="txt-bakset-quantity" style={{position: 'absolute', top: '40%', left: '32%'}}>{basket[basketIndex].quantity} in basket</span></p>
      </Fragment>
      )
  }
  return <div></div>
}
 
export default ProductImage;