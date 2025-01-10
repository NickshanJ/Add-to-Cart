import React from 'react';
import { FaStar } from 'react-icons/fa';

const CartModal = ({ cart, removeFromCart, onClose }) => {
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart-modal fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 w-[90%] md:w-[50%] rounded-xl shadow-lg fixed">
        <div className='flex justify-between items-center'>
          <h2 className="text-[20px] font-bold">Cart</h2>
          <button className="text-[35px] text-red-500 active:text-red-300 active:translate-y-1 transition-transform" onClick={onClose}>&times;</button>
        </div>
        {cart.length === 0 ? (
          <p className='text-center font-bold'>No items in the cart</p>
        ) : (
          <>
            <div className="cart-items max-h-60 overflow-y-auto">
              {cart.map(product => (
                <div key={product.id} className="flex cart-item border-b p-[15px] justify-between items-center">
                  <div className='flex items-center'>
                    <img src={product.image} alt={product.title} className="w-[100px] h-[100px] bg-cover bg-center mr-2" />
                    <div className='flex flex-col border-l-2 border-gray-300'>
                    <h3 className="inline-block ml-2">{product.title}</h3>
                    <div className='flex items-center gap-6'>
                    <p className='inline-flex ml-3'><FaStar className="text-yellow-400 mt-1 mr-1" />{product.rating.rate}</p>
                    <p className="inline-block ml-2 text-green-600 font-bold font-mono">${product.price}</p>
                    </div>
                    </div>
                  </div>
                  <button className="bg-red-500 text-white  active:bg-red-300 active:translate-y-1 transition-transform px-3 py-2 rounded ml-2" onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <h3 className="font-bold mt-2">Total: ${totalAmount.toFixed(2)}</h3>
              <button className='py-2 px-3 font-bold rounded-xl bg-[#FEE715FF] active:bg- active:translate-y-1 transition-transform'>Place Your Order</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
