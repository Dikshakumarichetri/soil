// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const metrics = {
    totalSamples: 120,
    averagePH: 6.5,
    averageNitrogen: 15,
    averagePhosphorus: 20,
    averagePotassium: 25,
  };

  return (
    <div className="dashboard">
      <h1>Soil Health Dashboard</h1>
      <div className="metrics">
        {Object.entries(metrics).map(([key, value]) => (
          <div className="metric-card" key={key}>
            <h3>{key.replace(/([A-Z])/g, ' $1')}</h3>
            <p>{value}{key.includes('Average') ? ' mg/kg' : ''}</p>
          </div>
        ))}
      </div>
      <div className="navigation">
        <h2>Quick Links</h2>
        <ul>
          {['soil-data', 'reports', 'settings'].map(link => (
            <li key={link}><Link to={`/${link}`}>View {link.replace('-', ' ')}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
