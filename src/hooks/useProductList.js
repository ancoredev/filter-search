import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setPageCount, setProductList, setThisPageProducts } from '../features/productsSlice';
import { addToCategoriesList } from '../features/filterSlice';
import { calculatePages, loadFilteredProducts } from './../utils/utils';


const useProductList = () => {
  const dispatch = useDispatch();
  const { productsInPage, currentPage, productList } = useSelector(state => state.products);
  const { query, priceRange, sortBy, category } = useSelector(state => state.filter);

  const skip = productsInPage * (currentPage - 1);
  const url = `https://dummyjson.com/products?limit=${productsInPage}&skip=${skip}`;


  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=0`)
      .then(response => response.json())
      .then(json => {
        const filtered = loadFilteredProducts(json.products, { query, category, sortBy, priceRange });
        const count = calculatePages(json.products, productsInPage);
        dispatch(setProductList({ productList: filtered }));
        dispatch(setPageCount({ pageCount: count }));
        dispatch(setThisPageProducts({ thisPageProducts: filtered.slice(skip, skip + productsInPage)}));
      });

    fetch('https://dummyjson.com/products/categories')
      .then(response => response.json())
      .then(json => dispatch(addToCategoriesList({ categories: ["All categories", ...json] })));
      
  }, []);

  useEffect(() => {
    const filtered = loadFilteredProducts(productList, { query, category, sortBy, priceRange });
    const count = calculatePages(filtered, productsInPage);
    dispatch(setPageCount({ pageCount: count }));
    dispatch(setThisPageProducts({ thisPageProducts: filtered.slice(skip, skip + productsInPage)}));
  }, [currentPage, sortBy, query, priceRange, category]);
}

export default useProductList