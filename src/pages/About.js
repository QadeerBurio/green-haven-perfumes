// --- src/pages/About.js ---
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={styles.container}
    >
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to <strong>Green Haven Perfumes</strong> – where fragrance meets elegance. 
        Our mission is to provide luxury scents at affordable prices. Every bottle is crafted 
        with care, bringing you long-lasting, unique fragrances that leave a lasting impression.
      </p>
      <p style={styles.paragraph}>
        Based in Pakistan, we serve customers globally with high-quality perfumes that inspire confidence and style. 
        Whether you're looking for floral, musky, or exotic notes — we have the perfect scent for you.
      </p>
    </motion.div>
  );
};

const styles = {
  container: {
    padding: '3rem',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    background: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  heading: {
    fontSize: '2.5rem',
    color: '#6e48aa',
    marginBottom: '1rem'
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#333',
    lineHeight: '1.8',
    marginBottom: '1.5rem'
  }
};

export default About;
