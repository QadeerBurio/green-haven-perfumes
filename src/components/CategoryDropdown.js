import React, { useState } from 'react';

const categories = [
  { name: 'MAN', image: '/p1.jpeg' },
  { name: 'WOMEN', image: '/p2.jpeg' },
  { name: 'BOTH', image: '/p3.jpeg' },
  { name: 'BODY', image: '/p4.jpeg' }
];

const CategoryDropdown = ({ onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (category) => {
    setOpen(false);
    onSelect(category.name);
  };

  return (
    <div style={styles.wrapper}>
      <button onClick={() => setOpen(!open)} style={styles.button}>
        Select Category ▼
      </button>
      {open && (
        <div style={styles.dropdown}>
          {categories.map((cat) => (
            <div key={cat.name} style={styles.item} onClick={() => handleSelect(cat)}>
              <img src={cat.image} alt={cat.name} style={styles.image} />
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'relative',
    margin: '2rem auto',
    textAlign: 'center'
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#6e48aa',
    color: 'white',
    cursor: 'pointer'
  },
  dropdown: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '0.5rem',
    zIndex: 999,
    width: '250px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  image: {
    width: '40px',
    height: '40px',
    borderRadius: '6px',
    marginRight: '0.8rem'
  }
};

export default CategoryDropdown;
