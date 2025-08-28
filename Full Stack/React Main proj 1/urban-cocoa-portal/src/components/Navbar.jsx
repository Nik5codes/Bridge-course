import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  const linkStyle = ({ isActive }) => ({
    marginRight: "20px",
    color: isActive ? "#ff0000ff" : "white",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal"
  });

  return (
    <nav style={{ 
      padding: "15px 30px", 
      backgroundColor: "#4E342E", 
      color: "white", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center" 
    }}>
      {/* Left: Brand */}
      <h2 style={{ margin: 0 }}>Urban Cocoa</h2>

      {/* Right: Links */}
      <div>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/products" style={linkStyle}>Products</NavLink>
        <NavLink to="/orders" style={linkStyle}>Orders</NavLink>
        <NavLink to="/login" style={linkStyle}>Login</NavLink>
        <NavLink to="/admin" style={linkStyle}>Admin</NavLink>

        {/* Cart with count */}
        <NavLink to="/cart" style={linkStyle}>
          🛒 Cart ({cart.length})
        </NavLink>
      </div>
    </nav>
  );
}
