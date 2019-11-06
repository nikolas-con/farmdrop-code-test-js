import React, { Fragment } from 'react';
import BasketIcon from '../../support/icons/basket.svg'
import LogoIcon from '../../support/icons/logo_farmdrop.png'
import './TheHeader.scss'

const TheHeader = (props) => {
  return (
    <Fragment>
      <div data-test="header-bar" className="header-bar" >
        <img className="logo-icon" src={LogoIcon}/>
      </div>
      <div style={{textAlign: 'end'}}>
        <div className="basket-icon-container">
            <img className="basket-icon" src={BasketIcon}/>
            <span className="basket-icon-text">{props.basket.length}</span>
        </div>
      </div>
    
    </Fragment>
   );
}

export default TheHeader;