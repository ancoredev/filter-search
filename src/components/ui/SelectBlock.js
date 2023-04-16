import React from 'react'
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material'

const SelectBlock = ({ id, 
                       label="", 
                       title="", 
                       handleSelect, 
                       value, 
                       options, 
                       arrayOptions=false }) => {

  return (
    <div className="filter-brand filter-section">
      { 
        title && <p>{title}</p> 
      }
      <div className="brand-select">
        <FormControl fullWidth>
          {
            label && <InputLabel id={label.trim() + "-select-label"}>{label}</InputLabel>
          }
          <Select
            id={id}
            labelId={label.trim() + "-select-label"}
            value={value}
            onChange={handleSelect}
            label={label}
            size="small"
          >
            {
              arrayOptions 
                ? options.map(item => <MenuItem key={item} value={item[0]}>{item[1]}</MenuItem>)
                : options.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)
            }
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default SelectBlock