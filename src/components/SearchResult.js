import React from 'react'
import Filter from './Filter'
import Item from './Item'

import { useSelector } from 'react-redux'

import { checkItemBrand, checkItemIfIncludes, checkPriceRange, sortByMethod } from '../utils/utils'

const SearchResult = ({ products }) => {
  const query = useSelector(state => state.filter.query);
  const sortBy = useSelector(state => state.filter.sortBy);
  const brand = useSelector(state => state.filter.brand);
  const priceRange = useSelector(state => state.filter.priceRange);

  return (
    <div className="search-result">
      <Filter />
      <div className="result-content result-content_grid">
        {
          products
            .filter(item => checkItemIfIncludes(item, query))
            .filter(item => checkItemBrand(item, brand))
            .filter(item => checkPriceRange(item, priceRange))
            .sort(sortByMethod(sortBy))
            .map(item => <Item key={item.id} {...item}
          />)
        }
      </div>
    </div>
  )
}

export default SearchResult