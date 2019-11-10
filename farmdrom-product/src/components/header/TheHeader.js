import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import BasketIcon from '../../support/icons/basket.svg'
import LogoIcon from '../../support/icons/logo_farmdrop.png'
import './TheHeader.scss'

const TheHeader = (props) => {
  return (
    <Fragment>
      <div className="header-bar" >
        <img data-test="img-logo" className="logo-icon" src={LogoIcon}/>
      </div>
      <div style={{textAlign: 'end'}}>
        <div className="basket-icon-container">
            <img data-test="img-basket-icon" className="basket-icon" src={BasketIcon}/>
            <span data-test="txt-basket" className="basket-icon-text">{props.basket.length}</span>
        </div>
      </div>
    </Fragment>
   );
}
const mapStateToProps = state => ({
  basket: state.basket
})

export default connect(mapStateToProps, {})(TheHeader);