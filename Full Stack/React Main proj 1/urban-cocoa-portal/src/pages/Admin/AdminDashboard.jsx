import React from "react";
import { orders, retailers } from "../data/mockData";

const AdminDashboard = () => {
  const totalOrders = orders.length;
  const totalRetailers = retailers.length;
  const revenue = orders.reduce((sum, order) => sum + order.amount, 0);

  // Helper to get retailer name
  const getRetailerName = (id) => {
    const retailer = retailers.find((r) => r.id === id);
    return retailer ? retailer.name : "Unknown";
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="mt-2 text-2xl">{totalOrders}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Total Retailers</h2>
          <p className="mt-2 text-2xl">{totalRetailers}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="mt-2 text-2xl">₹{revenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Retailer</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{getRetailerName(order.retailerId)}</td>
                <td className="p-3">₹{order.amount}</td>
                <td className="p-3">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
