// ✅ Navbar.tsx modifiée pour style angélique/flou
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/30 backdrop-blur-md text-gray-900 z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="#hero" className="text-xl font-bold hover:text-sky-700">
          Steve’s Portfolio
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#projects" className="hover:text-sky-700">Projects</a>
          <a href="#contact" className="hover:text-sky-700">Contact</a>
        </div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden focus:outline-none text-2xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white/90 px-4 pb-4 shadow">
          <a href="#projects" className="block text-gray-800 py-2 hover:text-sky-700" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="block text-gray-800 py-2 hover:text-sky-700" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;