import { Rating, Button } from '@mui/material';
import React from 'react'


const ProductCard = ({ images, title, category, rating, description, price, handleClick }) => {
  return (
    <article className="product">
      <h2 className="product__title">{title}</h2>
      <p className="product__category">{category}</p>
      <div className="product-content">
        <div className="img-container">
          <img src={images[0]} alt="" />
        </div>
        <div className="info-container">
          <div className="top-group">
            <p className="description">{description}</p>
            <Rating
              name="simple-controlled"
              value={rating}
              precision={0.1}
              readOnly
            />
          </div>
          <div className="bottom-group">
            <div className="product-price">{price}<span>$</span> </div>
            <Button 
              variant="contained" 
              size="small"
              disableElevation
            >Buy</Button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard