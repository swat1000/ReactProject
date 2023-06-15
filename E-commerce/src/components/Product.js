import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function ProductPage({ product }) {
    const [productPage, setProductPage] = useState([]);
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button type="button" className="btn btn-primary mx-2">Add to Cart</button>
      
    </div>
  );
}

export default ProductPage;
