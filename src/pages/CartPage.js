import React from 'react'
import CartProducts from './../components/CartProducts';
import CartOrder from './../components/CartOrder';

const CartPage = () => {
  return (
    <div className="cart-container">
      <h1>Shopping cart</h1>
      <div className="cart">
        <CartProducts />
        <CartOrder />
      </div>
    </div>
  )
}

export { CartPage } 