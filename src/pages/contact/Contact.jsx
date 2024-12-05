import React, { useState } from "react";
import styles from "./Contact.module.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Simulación de envío
    setSubmitted(true);

    // Limpiar formulario después de enviar
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className={styles.contactSection}>
      <h1>Contact Us</h1>
      {submitted && <p className={styles.successMessage}>Thank you for your message!</p>}
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          rows="5"
          required
        />

        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
