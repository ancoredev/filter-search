import './App.css'
import { useEffect, useState } from 'react';

import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';



function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=30")
      .then(response => response.json())
      .then(json => setProducts(json.products));
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
