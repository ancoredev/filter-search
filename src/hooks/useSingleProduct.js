import { useState, useEffect} from 'react'

const useSingleProduct = (id) => {
  const [ product, setProduct ] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
     .then(response => response.json())
     .then(json => setProduct(json));
  }, [id]);

  return product;
}

export default useSingleProduct