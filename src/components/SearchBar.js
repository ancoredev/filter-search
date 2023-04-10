import React from 'react'

import { TextField, FormControl, InputLabel, Select, MenuItem, ToggleButtonGroup, ToggleButton, Button } from '@mui/material'
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';


const SearchBar = () => {
  return (
    <>
    <h1 className="title">Products</h1>
    <div className="search-bar">
      <div className="search-bar__leftside">
        <div className="search-bar__input">
          <TextField 
            id="search" 
            label="Search" 
            variant="outlined" 
            size="small"
            fullWidth
          />
        </div>
        <div className="search-bar__sort-by">
          <FormControl fullWidth>
            <InputLabel id="sort-select-label">Sort by</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value="toprate"
              label="Sort by"
              onChange={() => {}}
              size="small"
            >
              <MenuItem value="cheap">Сначала недорогие</MenuItem>
              <MenuItem value="expensive">Сначала дорогие</MenuItem>
              <MenuItem value="toprate">Сначала с лучшей оценкой</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="search-bar__button">
          <Button  variant="contained"  disableElevation>
            Search
          </Button>
        </div>
      </div>
      <div className="search-bar__view">
        <ToggleButtonGroup
          size="small"
          value="module"
          onChange={() => {}}
        >
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
    </>
  )
}

export default SearchBar