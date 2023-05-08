import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

import ProductCard from '../components/ui/ProductCard';
import useSingleProduct from '../hooks/useSingleProduct';

import Modal from '../components/ui/Modal';
import useModal from '../hooks/useModal';


const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const product = useSingleProduct(id);
  const { open, handleClose } = useModal(true);

  const goBack = () => {
    handleClose();
    navigate("/products");
  }
  const handleClick = () => dispatch(addToCart({ product: {...product, quantity: 1}}));

  return (
    <Modal isOpen={open} onClose={goBack}>
      { 
        product && 
        <ProductCard 
          {...product} 
          handleClick={handleClick} 
        /> 
      }
    </Modal>
  )
}

export { SingleProductPage }