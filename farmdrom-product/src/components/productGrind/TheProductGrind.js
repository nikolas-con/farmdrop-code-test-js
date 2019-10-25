import React from 'react';
import ProductCard from '../products/productCard/productCard'
import './TheProductGrind.scss'
import { connect } from 'react-redux'


const TheProductGrind = (props) => {
  return (
    <div className="product-grind">
      {props.products.map(product => 
        <ProductCard product={product} basket={props.basket}/>
        )}
    </div>
  );
}
const mapStateToProps = state => ({
  products: state.post.products,
  basket: state.post.basket
})

export default connect(mapStateToProps, {})(TheProductGrind);