import { useParams, useNavigate } from 'react-router-dom'

import ProductCard from '../components/ui/ProductCard';
import useSingleProduct from '../hooks/useSingleProduct';

import Modal from '../components/ui/Modal';
import useModal from '../hooks/useModal';


const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = useSingleProduct(id);
  const { open, handleClose } = useModal(true);

  const goBack = () => {
    handleClose();
    navigate(-1);
  }

  return (

    <Modal isOpen={open} onClose={goBack}>
      { product && <ProductCard {...product}/> }
    </Modal>
  )
}

export { SingleProductPage }