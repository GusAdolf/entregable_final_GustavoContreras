import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.image} />
      <div>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <div className={styles.quantityControls}>
          <button onClick={() => onDecrease(item.id)} className={styles.button}>
            -
          </button>
          <button onClick={() => onIncrease(item)} className={styles.button}>
            +
          </button>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className={styles.removeButton}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
