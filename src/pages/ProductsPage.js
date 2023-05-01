import React from 'react'

import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import { Outlet } from 'react-router-dom';


const ProductsPage = () => {
  return (
    <div className="search-container">
      <SearchBar />
      <SearchResult /> 
      <Outlet/>
    </div>
  )
}

export { ProductsPage }