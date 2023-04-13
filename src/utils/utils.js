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

export const checkItemBrand = ( { brand }, selectedBrand ) => {
  if (selectedBrand === "All brands") {
    return true;  
  } else if (brand === selectedBrand) {
    return true;
  } else {
    return false;
  }
}

export const checkPriceRange = ( { price }, priceRange ) => {
  return price > priceRange[0] && price < priceRange[1];
} 