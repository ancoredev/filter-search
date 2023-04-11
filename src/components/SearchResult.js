import React from 'react'
import Filter from './Filter'
import Item from './Item'

import { useSelector } from 'react-redux'

import { checkItemIfIncludes, sortByMethod } from '../utils/utils'

const SearchResult = ({ products }) => {
  const query = useSelector(state => state.filter.query);
  const sortBy = useSelector(state => state.filter.sortBy);

  return (
    <div className="search-result">
      <Filter />
      <div className="result-content result-content_grid">
        {
          products
            .filter(item => checkItemIfIncludes({ ...item}, query))
            .sort(sortByMethod(sortBy))
            .map(item => <Item key={item.id} {...item}
          />)
        }
      </div>
    </div>
  )
}

export default SearchResult