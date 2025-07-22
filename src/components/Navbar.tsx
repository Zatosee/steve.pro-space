// file: components/Navbar.tsx
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full backdrop-blur bg-black/60 text-gray-100 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Site Title / Logo */}
        <a href="#hero" className="text-xl font-bold hover:text-white">
          Steve’s Portfolio
        </a>
        {/* Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-8">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        {/* Mobile menu button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden focus:outline-none text-2xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-4 pb-4">
          <a href="#projects" 
             className="block text-gray-100 py-2 hover:text-white"
             onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" 
             className="block text-gray-100 py-2 hover:text-white"
             onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
