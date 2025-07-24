import React, { useState } from 'react';
import Navi from './Navi';
import ActivitiesTable from './ActivitiesTable';
import ActivityForm from './ActivityForm';
import './App.css';

const App = () => {
  // Formun açık olup olmadığını tutan state
  const [showForm, setShowForm] = useState(false);

  // "Yeni Aktivite" butonuna tıklanınca form açılsın
  const handleNewActivity = () => setShowForm(true);

  // Formdan geri dönünce tabloya dön
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="main-bg">
      <Navi />
      {/* Eğer form açıksa formu, değilse tabloyu göster */}
      {showForm ? (
        <ActivityForm onClose={handleCloseForm} />
      ) : (
        <ActivitiesTable onNewActivity={handleNewActivity} />
      )}
    </div>
  );
};

export default App;