import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = ({ itemCount, onClick }) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <FaShoppingCart size={32} />
      {itemCount > 0 && (
        <span className="absolute top-0 -right-2 inline-flex items-center justify-center h-5 w-5 text-xs font-bold leading-none text-white bg-teal-600 rounded-full">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
