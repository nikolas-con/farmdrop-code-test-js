import React, { useEffect } from 'react';
import ProductCard from '../products/productCard/productCard'
import './TheProductGrind.scss'
import { connect } from 'react-redux'
import { fetchPost } from '../../store/actions/dataActions'



const TheProductGrind = (props) => {
  useEffect ( ()=>{
    props.fetchPost()
  });
  return (
    <div data-tets="product-grind" className="product-grind">
      {props.products.map(product => 
        <ProductCard data-test="product-card" key={product.name} basket={props.basket} product={product}/>
        )}
    </div>
  );
}
const mapStateToProps = state => ({
  products: state.post.products,
  basket: state.post.basket
})

export default connect(mapStateToProps, { fetchPost })(TheProductGrind);