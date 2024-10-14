import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SoilDataForm from './components/SoilDataForm';
import SoilDataList from './components/SoilDataList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './components/Team';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}  />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-team" element={<Team />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
