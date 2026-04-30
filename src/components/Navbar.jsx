import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Code2, MonitorCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const location = useLocation();

 
  const normalClass = "hover:text-[var(--accent-light)] transition dark:hover:text-[var(--violet)]";
  const activeClass = "text-[var(--accent)] dark:text-[var(--violet)] font-semibold";

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-[var(--primary)] shadow-lg text-white p-4 dark:text-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <MonitorCheck size={27} className="text-[var(--accent)]" />
          <Code2 size={27} className="text-[var(--accent)]" />
          <h1 className="font-bold text-2xl">
            Zineb<span className="text-[var(--accent)]">.dev</span>
          </h1>
        </div>

        <ul className="hidden md:flex gap-6">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" && !location.hash ? activeClass : normalClass}
            >
              Accueil
            </Link>
          </li>

          <li>
            <HashLink
              smooth
              to="/#about"
              className={location.pathname === "/" && location.hash === "#about" ? activeClass : normalClass}
            >
              À propos
            </HashLink>
          </li>

          <li>
            <HashLink
              smooth
              to="/#formations"
              className={location.pathname === "/" && location.hash === "#formations" ? activeClass : normalClass}
            >
              Formations
            </HashLink>
          </li>

          <li>
            <Link to="/projects" className={location.pathname === "/projects" ? activeClass : normalClass}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="/experience" className={location.pathname === "/experience" ? activeClass : normalClass}>
              Expériences
            </Link>
          </li>

          <li>
            <Link to="/skills" className={location.pathname === "/skills" ? activeClass : normalClass}>
              Compétences
            </Link>
          </li>

          <li>
            <HashLink
              smooth
              to="/#contact"
              className={location.pathname === "/" && location.hash === "#contact" ? activeClass : normalClass}
            >
              Contact
            </HashLink>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${
              darkMode ? "bg-[var(--accent)]" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 bg-[#1f2937]/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-lg flex flex-col gap-5">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><HashLink smooth to="/#about" onClick={() => setIsOpen(false)}>À propos</HashLink></li>
          <li><HashLink smooth to="/#formations" onClick={() => setIsOpen(false)}>Formations</HashLink></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/experience" onClick={() => setIsOpen(false)}>Expériences</Link></li>
          <li><Link to="/skills" onClick={() => setIsOpen(false)}>Compétences</Link></li>
          <li><HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>Contact</HashLink></li>
        </ul>
      )}
    </nav>
  );
}