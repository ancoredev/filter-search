import React from 'react'
import Filter from './Filter'
import Item from './Item'

const SearchResult = ({ products }) => {
  return (
    <div className="search-result">
      <Filter />
      <div className="result-content result-content_grid">
        {
          products.map(item => <Item key={item.id} {...item}/>)
        }
      </div>
    </div>
  )
}

export default SearchResult