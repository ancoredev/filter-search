import React from 'react'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const { productsCount, totalPrice } = useSelector(state => state.cart);
  return (
    <header>
      <nav>
        <p>ProductShop</p>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <div className="cart-info">
        <div className="cart-info__text">
          {
            productsCount === 0
            ? <span className="cart-info__total">Cart is empty</span>
            : <>
                <span className="cart-info__items">{productsCount} item</span>
                <span className="cart-info__total">{totalPrice}$ total</span>
              </>
          }
        </div>
        <Button 
          variant="contained" 
          size="small"
          onClick={() => navigate('cart')}
          disableElevation
          sx={{ height: '40px', width: '80px'}}
        >Cart</Button>
      </div>
    </header>
  )
}

export { Header }