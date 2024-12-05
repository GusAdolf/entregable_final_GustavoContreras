import React from "react";
import { Link } from "react-router-dom";
import styles from "./CharacterCard.module.css"; 

const CharacterCard = ({ character }) => {
  return (
    <div className={styles.card}>
      <img
        src={character.image}
        alt={character.name}
        className={styles.image}
      />
      <h3 className={styles.name}>{character.name}</h3>
      <Link to={`/character/${character.id}`} className={styles.detailsLink}>
        View Details
      </Link>
    </div>
  );
};

export default CharacterCard;
