// --- 6. pages/Landing.js ---
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{ backgroundImage: 'url(/bg.jpeg)', height: '100vh', padding: '2rem' }}>
      <h1>Green Haven</h1>
      <p>Welcome to Green Haven – Your go-to place for beautiful houseplants!</p>
      <Link to="/products"><button>Get Started</button></Link>
    </div>
  );
};

export default Landing;