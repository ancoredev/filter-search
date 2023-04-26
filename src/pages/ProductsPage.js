import React from 'react'

import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';


const ProductsPage = () => {
  return (
    <div className="search-container">
      <SearchBar />
      <SearchResult /> 
    </div>
  )
}

export { ProductsPage }