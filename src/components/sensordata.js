import React, { useState, useEffect } from 'react';

function SensorData() {
  const [sensorData, setSensorData] = useState(null);

  // Function to fetch sensor data from the backend API
  const fetchSensorData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/get-latest-data');  // Your backend URL
      const data = await response.json();
      setSensorData(data);  // Update the state with the sensor data
    } catch (error) {
      console.error("Error fetching sensor data:", error);
    }
  };

  // Fetch sensor data every 5 seconds
  useEffect(() => {
    fetchSensorData();  // Initial fetch
    const interval = setInterval(fetchSensorData, 5000);  // Fetch every 5 seconds
    return () => clearInterval(interval);  // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <h1>Sensor Data</h1>
      {sensorData ? (
        <div>
          <p>Sensor Value: {sensorData.sensor_value}</p>
          <p>Timestamp: {new Date(sensorData.timestamp).toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default SensorData;
