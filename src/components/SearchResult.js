import React from 'react'
import Filter from './Filter'
import Item from './Item'

import { useSelector } from 'react-redux'

import PaginationBlock from './PaginationBlock'

const SearchResult = () => {
  const thisPageProducts = useSelector(state => state.products.thisPageProducts)
  const view = useSelector(state => state.filter.view);

  return (
    <div className="search-result">
      <Filter />
        
      <div className="products">
        <PaginationBlock />
        
        <div className={ view === "grid" ? "result-content result-content_grid" : "result-content"}>
        {
          thisPageProducts.map(item => <Item key={item.id} {...item}/>)
        }
        </div>

        <PaginationBlock />

      </div> 
      
    </div>
  )
}

export default SearchResult