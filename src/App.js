import { TextField,
        ToggleButtonGroup,
        ToggleButton, 
        Select,
        MenuItem, 
        FormControl,
        InputLabel,
        Slider,
        Rating,
        Button} from '@mui/material';

import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './App.css'
import { useEffect, useState } from 'react';

import Item from './components/Item';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then(response => response.json())
      .then(json => setProducts(json.products));
  },[]);

  return (
    <div className="App">
      <div className="search-container">
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
          </div>
          <div className="search-bar__view">
            <ToggleButtonGroup
              size="small"
              value="list"
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

        <div className="search-result">
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
          <div className="result-content result-content_grid">

            {
              products.map(item => <Item key={item.id} {...item}/>)
            }

          </div>
        </div>  

      </div>
    </div>  
  )
}

export default App
