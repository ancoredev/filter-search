import React from 'react'
import { useSelector } from 'react-redux'

const CartOrder = () => {
  const { totalPrice } = useSelector(state => state.cart);
  return (
    <div className="cart__order">
      <div className="order-title">Order Details</div>
      <div className="order-summary">
        <div className="text">Order summary</div>
        <div className="price">{totalPrice}$</div>
      </div>
    </div>
  )
}

export default CartOrder