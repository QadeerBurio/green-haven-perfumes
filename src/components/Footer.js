// --- 6. components/Footer.js ---
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2e7d32', color: 'white', padding: '1rem', textAlign: 'center', marginTop: '2rem' }}>
      <p>&copy; {new Date().getFullYear()} Green Haven. All rights reserved.</p>
    </footer>
  );
};

export default Footer;