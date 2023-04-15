import React from 'react'
import { TextField, Slider } from '@mui/material'

const DoubleRangeSlider = ({
  title,
  lowerRange, handleLowerRange, 
  upperRange, handleUpperRange, 
  sliderValue, handleSliderValue }) => {

  return (
    <div className="filter__price filter-section">
      {
        title && <p>{title}</p>
      }
      <div className="input-range">
        <div className="input-range__from">
          <TextField 
            id="from" 
            label="From" 
            variant="outlined" 
            size="small"
            value={lowerRange}
            onBlur={handleLowerRange}
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
            value={upperRange}
            onBlur={handleUpperRange}
            type="number"
            fullWidth
          />
        </div>
      </div>
      <div className="slider-range">
        <Slider
          value={sliderValue}
          onChange={handleSliderValue}
          valueLabelDisplay="auto"
          min={0}
          max={2000}
          size="small"
        />
      </div>
    </div>
  )
}

export default DoubleRangeSlider