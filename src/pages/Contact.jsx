import { GithubIcon, LinkedinIcon, Mail, PhoneCall} from "lucide-react";
  

export default function Contact() {
  return (
    <section id="contact" className="bg-orange-50 py-20 text-center from-white px-6">
      <h2 className="text-3xl font-bold text-orange-600 py-5 ">Contact</h2>
        <div className="bg-white shadow-xl rounded-3xl p-10 text-center leading-relaxed text-gray-700 flex items-center gap-4 justify-center flex-col">
          <p className="mt-4 flex items-center justify-center gap-2"><Mail size={20} className="text-orange-500" /><span className="font-medium">Email :</span>
          <a href="mailto:taibizineb96@gmail.com" className="text-orange-500 hover:underline">taibizineb96@gmail.com</a></p>
          <p className="mt-4 flex items-center justify-center gap-2"><PhoneCall size={20} className="text-orange-500" /><span className="font-medium">Téléphone :</span>
          <a href="tel:+212652841972" className="text-orange-500 hover:underline">+212 6 52 84 19 72</a></p>

      {/* Lien LinkedIn qui s’ouvre dans un nouvel onglet */}
      <p className="mt-4 flex items-center justify-center gap-2 flex items-center gap-4"><LinkedinIcon size={20} className="text-orange-500" /><span className="font-medium">LinkedIn :</span>
        <a
          href="https://www.linkedin.com/in/zineb-taibi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:underline"
        >
          www.linkedin.com/in/zineb-taibi
        </a>
      </p>

      
      <p className="mt-4 flex items-center justify-center gap-2 flex items-center gap-4"><GithubIcon size={20} className="text-orange-500" /><span className="font-medium">GitHub :</span>
        
        <a
          href="https://github.com/TaibiZineb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:underline"
        >
          github.com/TaibiZineb
        </a>
      </p>
      </div>
    </section>
  );
}
