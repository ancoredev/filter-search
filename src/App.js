import './App.css'
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

import useProductList from './hooks/useProductList';


function App() {
  useProductList("https://dummyjson.com/products?limit=10");

  return (
    <div className="App">
      <div className="search-container">
        <SearchBar />
        <SearchResult /> 
      </div>
    </div>  
  )
}

export default App
