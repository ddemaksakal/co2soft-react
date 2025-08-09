import React from 'react';
// React Router için gerekli importlar 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navi from './Navi';
import ActivitiesTable from './ActivitiesTable';
import ActivityForm from './ActivityForm';
import './App.css';

const Home = () => (
  <div style={{ padding: 20 }}>
    {/* Anasayfa boş */}
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="main-bg">
        <Navi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<ActivitiesTable />} />
          <Route path="/activities/new" element={<ActivityForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
