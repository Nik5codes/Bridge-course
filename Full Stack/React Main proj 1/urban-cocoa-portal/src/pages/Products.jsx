import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Products.css";

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Dark Choco Chips", price: 240 },
    { id: 2, name: "White Choco Chips", price: 190 },
    { id: 3, name: "Cocoa Powder", price: 260 },
  ];

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
