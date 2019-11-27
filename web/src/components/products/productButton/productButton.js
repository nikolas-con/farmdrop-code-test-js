import React from 'react';
import minusIcon from '../../../utility/icons/minus.svg'
import plusIcon from '../../../utility/icons/plus.svg'
import './productButton.scss'
const ProductButton = (props) => {
 
  if (!props.basketExist) {
    return(
      <div>
        <p className="box"/>
        <span data-test="btn-add-basket" className="card-button" onClick={() => props.addNewItemInOrder(props.product)}> Add </span>
      </div>
    );
  } else if (props.basketExist) {
    return (
      <div>
        <span className="box"/>
        <span data-test="btn-minus" className="box-minus" onClick={()=>props.handleMinusQunttie(props.basketIndex)}><img src={minusIcon} alt=""/></span>
        <span data-test="txt-basket-quantity-product" className="basket-quantity-product">{props.basket[props.basketIndex].quantity}</span>
        <span data-test="btn-plus" className="box-plus" onClick={()=>props.handlePlusQunttie(props.basketIndex)}><img alt="" src={plusIcon}/></span>
      </div>
    )
  }
}
export default ProductButton;