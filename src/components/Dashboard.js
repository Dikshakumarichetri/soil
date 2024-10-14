import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2'; // Importing Bar chart component from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; // Importing necessary components

import './Dashboard.css'; // Ensure your CSS is included

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Example data
  const metrics = {
    pH: 6.5,
    temperature: 22, // Example temperature in degrees Celsius
    moisture: 30, // Example moisture level in percentage
  };

  // Data for the chart
  const data = {
    labels: ['pH Level', 'Temperature (°C)', 'Moisture (%)'],
    datasets: [
      {
        label: 'Soil Health Metrics',
        data: [metrics.pH, metrics.temperature, metrics.moisture],
        backgroundColor: ['#4bc0c0', '#ff6384', '#ffce56'],
        borderColor: ['#36a2eb', '#ff6384', '#ffce56'],
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return (
    <div className="dashboard">
      <h1>Soil Health Dashboard</h1>
      <div className="metrics">
        {/* Chart Display */}
        <div className="metric-card">
          <h3>Soil Health Metrics</h3>
          <Bar data={data} options={options} />
        </div>
      </div>
     
    </div>
  );
};

export default Dashboard;
