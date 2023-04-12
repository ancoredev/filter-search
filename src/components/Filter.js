import React from 'react'
import { TextField, Slider, FormControl, Select, MenuItem } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'
import { switchBrandShow, setPriceRange, setLowerPrice, setUpperPrice } from '../features/filterSlice'

const Filter = () => {
  
  const brandList = useSelector(state => state.filter.brandList);
  const brand = useSelector(state => state.filter.brand);
  const priceRange = useSelector(state => state.filter.priceRange);
  const dispatch = useDispatch();

  return (
    <aside className="filter">

      <div className="filter__price filter-section">
        <p>Price</p>
        <div className="input-range">
          <div className="input-range__from">
            <TextField 
              id="from" 
              label="From" 
              variant="outlined" 
              size="small"
              value={priceRange[0]}
              onChange={e => dispatch(setLowerPrice({lowerPrice: e.target.value}))}
              type="number"
              fullWidth
            />
          </div>
          <div className="input-range__to">
            <TextField 
              id="to" 
              label="To" 
              variant="outlined" 
              size="small"
              value={priceRange[1]}
              onChange={e => dispatch(setUpperPrice({upperPrice: e.target.value}))}
              type="number"
              fullWidth
            />
          </div>
        </div>
        <div className="slider-range">
          <Slider
            value={priceRange}
            onChange={e => dispatch(setPriceRange({priceRange: e.target.value}))}
            valueLabelDisplay="auto"
            min={0}
            max={2000}
            size="small"
          />
        </div>
      </div>

      <div className="filter-brand filter-section">
        <p>Brand</p>
        <div className="brand-select">
          <FormControl fullWidth>
            <Select
              labelId="brand-select-label"
              id="brand-select"
              value={brand}
              onChange={e => dispatch(switchBrandShow({brand: e.target.value}))}
              size="small"
            >
              {
                brandList.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)
              }
            </Select>
          </FormControl>
        </div>
      </div>

    </aside>
  )
}

export default Filter