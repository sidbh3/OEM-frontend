import React from "react";
import Image from '../assets/img.jpeg'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={Image} alt={product.name} />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
