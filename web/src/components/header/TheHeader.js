import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux'
import BasketIcon from '../../utility/icons/basket.svg'
import LogoIcon from '../../utility/icons/logo_farmdrop.png'
import AuthContent from '../auth/authContent/authContent'
import { getUserInfo } from '../../store/actions/dataActions'
import './TheHeader.scss'

const TheHeader = (props) => {
  useEffect(() => {
    props.getUserInfo()
  },[props.getUserInfo])
  return (
    <Fragment>
      <div className="header-bar" >
        <img data-test="img-logo" className="logo-icon" alt="" src={LogoIcon}/>
        <AuthContent/>
      </div>
      <div style={{textAlign: 'end'}}>
        <div className="basket-icon-container">
            <img data-test="img-basket-icon" className="basket-icon" alt="basket" src={BasketIcon}/>
            <span data-test="txt-basket" className="basket-icon-text">{props.basket.length}</span>
        </div>
      </div>
    </Fragment>
   );
}
const mapStateToProps = state => ({
  basket: state.basket
})
const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getUserInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(TheHeader);