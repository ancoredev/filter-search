import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Rating, Button } from '@mui/material'
import { addToCart } from '../features/cartSlice'

const Item = ({ id, images, title, brand, category, rating, description, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="item">

      <div className="item__img">
        <img src={images[0]} alt="" /> 
      </div>

      <div className="item__content">
        
        <div className="item__info-group">
          <Link to={String(id)}>
            <p className="item__title">{title} <span>{brand}</span></p>
          </Link>
          <div className="item__rate">
            <Rating
              name="simple-controlled"
              value={rating}
              precision={0.1}
              readOnly
            />
            <span className="item__rate-label">{rating}</span>
          </div>
          <div className="item__category">{category.replace("-"," ")}</div>
          <div className="item__desc">{description}</div>
        </div> 

        <div className="item__action-group">
          <div className="item__buy">
            <Button 
              variant="contained" 
              size="small"
              onClick={() => dispatch(addToCart({product: { id, images, brand, title, price, quantity: 1 }}))}
              disableElevation
            >Buy</Button>
            {/* <button className="item__like"><FavoriteBorderIcon/></button> */}
          </div>
          <div className="item__price">
            {price}<span>$</span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Item 