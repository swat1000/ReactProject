import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Landingpage.css'; 
import ProductPage from './Product';

export default function LandingPage() {
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProduct(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className='container'>
      {selectedProduct ? (
        <ProductPage product={selectedProduct} />
      ) : (
        product.length !== 0 ? (
          product.map((element) => (
            <div key={element.id}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={element.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.description}</p>
                </div>
                <ul className="list-group">
                  <li className="list-group-item">Price: {element.price}</li>
                </ul>
                <div className="card-body">
                  <button type="button" className="btn btn-primary mx-2">Add to Cart</button>
                  <button type="button" className="btn btn-primary" onClick={() => handleViewProduct(element)}>View Product</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Data Available</div>
        )
      )}
    </div>
  );
}
