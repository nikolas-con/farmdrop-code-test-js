import React, {useState} from 'react';
import ProductImage from '../productImage/productImage'
import ProductImageOverlay from '../productImageOverlay/productImageOverlay'
import ProductVariants from '../productVariants/productVariants'
import ProductButton from '../productButton/productButton'
import './productCard.scss'
import { connect } from 'react-redux'
import { addNewItemInOrder, plusQuantity, minusQuantity } from '../../../store/actions/dataActions'

const ProductCard = (props) => {

  const [product, setProduct] = useState({...props.product, selectedVariantsValeu: null, selectedDefault: true})

  let basketExist =  props.basket.some(items => {return items.name === product.name})
  let basketIndex = props.basket.findIndex(items => { return items.name === product.name })
  let imagePositionIndex =  product.media.findIndex(image => { return image.position === 1 })
  let imageTagsExist = product.tags.length > 0 ? true : false
  
  const handleSelectVariantsValue = (event) => {
    if (event.target.value !== product.measurement.displayName) setProduct({...product, selectedVariantsValeu: Number(event.target.value), selectedDefault: false})
    if (event.target.value === product.measurement.displayName) setProduct({...product, selectedVariantsValeu: null, selectedDefault: true})
  }

  const handlePrice = price => {
    let pounds = price/100
    return pounds.toFixed(2)
  }
 
  const configProductImage = { imageTagsExist: imageTagsExist, imagePositionIndex: imagePositionIndex, productMedias : product.media, productTags:product.tags }
  const configProductImageOverlay = { basketExist: basketExist, basketIndex: basketIndex, basket: props.basket }
  const configProductVariants = { handleSelectVariantsValue : handleSelectVariantsValue, selectedDefault : product.selectedDefault,saleText : product.saleText, salePrice : product.salePrice, selectedVariantsValeu : product.selectedVariantsValeu, variants : product.variants, handlePrice : handlePrice, productMeasurement : product.measurement.displayName, productPrice : product.price.pence, productPricePerUnit : product.pricePerUnit }
  const configProductButon = { basketExist: basketExist, basketIndex: basketIndex, handleMinusQunttie : props.minusQuantity, handlePlusQunttie : props.plusQuantity, product :product, addNewItemInOrder: props.addNewItemInOrder, basket : props.basket }
  
  return ( 
    <div data-test="product-card" className="product-card">
      <ProductImage {...configProductImage}/>
      <ProductImageOverlay {...configProductImageOverlay}/>
      <p data-test="txt-product-name" className="product-name">{product.name}</p>
      <p data-test="txt-producer-name" className="product-producer-name">{product.producer.name}</p>
      <ProductVariants {...configProductVariants} />
      <ProductButton {...configProductButon}/>
    </div> 
  );
}
const mapDispatchToProps = dispatch => ({ 
  addNewItemInOrder: (data) => dispatch(addNewItemInOrder({...data, quantity:1})),
  plusQuantity: (index) => dispatch(plusQuantity(index)),
  minusQuantity: (index) => dispatch(minusQuantity(index))
})
const mapStateToProps = state => ({
  basket: state.basket
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);