import React from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../services/api";
import styles from "./CharacterDetails.module.css";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = React.useState(null);

  React.useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacterById(id);
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <p>Loading character details...</p>;

  return (
    <div className={styles.characterDetails}>
      <h1>{character.name}</h1>
      <img
        src={character.image}
        alt={character.name}
        className={styles.characterImage}
      />
      <div className={styles.characterInfo}>
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
