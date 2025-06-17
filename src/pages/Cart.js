// --- 8. pages/Cart.js ---
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, remove } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Shopping Cart</h2>
      <p>Total items: {totalCount}</p>
      <p>Total cost: ${total}</p>
      {items.map(item => (
        <div key={item.id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
          <img src={item.img} alt={item.name} width={100} />
          <h4>{item.name}</h4>
          <p>Unit price: ${item.price}</p>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <span> {item.quantity} </span>
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <button onClick={() => dispatch(remove(item.id))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
};

export default Cart;
