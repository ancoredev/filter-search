import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setPageCount, setThisPageProducts } from '../features/productsSlice';
import { addToCategoriesList } from '../features/filterSlice';


const useProductList = () => {
  const dispatch = useDispatch();
  const { productsInPage, currentPage } = useSelector(state => state.products);

  const skip = productsInPage * (currentPage - 1);
  const url = `https://dummyjson.com/products?limit=${productsInPage}&skip=${skip}`;


  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=0`)
      .then(response => response.json())
      .then(json => {
        dispatch(setPageCount({ 
          pageCount: json.products.length % productsInPage === 0 
                        ? json.products.length/productsInPage 
                        : Math.floor(json.products.length/productsInPage) + 1
        }));
      });

    fetch('https://dummyjson.com/products/categories')
      .then(response => response.json())
      .then(json => dispatch(addToCategoriesList({ categories: ["All categories", ...json] })));
      
  }, []);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(setThisPageProducts({ thisPageProducts: json.products }));
      });

  }, [currentPage]);
}

export default useProductList


// {
//   thisPageProducts
//     .filter(item => checkItemIfIncludes(item, query))
//     .filter(item => checkPriceRange(item, priceRange))
//     .sort(sortByMethod(sortBy))
//     .map(item => <Item key={item.id} {...item}/>)
// }