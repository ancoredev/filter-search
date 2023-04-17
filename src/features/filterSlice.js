import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  query: "",
  sortBy: "cheap",
  category: "All categories",
  categoriesList: ["All categories"],
  priceRange: [0,2000],
  view: "grid"
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    handleQuery: ( state, action ) => {
      state.query = action.payload.query;
    },
    switchSortMethod: ( state, action ) => {
      state.sortBy = action.payload.sortBy;
    },
    setCategoryToShow: ( state, action ) => {
      state.category = action.payload.category;
    },
    addToCategoriesList: ( state, action ) => {
      state.categoriesList = action.payload.categories;
    },
    setPriceRange: ( state, action ) => {
      if ( action.payload.priceRange[0] > action.payload.priceRange[1]) {
        state.priceRange = [ action.payload.priceRange[0], action.payload.priceRange[0] ]
      } else {
        state.priceRange = action.payload.priceRange;
      }
    },
    setLowerPrice: ( state, action ) => {
      state.priceRange[0] = action.payload.lowerPrice;
    },
    setUpperPrice: ( state, action ) => {
      state.priceRange[1] = action.payload.upperPrice;
    },
    toggleView: ( state, action ) => {
      state.view = action.payload.view;
    },
    clearFilter: ( state, action ) => {
      state.query = "",
      state.sortBy = "cheap",
      state.category = "All categories",
      state.priceRange = [0,2000]
    }
  }
})

export const { 
  handleQuery, 
  switchSortMethod, 
  setCategoryToShow, addToCategoriesList, // category select actions
  setPriceRange, setLowerPrice, setUpperPrice,  // price range actions
  toggleView,
  clearFilter
  }  = filterSlice.actions;
export default filterSlice.reducer;
