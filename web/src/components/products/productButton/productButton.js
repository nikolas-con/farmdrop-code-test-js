import React from 'react';
import minusIcon from '../../../utility/icons/minus.svg'
import plusIcon from '../../../utility/icons/plus.svg'
import './productButton.scss'
const ProductButton = (props) => {
 
  if (!props.basketExist) {
    return(
      <div>
        <p className="rondom-box"/>
        <a data-test="btn-add-basket" className="card-button" onClick={() => props.addNewItemInOrder(props.product)}> Add </a>
      </div>
    );
  } else if (props.basketExist) {
    return (
      <div>
        <a className="rondom-box"/>
        <a data-test="btn-minus" className="box-minus" onClick={()=>props.handleMinusQunttie(props.basketIndex)}><img src={minusIcon}/></a>
        <span data-test="txt-basket-quantity-product"  className="basket-quantity-product">{props.basket[props.basketIndex].quantity}</span>
        <a data-test="btn-plus" className="box-plus" onClick={()=>props.handlePlusQunttie(props.basketIndex)}><img src={plusIcon}/></a>
      </div>
    )
  }
}
export default ProductButton;