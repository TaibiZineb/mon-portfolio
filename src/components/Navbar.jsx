import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 
export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">Mon Portfolio</h1>
      <ul className="flex gap-6">
        
        <li><Link to="/">Accueil</Link></li>
         {/* Scroll vers la section À propos */}
        <li><HashLink smooth to="/#about" className="hover:underline">À propos</HashLink></li>
      
        
    
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experience">Expériences</Link></li>
        <li><Link to="/skills">Skill</Link></li>
        
        {/* Scroll vers la section Contact */}
        <li><HashLink smooth to="/#contact" className="hover:underline">Contact</HashLink></li>
      </ul>
    </nav>
  );
}
