export const checkItemIfIncludes = ( { title, brand, description }, fragment) => {

  if ( title.toLowerCase().includes(fragment.toLowerCase()) ) return true;
  if ( brand.toLowerCase().includes(fragment.toLowerCase()) ) return true;
  if ( description.toLowerCase().includes(fragment.toLowerCase()) ) return true;

  return false;
}

export const sortByMethod = ( method ) => {
  if ( method === "cheap")     return (a, b) => a["price"] - b["price"];
  if ( method === "expensive") return (a, b) => b["price"] - a["price"];
  if ( method === "toprated")  return (a, b) => b["rating"] - a["rating"];
}

export const checkItemCategory = ( { category }, selectedCategory ) => {
  if (selectedCategory === "All categories") {
    return true;  
  } else if (category === selectedCategory) {
    return true;
  } else {
    return false;
  }
}

export const checkPriceRange = ( { price }, priceRange ) => {
  return price > priceRange[0] && price < priceRange[1];
} 

export const loadFilteredProducts = (products, { query, category, sortBy, priceRange }) => {
  return (
    products
      .filter(item => checkItemIfIncludes(item, query))
      .filter(item => checkPriceRange(item, priceRange))
      .filter(item => checkItemCategory(item, category))
      .sort(sortByMethod(sortBy))
  )
}

export const calculatePages =( array, itemsInPage ) => {
  return (
    array.length % itemsInPage === 0 
    ? array.length/itemsInPage 
    : Math.floor(array.length/itemsInPage) + 1
  )
}