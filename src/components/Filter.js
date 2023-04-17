import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setCategoryToShow, 
         setPriceRange, 
         setLowerPrice, 
         setUpperPrice, 
         switchSortMethod } from '../features/filterSlice'

import DoubleRangeSlider from './ui/DoubleRangeSlider'
import SelectBlock from './ui/SelectBlock'

const Filter = () => {
  const { categoriesList, category, priceRange, sortBy } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <aside className="filter">
      <DoubleRangeSlider 
        title="Price"
        lowerRange={priceRange[0]}
        handleLowerRange={e => dispatch(setLowerPrice({lowerPrice: e.target.value}))}
        upperRange={priceRange[1]}
        handleUpperRange={e => dispatch(setUpperPrice({upperPrice: e.target.value}))}
        sliderValue={priceRange}
        handleSliderValue={e => dispatch(setPriceRange({priceRange: e.target.value}))}
      />
      <SelectBlock
        title="Categories"
        value={category}
        handleSelect={e => dispatch(setCategoryToShow({category: e.target.value}))}
        options={categoriesList}
      />
      <SelectBlock
        title="Sort by"
        value={sortBy}
        handleSelect={e => dispatch(switchSortMethod({ sortBy: e.target.value }))}
        options={[
          ['cheap', 'Cheap first'],
          ['expensive', 'Expensive first'],
          ['toprated', 'Toprated first']
        ]}
        doubleArrayOptions
      />
    </aside>
  )
}

export default Filter