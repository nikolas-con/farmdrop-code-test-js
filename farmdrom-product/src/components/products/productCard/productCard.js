import React, {useState} from 'react';
import ProductImage from '../productImage/productImage'
import ProductVariants from '../productVariants/productVariants'
import './productCard.scss'
import ProductButton from '../productButton/productButton'
import { connect } from 'react-redux'
import { addNewItemInOrder, plusQuantity, minusQuantity } from '../../../store/actions/dataActions'

const ProductCard = (props) => {
  const [product, setProduct] = useState({...props.product, selectedVariantsValeu: null, selectedDefault: true})
  
  const handleSelectVariantsValue = (event) => {
    console.log(event.target.value)
    console.log(product.name)
    if (event.target.value !== product.measurement.displayName) setProduct({...product, selectedVariantsValeu: Number(event.target.value), selectedDefault: false})
    if (event.target.value === product.measurement.displayName) setProduct({...product, selectedVariantsValeu: null, selectedDefault: true})
  }

  const handlePrice = price => {
    let pounds = price/100
    return pounds.toFixed(2)
  }
  const submitInOrder = (data) => {
    console.log('1', data)
    if (data.variants.length === 0) {

      data.quantity = 1
      props.addNewItemInOrder({...data, quantity:1})
      console.log('2')
    } 
    if (data.variants.length > 0) {
      console.log('3')
      console.log(data)
      props.addNewItemInOrder({...data, quantity: 1})
    }
  }
  const handlePlusQunttie = index => {
    props.plusQuantity(index)
  }
  const handleMinusQunttie = index => {
    props.minusQuantity(index)
  }
  const configProductImage = { productMedias : product.media, productName:product.name, productTags:product.tags, basket:props.basket }
  const configProductVariants = { handleSelectVariantsValue : handleSelectVariantsValue, selectedDefault : product.selectedDefault,saleText : product.saleText, salePrice : product.salePrice, selectedVariantsValeu : product.selectedVariantsValeu, variants : product.variants, handlePrice : handlePrice, productMeasurement : product.measurement.displayName, productPrice : product.price.pence, productPricePerUnit : product.pricePerUnit }
  const configProductButon = { handleMinusQunttie : handleMinusQunttie , handlePlusQunttie : handlePlusQunttie, product :product, submitInOrder : submitInOrder, basket : props.basket }
  
  return ( 
    <div data-test="product-card" className="product-card">
      <ProductImage {...configProductImage}/>
      <p data-test="txt-product-name" className="product-name">{product.name}</p>
      <p data-test="txt-producer-name" className="product-producer-name">{product.producer.name}</p>
      <ProductVariants {...configProductVariants} />
      <ProductButton {...configProductButon}/>
    </div> 
  );
}

export default connect(null, {addNewItemInOrder, plusQuantity, minusQuantity})(ProductCard);