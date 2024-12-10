import { useState, useEffect } from "react";
import { ShoppingBag, ChevronDown } from "lucide-react";
import HeaderBar from "../HeaderBar"; // Asegúrate de que la ruta sea correcta
import { useLocation } from "react-router-dom"; // Necesario para leer parámetros de búsqueda

// Simulación de datos de productos
const products = [
  { id: 1, name: "Sudadera Messi", price: 39.99, category: "Hombre", imageUrl: "/product4.png" },
  { id: 2, name: "Tirantes", price: 19.99, category: "Mujer", imageUrl: "/product6.png" },
  { id: 3, name: "Sudadera CR7", price: 39.98, category: "Hombre", imageUrl: "/product11.png" },
  { id: 4, name: "Gorra", price: 14.99, category: "Accesorios", imageUrl: "/product7.png" },
  { id: 5, name: "Suéter pou", price: 29.99, category: "Mujer", imageUrl: "/product9.png" },
  { id: 6, name: "Suéter de Seda", price: 29.99, category: "Hombre", imageUrl: "/product12.png" },
  { id: 7, name: "Bolso de Cuero", price: 23.99, category: "Accesorios", imageUrl: "/product8.png" },
  { id: 8, name: "Pantalón Pijama", price: 8.99, category: "Hombre", imageUrl: "/product10.png" },
];

const ProductCard = ({ name, price, imageUrl }) => (
  <div className="bg-white p-4 shadow-md rounded-lg">
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-64 object-cover mb-4 rounded"
    />
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <p className="text-gray-600 mb-4">€{price.toFixed(2)}</p>
    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300 flex items-center justify-center w-full">
      <ShoppingBag className="mr-2" size={18} />
      Comprar
    </button>
  </div>
);

const ExplorePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category") || "Todos";
  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("name");

  // Filtrar y ordenar productos
  const filteredProducts = products
    .filter((product) => category === "Todos" || product.category === category)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 text-black">
        <h1 className="text-4xl font-bold mb-8 text-center">Explorar Productos</h1>

        {/* Filtros de categoría y orden */}
        <div className="flex justify-between mb-8">
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
              <option value="name">Precios</option>
              <option value="price_asc">Precio: Menor a Mayor</option>
              <option value="price_desc">Precio: Mayor a Menor</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;