import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import ExplorePage from './pages/ExplorePage';
import ProductCard from './ProductCard';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import './index.css';

const HomePage = () => (
  <div className="min-h-screen flex flex-col">
    <HeaderBar />
    {/* Banner */}
    <div className="relative h-screen pt-16 flex items-center justify-center bg-gray-100">
      <img
        src="/paper-bags.jpg"
        alt="NEDU Clothing Banner"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center text-white">
        <img
          src="/logo.png"
          alt="NEDU Clothing Logo"
          className="mx-auto mb-8 w-48"
          style={{
            filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
            borderRadius: "50%",
          }}
        />
        <h1 className="text-5xl font-bold mb-4">NEDU Clothing</h1>
        <p className="text-xl mb-8">Elegancia y frescura en cada prenda</p>
        <div className="space-x-4">
          <a
            href="/explorar"
            className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition duration-300"
          >
            Explorar
          </a>
        </div>
      </div>
    </div>

    {/* Productos Destacados */}
    <div className="container mx-auto py-16 px-4 text-black">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard name="Sudadera Cerezas" price={39.99} imageUrl="/product1.png" />
        <ProductCard name="Camiseta Chad" price={19.99} imageUrl="/product2.png" />
        <ProductCard name="Top sin mangas" price={17.95} imageUrl="/product3.png" />
        <ProductCard name="Tirantes Pou" price={19.99} imageUrl="/product6.png" />
      </div>
    </div>

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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explorar" element={<ExplorePage />} />
      </Routes>
    </Router>
  );
};

export default App;