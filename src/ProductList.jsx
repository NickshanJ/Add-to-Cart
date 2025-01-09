import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-list grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 bg-black">
  {products.map(product => (
    <div key={product.id} className="bg-white product flex flex-col justify-between border p-4 rounded shadow">
      <div>
        <img src={product.image} alt={product.title} className="w-full h-[300px] bg-cover bg-center" />
        <h3 className="mt-4 font-bold">{product.title}</h3>
        <div className='flex justify-between items-center mt-auto'>
        <p className="text-lg text-green-600 font-bold font-mono">${product.price}</p>
        <p className="mt-2 font-semibold inline-flex"><FaStar className="text-yellow-400 mt-2 mr-1" />{product.rating.rate}({product.rating.count})</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <button className="w-full bg-[#FEE715FF] text-black active:bg-white active:translate-y-1 transition-transform font-semibold p-2 rounded mt-2" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  ))}
</div>
  );
};

export default ProductList;
