const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/character`);
    if (!response.ok) throw new Error("Failed to fetch characters");
    const data = await response.json();

    // Generar precios aleatorios solo una vez
    const charactersWithPrices = data.results.map((character) => ({
      ...character,
      price: Math.floor(Math.random() * 100) + 1,
    }));

    return charactersWithPrices;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    if (!response.ok) throw new Error("Failed to fetch character details");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching character details:", error);
    return null;
  }
};
