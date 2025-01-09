import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = ({ itemCount, onClick }) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      {itemCount > 0 && (
        <span className="absolute top-0 -right-2 inline-flex items-center justify-center h-5 w-5 text-xs font-bold leading-none text-white bg-teal-600 rounded-full">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;