import React from 'react';
import './productImage.scss'

const ProductImage = (props) => {
  const medias = props.productMedias
  return ( 
    <div>
      {medias.map(media => 
        media.position === 1 ? <img className="card-image" src={media.url} alt=""/> : ''
      )}
    </div>
  );
}
 
export default ProductImage;