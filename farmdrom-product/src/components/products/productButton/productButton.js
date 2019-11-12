import React, {Fragment} from 'react';
import minusIcon from '../../../support/icons/minus.svg'
import plusIcon from '../../../support/icons/plus.svg'
import './productButton.scss'
const ProductButton = (props) => {
  const basket = props.basket
  const product = props.product
  const basketIndex = props.basketIndex
  const basketFilter = props.basketFilter

  if ( basketFilter === false) {
    console.log('no in basket', basketIndex )
    return(
      <Fragment>
        <p className="rondom-box"/>
        <a data-test="btn-add-basket" className="card-button" onClick={() => props.submitInOrder(product)}> Add </a>
      </Fragment>
    );
  } else if (basketFilter === true) {
    console.log('in basket')
    return (
      <Fragment>
        <a className="rondom-box"/>
        <a data-test="btn-minus" className="box-minus" onClick={()=>props.handleMinusQunttie(basketIndex)}><img src={minusIcon}/></a>
        <span data-test="txt-basket-quantity-product"  className="basket-quantity-product">{basket[basketIndex].quantity}</span>
        <a data-test="btn-plus" className="box-plus" onClick={()=>props.handlePlusQunttie(basketIndex)}><img src={plusIcon}/></a>
      </Fragment>
    )
  }
}
export default ProductButton;