import React from 'react'

import { Rating, Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const Item = ({ images, title, brand, rating, description, price }) => {
  return (
    <div className="item">

      <div className="item__img">
        <img src={images[0]} alt="" /> 
      </div>

      <div className="item__content">

        <div className="item__info-group">
          <p className="item__title">{title} <span>{brand}</span></p>
          <div className="item__rate">
            <Rating
              name="simple-controlled"
              value={rating}
              precision={0.1}
              onChange={() => {}}
              readOnly
            />
            <span className="item__rate-label">{rating}</span>
          </div>
          <div className="item__desc">{description}</div>
        </div> 

        <div className="item__action-group">
          <div className="item__buy">
            <Button 
              variant="contained" 
              size="small"
              disableElevation
            >Buy</Button>
            <button className="item__like"><FavoriteBorderIcon/></button>
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