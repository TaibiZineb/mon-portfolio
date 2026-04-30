import { GithubIcon, LinkedinIcon, Mail, PhoneCall} from "lucide-react";
  

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--background)] py-20 text-center from-white px-10">
      <h2 className="text-3xl font-bold text-[var(--accent)] py-5 ">Contact</h2>
       <div className="max-w-3xl mx-auto bg-gradient-to-br from-white to-purple-100 shadow-xl rounded-3xl p-8 space-y-6 text-gray-700">

  {/* Email */}
  <div className="flex items-center gap-4">
    <Mail size={20} className="text-[var(--accent)]" />
    <span className="font-semibold min-w-[90px]">Email :</span>
    <a href="mailto:taibizineb96@gmail.com" className="text-[var(--accent)] break-all">
      taibizineb96@gmail.com
    </a>
  </div>

  {/* Téléphone */}
  <div className="flex items-center gap-4">
    <PhoneCall size={20} className="text-[var(--accent)]" />
    <span className="font-semibold min-w-[90px]">Téléphone :</span>
    <a href="tel:+212652841972" className="text-[var(--accent)]">
      +212 6 52 84 19 72
    </a>
  </div>

  {/* LinkedIn */}
  <div className="flex items-center gap-4">
    <LinkedinIcon size={20} className="text-[var(--accent)]" />
    <span className="font-semibold min-w-[90px]">LinkedIn :</span>
    <a
      href="https://www.linkedin.com/in/zineb-taibi"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--accent)] break-all"
    >
      linkedin.com/in/zineb-taibi
    </a>
  </div>

  {/* GitHub */}
  <div className="flex items-center gap-4">
    <GithubIcon size={20} className="text-[var(--accent)]" />
    <span className="font-semibold min-w-[90px]">GitHub :</span>
    <a
      href="https://github.com/TaibiZineb"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--accent)] break-all"
    >
      github.com/TaibiZineb
    </a>
  </div>

</div>
    </section>
  );
}
