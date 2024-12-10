import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

const HeaderBar = () => (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center">
                <img
                    src="/logo.png"
                    alt="NEDU Clothing Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                />
            </a>
            <nav className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-600 hover:text-black transition duration-300">Inicio</a>
                <a href="/explorar" className="text-gray-600 hover:text-black transition duration-300">Explorar</a>
                <a href={`/explorar?category=Hombre`} className="text-gray-600 hover:text-black transition duration-300">Hombre</a>
                <a href={`/explorar?category=Mujer`} className="text-gray-600 hover:text-black transition duration-300">Mujer</a>
                <a href={`/explorar?category=Accesorios`} className="text-gray-600 hover:text-black transition duration-300">Accesorios</a>

            </nav>
            <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-white transition duration-300">
                    <ShoppingBag size={24} />
                </button>
                <button className="md:hidden text-gray-600 hover:text-black transition duration-300">
                    <Menu size={24} />
                </button>
            </div>
        </div>
    </header>
);

export default HeaderBar;