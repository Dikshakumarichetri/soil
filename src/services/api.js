// services/api.js
import axios from 'axios';

const API_URL = 'http://your-api-url.com/api';

export const fetchSoilData = () => {
  return axios.get(`${API_URL}/soil-data`);
};

export const postSoilData = (data) => {
  return axios.post(`${API_URL}/soil-data`, data);
};
