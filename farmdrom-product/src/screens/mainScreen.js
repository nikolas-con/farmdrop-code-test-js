import React, { Fragment, Component } from 'react';
import TheHeader from '../components/header/TheHeader'
import TheProductGrind from '../components/productGrind/TheProductGrind'
import { fetchPost } from '../store/actions/dataActions'

import { connect } from 'react-redux'

class MainScreen extends Component {
  componentWillMount () {
    this.props.fetchPost()
  }
  render() { 
    return ( 
      <Fragment>
        <TheHeader basket={this.props.basket}/>
        <TheProductGrind/>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  products: state.post.products,
  basket: state.post.basket
})

export default connect(mapStateToProps,{ fetchPost })(MainScreen);

