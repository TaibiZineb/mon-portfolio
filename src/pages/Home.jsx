  import { Code, Database, ShieldCheck, Layers, Monitor, Hand, Download, FileText } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="flex flex-col justify-center items-center px-3 py-10 bg-[var(--background)]">
      <div className="bg-gradient-to-br from-white to-purple-100 p-10 rounded-3xl shadow-lg max-w-4xl w-full animate-fadeIn">
        <div className="flex flex-col items-center">
          <Hand size={65} className="text-[var(--accent)] animate-bounce mb-2" />
          <h1 className="text-4xl md:text-6xl font-bold">Bonjour, je suis<span className="text-[var(--accent)]"> TAIBI Zineb</span> </h1>
        </div>
        <p className="mt-8 text-lg md:text-2xl font-medium text-gray-700 flex flex-wrap justify-center gap-6">
          <span className="flex items-center gap-2"> <Layers size={20} className="text-[var(--accent)]" />Fullstack</span>
          <span className="flex items-center gap-2"><Database size={20} className="text-[var(--accent)]" />.NET / Angular
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-[var(--accent)]" />Data & Security</span>
        </p>
        {/*  BOUTON CV */}
        <div className="mt-8 flex justify-center">
          <a href="/TAIBI Zineb_CV.pdf"download className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition">
          <FileText size={18} className="animate-bounce" /> Télécharger mon CV</a>
        </div>
      </div>
    </section>
  );
}