  import { Code, Database, ShieldCheck, Layers, Monitor, Hand, Download, FileText, GithubIcon } from "lucide-react";

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
        <div className="mt-8 flex justify-center">
          <a href="/TAIBI Zineb_CV.pdf"
            download className="group inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-xl shadow-md border border-transparent hover:bg-white hover:text-[var(--accent)] hover:border-[var(--accent)] hover:scale-105 transition">
            <FileText size={18} className="animate-bounce text-white group-hover:text-[var(--accent)] transition"/>Télécharger mon CV
          </a>
        </div>
        <div className="mt-8 flex justify-center">
          <a href="https://github.com/TaibiZineb" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--accent)] text-[var(--accent)] px-6 py-3 rounded-xl hover:bg-[var(--accent)] hover:text-white transition group">
          <GithubIcon size={20} className="text-[var(--accent)] group-hover:text-white transition"/> GitHub</a>
        </div>
       
      </div>
    </section>
  );
}