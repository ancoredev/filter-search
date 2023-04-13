import React from 'react'

import { TextField, FormControl, InputLabel, Select, MenuItem, ToggleButtonGroup, ToggleButton } from '@mui/material'
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

import { useDispatch, useSelector } from 'react-redux'
import { handleQuery, switchSortMethod, toggleView } from '../features/filterSlice'


const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector(state => state.filter.query);
  const sortBy = useSelector(state => state.filter.sortBy);
  const view = useSelector(state => state.filter.view);


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
            value={query}
            onChange={e => dispatch(handleQuery({ query: e.target.value }))}
            fullWidth
          />
        </div>
        <div className="search-bar__sort-by">
          <FormControl fullWidth>
            <InputLabel id="sort-select-label">Sort by</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={sortBy}
              label="Sort by"
              onChange={e => dispatch(switchSortMethod({ sortBy: e.target.value }))}
              size="small"
            >
              <MenuItem value="cheap">Cheap first</MenuItem>
              <MenuItem value="expensive">Expensive first</MenuItem>
              <MenuItem value="toprated">Toprated first</MenuItem>
            </Select>
          </FormControl>
        </div>

      </div>
      <div className="search-bar__view">
        <ToggleButtonGroup
          size="small"
          value={view}
          onChange={(e, newView) => { dispatch(toggleView({ view: newView }))}}
          exclusive
        >
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="grid" aria-label="grid">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
    </>
  )
}

export default SearchBar