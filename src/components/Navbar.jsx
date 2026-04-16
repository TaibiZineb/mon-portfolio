import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { Code2, Laptop, MonitorCheck } from "lucide-react";

import "../index.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activeClass = "text-[var(--accent-light)] font-semibold";
  const normalClass = "hover:text-[var(--accent-light)] transition";

  return (
    <nav className="bg-[var(--primary)] shadow-lg  text-white p-4">
    
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MonitorCheck  size={27} className="text-[var(--accent)]" />
          <Code2  size={27} className="text-[var(--accent)]" />
          <h1 className="font-bold text-2xl">Zineb<span className="text-[var(--accent)]">.dev</span></h1>
        </div>


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
          <li><Link to="/"className={ location.pathname === "/" && !location.hash? activeClass: normalClass }> Accueil </Link></li>
          <li><HashLink smooth to="/#about" className={ location.pathname === "/" && location.hash === "#about"? activeClass: normalClass }> À propos </HashLink></li>
          <li><HashLink smooth to="/#formations" className={ location.pathname === "/" && location.hash === "#formations"? activeClass: normalClass }> Formations </HashLink></li>

          <li><Link to="/projects" className={location.pathname === "/projects" ? activeClass : normalClass}>Projects</Link></li>
          <li><Link to="/experience" className={location.pathname === "/experience" ? activeClass : normalClass}>Expériences </Link></li>
          <li><Link to="/skills" className={location.pathname === "/skills" ? activeClass : normalClass}>Compétences</Link></li>
          <li><HashLink smooth to="/#contact" className={ location.pathname === "/" && location.hash === "#contact" ? activeClass : normalClass}>Contact</HashLink></li>
        </ul>
      </div>

      {/* Menu mobile */}
{isOpen && (
  <ul className="md:hidden mt-4 bg-[#1f2937] backdrop-blur-md bg-[#1f2937]/95 text-white p-6 rounded-2xl shadow-lg flex flex-col gap-5 transition-all duration-300">

    <li>
      <Link 
        to="/" 
        className="block hover:text-[var(--accent-light)] transition"
        onClick={() => setIsOpen(false)}
      >
        Accueil
      </Link>
    </li>

    <li>
      <HashLink 
        smooth 
        to="/#about" 
        className="block hover:text-[var(--accent-light)] transition"
        onClick={() => setIsOpen(false)}
      >
        À propos
      </HashLink>
    </li>

    <li>
      <Link 
        to="/projects" 
        className="block hover:text-[var(--accent-light)] transition"
        onClick={() => setIsOpen(false)}
      >
        Projects
      </Link>
    </li>

    <li>
      <Link 
        to="/experience" 
        className="block hover:text-[var(--accent-light)] transition"
        onClick={() => setIsOpen(false)}
      >
        Expériences
      </Link>
    </li>

    <li>
      <Link 
        to="/skills" 
        className="block hover:text-[var(--accent-light)] transition"
        onClick={() => setIsOpen(false)}
      >
        Skills
      </Link>
    </li>

    <li>
      <HashLink 
        smooth 
        to="/#contact" 
        className="block hover:text-[var(--accent-light)] transition"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </HashLink>
    </li>

  </ul>
)}
    </nav>
  );
}
