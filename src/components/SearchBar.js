import React from 'react'

import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { handleQuery, switchSortMethod, toggleView } from '../features/filterSlice'

import ToggleGroup from './ui/ToggleGroup';


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
      </div>

      <div className="search-bar__view">
        <ToggleGroup 
          value={view}
          onChange={(e, newView) => { dispatch(toggleView({ view: newView }))}}
        />
      </div>

    </div>
    </>
  )
}

export default SearchBar