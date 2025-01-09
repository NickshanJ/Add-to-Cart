import React, { useState } from 'react';
import ProductList from './ProductList';
import CartModal from './CArtModal';
import CartIcon from './CartIcon';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <nav className="bg-black text-white flex justify-between items-center">
        <img className='ml-6 w-[130px] h-[130px]' src={logo} alt="Fake Store" />
        <i className='mr-6'><CartIcon itemCount={cart.length} onClick={() => setShowCart(true)} /></i>
      </nav>
      <ProductList addToCart={addToCart} />
      {showCart && (
        <CartModal cart={cart} removeFromCart={removeFromCart} onClose={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default App;
