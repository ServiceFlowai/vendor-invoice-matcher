import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', matched: 400, unmatched: 240 },
  { name: 'Feb', matched: 300, unmatched: 139 },
  { name: 'Mar', matched: 200, unmatched: 980 },
  { name: 'Apr', matched: 278, unmatched: 390 },
  { name: 'May', matched: 189, unmatched: 480 },
  { name: 'Jun', matched: 239, unmatched: 380 },
  { name: 'Jul', matched: 349, unmatched: 430 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="text-2xl font-bold mb-4">Invoice Matching Dashboard</h1>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="matched" stroke="#8884d8" />
        <Line type="monotone" dataKey="unmatched" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Dashboard;