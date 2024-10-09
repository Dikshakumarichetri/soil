// SoilDataForm.js
import React, { useState } from 'react';
import { postSoilData } from '../services/api';

const SoilDataForm = () => {
  const [soilData, setSoilData] = useState({ pH: '', nitrogen: '', phosphorus: '', potassium: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSoilData({ ...soilData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postSoilData(soilData);
    // Handle success response
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="pH" value={soilData.pH} onChange={handleChange} placeholder="pH Level" required />
      <input type="text" name="nitrogen" value={soilData.nitrogen} onChange={handleChange} placeholder="Nitrogen" required />
      <input type="text" name="phosphorus" value={soilData.phosphorus} onChange={handleChange} placeholder="Phosphorus" required />
      <input type="text" name="potassium" value={soilData.potassium} onChange={handleChange} placeholder="Potassium" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SoilDataForm;
