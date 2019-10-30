import React, {Fragment} from 'react';
import minusIcon from '../../../support/icons/minus.svg'
import plusIcon from '../../../support/icons/plus.svg'
import './productButton.scss'
const ProductButton = (props) => {
  const basket = props.basket
  const product = props.product

  let basketFilter =  basket.some(items => {
    return items.name === product.name
  })
  let basketIndex = basket.findIndex(items => {
    return items.name === product.name
  })
  

  if ( basketFilter === false) {
    return(
      <Fragment>
        <p className="rondom-box"/>
        <a className="card-button" onClick={() => props.submitInOrder(product)}> Add </a>
      </Fragment>
    );
  } else if (basketFilter === true) {
    return (
      <Fragment>
        <a className="rondom-box"/>
        <a className="box-minus" onClick={()=>props.handleMinusQunttie(basketIndex)}><img src={minusIcon}/></a>
        <span className="basket-quantity-product">{basket[basketIndex].quantity}</span>
        <a className="box-plus" onClick={()=>props.handlePlusQunttie(basketIndex)}><img src={plusIcon}/></a>
      </Fragment>
    )
  }
}
export default ProductButton;