import React from 'react';

const SearchItem = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image}></img>
      <span>{product.name}</span>
    </div>
  )
}


export default SearchItem;