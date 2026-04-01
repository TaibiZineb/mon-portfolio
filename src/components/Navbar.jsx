import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r bg-[#1f2937] text-white shadow-lg  text-white p-4">
    
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl">Zineb<span className="text-orange-400">.dev</span></h1>


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
          <li><HashLink smooth to="/#about" className="hover:text-orange-400">À propos</HashLink></li>
          <li><Link to="/projects" className="hover:text-orange-400">Projects</Link></li>
          <li><Link to="/experience" className="hover:text-orange-400">Expériences</Link></li>
          <li><Link to="/skills" className="hover:text-orange-400">Skills</Link></li>
          <li><HashLink smooth to="/#contact" className="hover:text-orange-400">Contact</HashLink></li>
        </ul>
      </div>

      {/* Menu mobile (s’affiche quand on clique) */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden bg-orange-600 p-4 rounded-lg">
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
