import React from 'react';
import styles from '../Card.module.css';
import dogIcon from '../assets/dog.png';
import catIcon from '../assets/cat.png';
import fishIcon from '../assets/fish.png';
import birdIcon from '../assets/bird.png';
import bearIcon from '../assets/bear.png';

function Card({ animal, description }) {
  // Función para obtener el ícono del animal si es conocido
  const getAnimalIcon = (animalName) => {
    const normalizedAnimal = animalName.trim().toLowerCase();

    switch (normalizedAnimal) {
      case 'perro':
      case 'perros':
        return <img src={dogIcon} alt="Perro" className={styles.animalIcon} />;
      case 'gato':
      case 'gatos':
        return <img src={catIcon} alt="Gato" className={styles.animalIcon} />;
      case 'pez':
      case 'peces':
        return <img src={fishIcon} alt="Pez" className={styles.animalIcon} />;
      case 'pájaro':
      case 'pájaros':
      case 'ave':
      case 'aves':
        return <img src={birdIcon} alt="Pájaro" className={styles.animalIcon} />;
      case 'oso':
      case 'osos':
        return <img src={bearIcon} alt="Oso" className={styles.animalIcon} />;
      default:
        return null; // Si no es un animal conocido, no se muestra ícono
    }
  };

  return (
    <div className={styles.card}>
      <h2>Tu Animal Favorito es: {animal} !</h2>
      {getAnimalIcon(animal)}
      <p>¿Por qué te gusta?:</p>
      <div className={styles.colorBox}>
        {description}
      </div>
    </div>
  );
}

export default Card;
