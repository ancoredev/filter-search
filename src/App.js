import './App.css'
import { useEffect, useState } from 'react';
import { useSelector,  useDispatch } from 'react-redux';

import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

import { addToBrandList } from './features/filterSlice';


function App() {
  const [products, setProducts] = useState([]);

  const brandList = useSelector(state => state.filter.brandList)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then(response => response.json())
      .then(json => {
        setProducts(json.products);
        json.products.map(item => dispatch(addToBrandList({brand: item.brand})));
       });

  },[]);

  return (
    <div className="App">
      <div className="search-container">
        <SearchBar />
        <SearchResult products={products}/> 
      </div>
    </div>  
  )
}

export default App
