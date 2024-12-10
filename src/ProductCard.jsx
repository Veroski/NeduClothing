import React, { useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';


const ProductDetailModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              width={600} 
              height={600} 
              className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>
          <div className="p-6 md:w-1/3">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{product.name}</h2>
            </div>
            <p className="text-xl font-semibold mb-4">{product.price.toFixed(2)}€</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button onClick={onClose} className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductCard = ({ name, price, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img
        src={imageUrl}
        alt={name}
        width={300}
        height={300}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{price}€</p>
      <button
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300 flex items-center justify-center w-full"
        onClick={handleButtonClick}
      >
        <ShoppingBag className="mr-2" size={18} />
        Ver detalles
      </button>
      <ProductDetailModal product={{ name, price, imageUrl }} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default ProductCard;
