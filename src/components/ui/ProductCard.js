import React from 'react'
import { useNavigate } from 'react-router-dom';

const cardStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


const ProductCard = ({ images, title, brand, category, rating, description, price }) => {
  return (
    <article className="product">
      <h2>{title}</h2>
      <p>{category}</p>
    </article>
  )
}

export default ProductCard