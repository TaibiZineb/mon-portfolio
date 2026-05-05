import { GithubIcon, LinkedinIcon, Mail, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--background)] py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-[var(--accent)] mb-10">
        Contact
      </h2>

      <div className="max-w-3xl mx-auto bg-gradient-to-br from-white to-purple-100 shadow-xl rounded-3xl p-8 space-y-6 text-gray-700">

        {/* Email */}
        <div className="flex items-center gap-4 hover:translate-x-1 transition">
          <Mail size={20} className="text-[var(--accent)]" />
          <span className="font-semibold min-w-[100px]">Email :</span>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=taibizineb96@gmail.com"
          target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline"> taibizineb96@gmail.com</a>
        </div>
        {/* Téléphone */}
        <div className="flex items-center gap-4 hover:translate-x-1 transition">
          <PhoneCall size={20} className="text-[var(--accent)]" />
          <span className="font-semibold min-w-[100px]">Téléphone :</span>
          <a
            href="tel:+212652841972"
            className="text-[var(--accent)] hover:underline"
          >
            +212 6 52 84 19 72
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 hover:translate-x-1 transition">
          <LinkedinIcon size={20} className="text-[var(--accent)]" />
          <span className="font-semibold min-w-[100px]">LinkedIn :</span>
          <a
            href="https://www.linkedin.com/in/zineb-taibi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] break-all hover:underline"
          >
            linkedin.com/in/zineb-taibi
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4 hover:translate-x-1 transition">
          <GithubIcon size={20} className="text-[var(--accent)]" />
          <span className="font-semibold min-w-[100px]">GitHub :</span>
          <a
            href="https://github.com/TaibiZineb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            Voir mes projets
          </a>
        </div>

        {/* CTA */}
        <div className="pt-4 text-center">
          <p className="text-sm text-[var(--accent)]">
            Disponible pour opportunités 
          </p>
        </div>

      </div>
    </section>
  );
}