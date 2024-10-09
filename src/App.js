import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SoilDataForm from './components/SoilDataForm';
import SoilDataList from './components/SoilDataList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />}  />
          <Route path="/SoilDataForm" component={SoilDataForm} />
          <Route path="/SoilDataList" component={SoilDataList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
