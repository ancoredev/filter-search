import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CartItem = ({ 
  images, brand, title, price, quantity, 
  handleReduce, handleIncrease, handleRemove }) => {
  return (
    <div className="cart__item">
      <div className="img"><img src={images[0]} alt="" /></div>
      <div className="info-section">
        <div className="title">{title}</div>
        <div className="brand">{brand}</div>
        <button 
          className="remove"
          onClick={handleRemove}
        >Remove from cart</button>
      </div>
      <div className="quantity">
        <button
          onClick={handleReduce}
        ><RemoveIcon/></button>
        <span className="quantity__number">{quantity}</span>
        <button
          onClick={handleIncrease}
        ><AddIcon /></button>
      </div>
      <div className="price">{price*quantity}$</div>
    </div>
  )
}

export default CartItem