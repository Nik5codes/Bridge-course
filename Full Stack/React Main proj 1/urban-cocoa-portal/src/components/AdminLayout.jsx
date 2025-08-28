import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingCart, Users } from "lucide-react";

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "240px",
          background: "#37260fff", // pure dark
          color: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ marginBottom: "30px", fontSize: "20px", fontWeight: "bold" }}>
          Admin Panel
        </h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <NavLink
                to="/admin/dashboard"
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  color: isActive ? "#111" : "#fff",
                  background: isActive ? "#fff" : "transparent",
                  textDecoration: "none",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "0.3s",
                })}
              >
                <LayoutDashboard size={18} /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/products"
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  color: isActive ? "#111" : "#fff",
                  background: isActive ? "#fff" : "transparent",
                  textDecoration: "none",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "0.3s",
                })}
              >
                <Package size={18} /> Manage Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/orders"
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  color: isActive ? "#111" : "#fff",
                  background: isActive ? "#fff" : "transparent",
                  textDecoration: "none",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "0.3s",
                })}
              >
                <ShoppingCart size={18} /> Manage Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/retailers"
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  color: isActive ? "#111" : "#fff",
                  background: isActive ? "#fff" : "transparent",
                  textDecoration: "none",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "0.3s",
                })}
              >
                <Users size={18} /> Manage Retailers
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, background: "#f4f4f4" }}>
        {/* Topbar */}
        <header
          style={{
            background: "#fff",
            padding: "15px 20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h1 style={{ margin: 0 }}>Urban Cocoa Admin</h1>
        </header>

        {/* Page Content */}
        <div style={{ padding: "20px" }}>{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
