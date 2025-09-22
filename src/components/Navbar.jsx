import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Mon Portfolio</h1>

        {/* Bouton hamburger (mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icône hamburger */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/">Accueil</Link></li>
          <li><HashLink smooth to="/#about" className="hover:underline">À propos</HashLink></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Expériences</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><HashLink smooth to="/#contact" className="hover:underline">Contact</HashLink></li>
        </ul>
      </div>

      {/* Menu mobile (s’affiche quand on clique) */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden bg-blue-600 p-4 rounded-lg">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><HashLink smooth to="/#about" className="hover:underline" onClick={() => setIsOpen(false)}>À propos</HashLink></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/experience" onClick={() => setIsOpen(false)}>Expériences</Link></li>
          <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li><HashLink smooth to="/#contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</HashLink></li>
        </ul>
      )}
    </nav>
  );
}
