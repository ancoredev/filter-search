import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reduceQuantity, increaseQuantity, removeFromCart } from '../features/cartSlice'

import CartItem from './ui/CartItem'


const CartProducts = () => {
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  return (
    <div className="cart__products">
    {
      products.length !== 0 
      ? products.map(item => (
          <CartItem 
            key={item.id}
            handleReduce = {() => dispatch(reduceQuantity({ id: item.id }))}
            handleIncrease = {() => dispatch(increaseQuantity({ id: item.id }))}
            handleRemove={() => dispatch(removeFromCart({ id: item.id }))}
            {...item}
          />
        ))
      : <p>Cart is empty</p>
    }
    </div>
  )
}

export default CartProducts