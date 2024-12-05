import React, { useEffect, useState } from "react";
import { getCharacters } from "../../services/api";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "./Home.module.css";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters(); 
      setCharacters(data);
      setLoading(false);
    };

    fetchCharacters();
  }, []);

  if (loading) return <p className={styles.loading}>Loading characters...</p>;

  return (
    <section className={styles.homeSection}>
      <h1 className={styles.title}>Rick and Morty Characters</h1>
      <h3>Trabajo Final Gustavo Contreras</h3> <br/>
      <div className={styles.characterGrid}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
};

export default Home;
