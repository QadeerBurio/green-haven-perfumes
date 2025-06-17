import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'; // Make sure you have react-icons installed

const Header = () => {
  const totalItems = useSelector(state =>
    state.cart.items.reduce((a, i) => a + i.quantity, 0)
  );

  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>Green Haven</h2>
      <nav style={styles.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        {/* Cart section with icon */}
        <Link to="/cart" style={{ ...styles.link, ...styles.cart }}>
          <FaShoppingCart style={{ marginRight: '5px' }} />
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} style={styles.link}>
    {children}
  </Link>
);

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'linear-gradient(to right, #6e48aa, #9d50bb)',
    color: 'white',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  cart: {
    marginLeft: '2rem',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  }
};

export default Header;
