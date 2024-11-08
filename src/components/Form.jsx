import React, { useState } from 'react';
import styles from '../App.module.css';

function Form({ onSubmit }) {
  const [inputAnimal, setInputAnimal] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [error, setError] = useState('');

  // Handlers para los inputs
  const handleAnimalChange = (e) => {
    setInputAnimal(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setInputDescription(e.target.value);
  };

  // Event handler para el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validaciones para los inputs según el enunciado
    if (inputAnimal.trim().length < 3 || inputAnimal.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }
    if (inputDescription.trim().length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    // Llamar a la función onSubmit y pasar los datos validados
    onSubmit({ animal: inputAnimal.trim(), description: inputDescription.trim() });

    // Limpiar el formulario después de un envío exitoso
    setInputAnimal('');
    setInputDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div>
        <input
          type="text"
          placeholder="Ingresa tu animal favorito"
          value={inputAnimal}
          onChange={handleAnimalChange}
          className={styles.input}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Describe por qué te gusta"
          value={inputDescription}
          onChange={handleDescriptionChange}
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.submitButton}>Enviar</button>

      {error && <p className={styles.errorMessage}>{error}</p>}
    </form>
  );
}

export default Form;
