import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart, decreaseQuantity, addToCart } =
    useCart();

  return (
    <section className={styles.cartSection}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p> Tu carrito de personas de rick and morty esta vacio!</p>
      ) : (
        <div className={styles.cartGrid}>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={addToCart}
              onDecrease={decreaseQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <button onClick={clearCart} className={styles.clearButton}>
          Clear Cart
        </button>
      )}
    </section>
  );
};

export default Cart;
