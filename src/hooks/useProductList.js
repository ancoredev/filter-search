import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { setProductList } from '../features/productsSlice';
import { addToBrandList } from '../features/filterSlice';


const useProductList = ( url ) => {
  const dispatch = useDispatch();

  useEffect(() => {

    fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(setProductList({ productList: json.products }));
        json.products.map(item => dispatch(addToBrandList({ brand: item.brand })));
      });

  },[]);
}

export default useProductList