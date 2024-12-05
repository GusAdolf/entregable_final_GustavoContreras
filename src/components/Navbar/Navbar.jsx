import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Rick & Morty Store</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/product" className={styles.link}>Products</Link>
        </li>
        <li>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </li>
        <li>
          <Link to="/cart" className={styles.link}>Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
