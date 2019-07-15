import React from 'react';



const SearchItem = ({ product }) => {
  return (
    <div className="product">
      <img className="productImage" src={product.image}></img>
      <div className="colors">
        {product.colors.map((color, i) => (
          <div style={{ backgroundColor: color }} key={i} className="colorBlock">{color}</div>
        ))}
      </div>
      <div className="review">
        <span className="productRating" style={{width: product.rating + "%"}} >hi</span>
        <span className="numReviews">{product.numRatings}</span>
      </div>
      <div className="productName">{product.name}</div>
      <div className="productPrice">{product.price}</div>
    </div>
  )
}


export default SearchItem;