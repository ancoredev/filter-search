import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <p>Product Shop</p>
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Button 
          onClick={() => navigate('cart')}
        >Cart</Button>
      </nav>
    </header>
  )
}

export { Header }