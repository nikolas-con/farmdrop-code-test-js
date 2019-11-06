import React, { Fragment } from 'react';
import BasketIcon from '../../support/icons/basket.svg'
import LogoIcon from '../../support/icons/logo_farmdrop.png'
import './TheHeader.scss'

const TheHeader = (props) => {
  return (
    <Fragment>
      <div data-test="header-bar" className="header-bar" >
        <img data-test="img-logo" className="logo-icon" src={LogoIcon}/>
      </div>
      <div style={{textAlign: 'end'}}>
        <div data-test="con-basket" className="basket-icon-container">
            <img data-test="img-basket-icon" className="basket-icon" src={BasketIcon}/>
            <span data-test="text-basket" className="basket-icon-text">{props.basket.length}</span>
        </div>
      </div>
    </Fragment>
   );
}

export default TheHeader;