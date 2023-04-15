import React from 'react'
import { FormControl, Select, MenuItem } from '@mui/material'

const SelectBlock = ({ title, handleSelect, value, options }) => {
  return (
    <div className="filter-brand filter-section">
      { 
        title && <p>{title}</p> 
      }
      <div className="brand-select">
        <FormControl fullWidth>
          <Select
            labelId="brand-select-label"
            id="brand-select"
            value={value}
            onChange={handleSelect}
            size="small"
          >
            {
              options.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)
            }
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default SelectBlock