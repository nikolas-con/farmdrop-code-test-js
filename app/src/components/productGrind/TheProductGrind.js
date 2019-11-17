import React, { useEffect } from 'react';
import ProductCard from '../products/productCard/productCard'
import './TheProductGrind.scss'
import { connect } from 'react-redux'
import { fetchPost } from '../../store/actions/dataActions'

const mapDispatchToProps = dispatch => ({ 
  fetchPost: () => dispatch(fetchPost())
})
const mapStateToProps = state => ({
  products: state.products,
  basket: state.basket
})

const TheProductGrind = (props) => {

  useEffect (()=>{
    props.fetchPost()
  },[props.fetchPost]);

  return (
      <ul data-test="list-product-grind" className="product-grind">
        {props.products.map(product => <ProductCard key={product.name} basket={props.basket} product={product}/>)}
      </ul>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TheProductGrind);