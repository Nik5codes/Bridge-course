// src/pages/Admin/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";

const AdminDashboard = () => {
  return (
    <AdminLayout>
        <div style={{ display: "flex", minHeight: "80vh" }}>
      {/* Sidebar */}
      {/* <aside
        style={{
          width: "220px",
          background: "#f4f4f4",
          padding: "20px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h2>Admin Panel</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/products">Manage Products</Link>
            </li>
            <li>
              <Link to="/admin/orders">Manage Orders</Link>
            </li>
            <li>
              <Link to="/admin/retailers">Manage Retailers</Link>
            </li>
          </ul>
        </nav>
      </aside> */}

      {/* Main content */}
      <main style={{ flex: 1, padding: "20px" }}>
        <h1>Welcome to Admin Dashboard</h1>
        <p>Select an option from the sidebar to manage your portal.</p>
      </main>
    </div>
    </AdminLayout>
    
  );
};

export default AdminDashboard;
