import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { switchBrandShow, 
         setPriceRange, 
         setLowerPrice, 
         setUpperPrice, 
         switchSortMethod } from '../features/filterSlice'

import DoubleRangeSlider from './ui/DoubleRangeSlider'
import SelectBlock from './ui/SelectBlock'

const Filter = () => {
  
  const brandList = useSelector(state => state.filter.brandList);
  const brand = useSelector(state => state.filter.brand);
  const priceRange = useSelector(state => state.filter.priceRange);
  const sortBy = useSelector(state => state.filter.sortBy);
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
        title="Brand"
        value={brand}
        handleSelect={e => dispatch(switchBrandShow({brand: e.target.value}))}
        options={brandList}
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
        arrayOptions
      />
    </aside>
  )
}

export default Filter