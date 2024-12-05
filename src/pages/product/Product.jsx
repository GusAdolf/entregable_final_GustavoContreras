import React, { useState, useEffect } from "react";
import { getCharacters } from "../../services/api";
import { useCart } from "../../context/CartContext";
import styles from "./Product.module.css";

const Product = () => {
  const { addToCart, feedback } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getCharacters();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <p className={styles.loading}>Loading products...</p>;

  return (
    <section className={styles.productSection}>
      <h1 className={styles.title}>Rick and Morty Products</h1>
      {feedback && <div className={styles.feedback}>{feedback}</div>}
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div className={styles.productCard} key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productPrice}>Price: ${product.price}</p>
            <button
              className={styles.addButton}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
