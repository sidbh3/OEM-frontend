import React from "react";
import ProductCard from "./ProductCard";
import './ProductGrid.css'
import Image from '../assets/img.jpeg'

const products = [
  {
    image: {Image},
    name: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: "85.5",
  },
  {
    image: {Image},
    name: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: "85.5",
  },
  {
    image: {Image},
    name: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: "85.5",
  },
  {
    image: {Image},
    name: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: "85.5",
  },
  {
    image: {Image},
    name: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: "85.5",
  },
  {
    image: {Image},
    name: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: "85.5",
  },
  {
    image: {Image},
    name: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: "85.5",
  },
  {
    image: {Image},
    name: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: "85.5",
  },
];

const ProductGrid = () => {
  return (
    
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
