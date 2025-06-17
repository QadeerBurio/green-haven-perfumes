// --- 7. pages/Products.js ---
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Snake Plant', price: 10, category: 'Indoor', img: '/p1.jpeg' },
  { id: 2, name: 'Aloe Vera', price: 15, category: 'Medicinal', img: '/p2.jpeg' },
  { id: 3, name: 'Peace Lily', price: 12, category: 'Flowering', img: '/p3.jpeg' },
  { id: 4, name: 'ZZ Plant', price: 20, category: 'Indoor', img: '/p4.jpeg' },
  { id: 5, name: 'Lavender', price: 18, category: 'Medicinal', img: '/p5.jpeg' },
  { id: 6, name: 'Orchid', price: 25, category: 'Flowering', img: '/p6.jpeg' },
];

const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isInCart = (id) => cart.find(item => item.id === id);

  return (
    <div>
      <h2>Shop Our Plants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(plant => (
          <div key={plant.id} style={{ margin: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
            <img src={plant.img} alt={plant.name} width={100} />
            <h4>{plant.name}</h4>
            <p>${plant.price}</p>
            <button disabled={isInCart(plant.id)} onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
