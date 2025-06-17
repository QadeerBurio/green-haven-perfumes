import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from './About.js'
import Contact from './Contact.js'
import CategoryDropdown from '../components/CategoryDropdown'; // ✅ Import it

const Landing = () => {
    const handleCategoryChange = (e) => {
    const selected = e.target.value;
    if (selected) {
      alert(`You selected category: ${selected}`);
      // You can also redirect to /products?category=MAN etc.
    }
  };
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'url(/bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '70vh',
          padding: '2rem',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <motion.h1
          style={{ fontSize: '3rem', marginBottom: '1rem' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Green Haven Perfumes
        </motion.h1>

        <motion.p
          style={{ maxWidth: '700px', fontSize: '1.2rem', marginBottom: '1.5rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <strong>Green Haven</strong> – your premium destination for luxurious and unforgettable fragrances.
          Whether you're looking for something fresh and floral, warm and woody, or bold and exotic, our exclusive range
          has something to suit every scent lover. Elevate your presence with fragrances that speak your style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/products">
            <button style={styles.button}>Get Started</button>
          </Link>
        </motion.div>
      </div>
 {/* ✅ Category Dropdown */}
      <CategoryDropdown onChange={handleCategoryChange} />
      {/* About Section */}
      <section style={styles.section}>
        <About/>
      </section>

      {/* Contact Section */}
      <section style={{ ...styles.section, backgroundColor: '#f2f2f2' }}>
        <Contact/>
      </section>
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: '#6e48aa',
    color: 'white',
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  section: {
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#6e48aa',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto 1rem',
    lineHeight: '1.7',
  }
};

export default Landing;
