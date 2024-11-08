import React, { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import styles from './App.module.css';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  // Función para manejar el envío del formulario
  const handleFormSubmit = (data) => {
    // Limpiar cualquier tarjeta previa antes de asignar nuevos datos
    setSubmittedData(null);
    setTimeout(() => {
      setSubmittedData(data);
    }, 0);
  };

  return (
    <div className={styles.app}>
      <h1>Parcial Gustavo Contreras</h1>
      <h2>Elige tu animal favorito ej Perro</h2>
      <Form onSubmit={handleFormSubmit} />

      {submittedData && (
        <Card animal={submittedData.animal} description={submittedData.description} />
      )}
    </div>
  );
}

export default App;
