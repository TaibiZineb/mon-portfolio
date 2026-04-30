
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">

        {/* Nom */}
        <h3 className="text-xl font-semibold text-white">
          TAIBI <span className="text-[var(--accent)]">Zineb</span>
        </h3>

        {/* Icônes sociales */}
        <div className="flex justify-center gap-6">
          <a href="https://github.com/TaibiZineb" className="hover:text-[var(--accent)] transition">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/zineb-taibi" className="hover:text-[var(--accent)] transition">
            <Linkedin size={22} />
          </a>
          <a href="mailto:taibizineb96@gmail.com" className="hover:text-[var(--accent)] transition">
            <Mail size={22} />
          </a>
        </div>

        {/* Ligne */}
        <div className="w-16 h-1 bg-[var(--background)] mx-auto rounded-full dark:bg-[var(--accent)]"></div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} TAIBI Zineb. Tous droits réservés.
        </p>

      </div>
    </footer>
  );
}