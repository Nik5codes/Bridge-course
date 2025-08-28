import React, { useState } from "react";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Dark Choco Chips", price: "₹240/kg" },
    { id: 2, name: "White Compound", price: "₹190/kg" },
    { id: 3, name: "Cocoa Powder", price: "₹240/kg" },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price) return;
    setProducts([
      ...products,
      { id: Date.now(), name: newProduct.name, price: newProduct.price },
    ]);
    setNewProduct({ name: "", price: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (id, field, value) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      )
    );
  };

  return (
    <div className="manage-container">
      <h2 className="title">Manage Products</h2>

      {/* Add Product Form */}
      <div className="form-section">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      {/* Product List */}
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <input
                  type="text"
                  value={p.name}
                  onChange={(e) => handleEdit(p.id, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={p.price}
                  onChange={(e) => handleEdit(p.id, "price", e.target.value)}
                />
              </td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(p.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
