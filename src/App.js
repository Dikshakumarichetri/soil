import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SoilDataForm from './components/SoilDataForm';
import SoilDataList from './components/SoilDataList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './components/Team';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}  />
          <Route path="/SoilDataForm" component={SoilDataForm} />
          <Route path="/SoilDataList" component={SoilDataList} />
          <Route path="/our-team" element={<Team />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
