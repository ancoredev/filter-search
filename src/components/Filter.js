import React from 'react'
import { TextField, Slider, FormControl, Select, MenuItem } from '@mui/material'

const Filter = () => {
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
              fullWidth
            />
          </div>
          <div className="input-range__to">
            <TextField 
              id="to" 
              label="To" 
              variant="outlined" 
              size="small"
              fullWidth
            />
          </div>
        </div>
        <div className="slider-range">
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={[0, 500]}
            onChange={() => {}}
            valueLabelDisplay="auto"
            getAriaValueText={() => {}}
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
              value="notselected"
              onChange={() => {}}
              size="small"
            >
              <MenuItem value="notselected">All Brands</MenuItem>
              <MenuItem value="apple">Apple</MenuItem>
              <MenuItem value="oppo">Oppo</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

    </aside>
  )
}

export default Filter