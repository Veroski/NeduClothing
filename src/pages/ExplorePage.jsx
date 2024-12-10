import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronDown, ShoppingBag } from 'lucide-react'
import HeaderBar from '../HeaderBar'
import { Instagram, Facebook, Twitter } from 'lucide-react';
// Simulación de datos de productos
const products = [
  { id: 1, name: "Sudadera Messi", price: 39.99, category: "NeduSpecials", imageUrl: "/product4.png" },
  { id: 2, name: "Tirantes Pou", price: 19.99, category: "Mujer", imageUrl: "/product6.png" },
  { id: 3, name: "Sudadera CR7", price: 39.98, category: "NeduSpecials", imageUrl: "/product11.png" },
  { id: 4, name: "Gorra Lebron", price: 14.99, category: "Accesorios", imageUrl: "/product7.png" },
  { id: 5, name: "Suéter pou", price: 29.99, category: "NeduSpecials", imageUrl: "/product9.png" },
  { id: 6, name: "Jersey winning son", price: 29.99, category: "Hombre", imageUrl: "/product12.png" },
  { id: 7, name: "Bolso de Cuero", price: 23.99, category: "Accesorios", imageUrl: "/product8.png" },
  { id: 8, name: "Pantalón Pijama", price: 8.99, category: "NeduSpecials", imageUrl: "/product10.png" },
  { id: 9, name: "Sudadera Cerezas", price: 19.99, category: "Mujer", imageUrl: "/product1.png" },
  { id: 10, name: "Camiseta Chad", price: 24.99, category: "Hombre", imageUrl: "/product2.png" },
  { id: 11, name: "Camiseta sin mangas", price: 14.99, category: "Hombre", imageUrl: "/product3.png" },
  { id: 12, name: "Jersey Chill", price: 29.99, category: "NeduSpecials", imageUrl: "/product5.png" },
];


const ProductCard = ({ product, onClick }) => (
  <div className="bg-white p-4 shadow-md rounded-lg cursor-pointer" onClick={() => onClick(product)}>
    <img src={product.imageUrl} alt={product.name} width={300} height={300} className="w-full h-64 object-cover mb-4 rounded" />
    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
    <p className="text-gray-600 mb-4">{product.price.toFixed(2)}€</p>
    <button
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300 flex items-center justify-center w-full"
      >
      <ShoppingBag className="mr-2" size={18} />Ver detalles

    </button>
  </div>
)

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'visible';
    };
  }, [isOpen, onClose]);

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

const ExplorePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category") || "Todos";
  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("name");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filtrar y ordenar productos
  const filteredProducts = products
    .filter((product) => category === "Todos" || product.category === category)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      return 0;
    });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />

      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <header className="bg-gray-900 text-white py-4 px-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold">Explorar Productos</h1>
          </div>
        </header>
        <div className="flex justify-between mb-8" style={{ marginTop: "50px" }}>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Todos</option>
              <option>Hombre</option>
              <option>Mujer</option>
              <option>Accesorios</option>
              <option>NeduSpecials</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown size={20} />
            </div>
          </div>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Nombre</option>
              <option value="price_asc">Precio: Menor a Mayor</option>
              <option value="price_desc">Precio: Mayor a Menor</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={handleProductClick} />
          ))}
        </div>
      </main>
      <ProductDetailModal product={selectedProduct} isOpen={!!selectedProduct} onClose={handleCloseModal} />
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">NEDU Clothing</h3>
              <p>info@neduclothing.com</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 NEDU Clothing. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExplorePage;
