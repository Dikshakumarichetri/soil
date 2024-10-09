// SoilDataList.js
import React, { useEffect, useState } from 'react';
import { fetchSoilData } from '../services/api';

const SoilDataList = () => {
  const [soilDataList, setSoilDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSoilData = async () => {
      try {
        const { data } = await fetchSoilData();
        setSoilDataList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getSoilData();
  }, []);

  const handleEdit = async (id) => {
    // Implement edit functionality
  };
  const handleDelete = async (id) => {
    // Implement delete functionality
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Soil Health Data</h2>
      {soilDataList.length === 0 ? (
        <p>No soil data available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>pH Level</th>
              <th>Nitrogen</th>
              <th>Phosphorus</th>
              <th>Potassium</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {soilDataList.map(({ id, pH, nitrogen, phosphorus, potassium }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{pH}</td>
                <td>{nitrogen}</td>
                <td>{phosphorus}</td>
                <td>{potassium}</td>
                <td>
                  <button onClick={() => handleEdit(id)}>Edit</button>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SoilDataList;
