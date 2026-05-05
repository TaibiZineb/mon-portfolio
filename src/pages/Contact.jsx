import { CheckCircle, GithubIcon, LinkedinIcon, Mail, PhoneCall,  Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <section data-aos="fade-down" id="contact" className="bg-[var(--background)] py-20 px-6">
      <h2 data-aos="slide-right" className="text-3xl font-bold text-center text-[var(--accent)] mb-10">
        Contact
      </h2>

      <div className="pace-y-4 max-w-3xl mx-auto bg-gradient-to-br from-white to-purple-100 shadow-xl rounded-3xl p-8 space-y-6 text-gray-700">
        
        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:translate-x-1 transition">
          <div className="flex items-center gap-2 min-w-[140px]">
            <Mail size={20} className="text-[var(--accent)]" />
            <span className="font-semibold">Email :</span>
          </div>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=taibizineb96@gmail.com" target="_blank" 
          className="text-[var(--accent)] break-all hover:underline"> taibizineb96@gmail.com</a>
        </div>
        {/* Téléphone */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:translate-x-1 transition">
          <PhoneCall size={20} className="text-[var(--accent)]" />
          <span className="font-semibold min-w-[100px]">Téléphone :</span>
          <a href="tel:+212652841972" className="text-[var(--accent)] hover:underline" > +212 6 52 84 19 72
          </a>
        </div>
        {/* LinkedIn */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:translate-x-1 transition">
          <LinkedinIcon size={20} className="text-[var(--accent)]" />
          <span className="font-semibold min-w-[100px]">LinkedIn :</span>
          <a href="https://www.linkedin.com/in/zineb-taibi" target="_blank" rel="noopener noreferrer"
            className="text-[var(--accent)] break-all hover:underline">linkedin.com/in/zineb-taibi
          </a>
        </div>
        {/* GitHub */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:translate-x-1 transition">
          <GithubIcon size={20} className="text-[var(--accent)]" />
          <span className="font-semibold min-w-[100px]">GitHub :</span>
          <a href="https://github.com/TaibiZineb"
            target="_blank" rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"> Voir mes projets
          </a>
        </div>
        {/* CTA */}
       <div className="pt-4 flex justify-center items-center gap-2 text-[var(--accent)]">
        <Sparkles size={18} className="animate-pulse" />
        <p className="text-sm font-medium"> Disponible pour opportunités</p>
      </div>

      </div>
    </section>
  );
}