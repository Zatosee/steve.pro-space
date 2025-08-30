import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 * Simple responsive navigation bar.  Displays your name on the left and a
 * hamburger menu on small screens.  Clicking a link will close the menu.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "hero", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "projects", label: "Projets" },
    { id: "experience", label: "Parcours" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/60 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="/" className="text-2xl font-bold tracking-wide">
          Steve<span className="text-indigo-400">.Space</span>
        </a>
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
        </button>
        <ul
          className={
            `sm:flex space-x-6 font-medium hidden` +
            (open ? " absolute top-full left-0 w-full bg-black/80 sm:bg-transparent sm:static sm:block px-4 py-2 flex-col space-y-2 sm:space-y-0 sm:space-x-6" : "")
          }
        >
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block py-2 sm:py-0 hover:text-indigo-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}