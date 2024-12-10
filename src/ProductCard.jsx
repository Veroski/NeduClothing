import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ name, price, imageUrl }) => (
  <div className="bg-white p-4 shadow-md rounded-lg">
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-64 object-cover mb-4 rounded"
    />
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <p className="text-gray-600 mb-4">€{price}</p>
    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300 flex items-center justify-center w-full">
      <ShoppingBag className="mr-2" size={18} />
      Comprar
    </button>
  </div>
);

export default ProductCard;