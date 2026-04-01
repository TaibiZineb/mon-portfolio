import { Code, Database, ShieldCheck, Layers, Monitor,Hand} from "lucide-react";
export default function Home() {
  return (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-orange-100" >
  <h1 className="text-4xl md:text-6xl font-bold flex items-center gap-3 animate-fadeIn"><Hand size={35}className="text-orange-500" />Bonjour, je suis <span className="text-orange-500">TAIBI Zineb</span></h1>

  <p className="mt-8 text-lg md:text-2xl font-medium text-gray-700 flex flex-wrap justify-center gap-6">
    <span className="flex items-center gap-2"><Layers size={20} className="text-orange-500" /> Fullstack</span>
    <span className="flex items-center gap-2"><Database size={20} className="text-orange-500" />.NET / Angular
    </span>
    <span className="flex items-center gap-2"><ShieldCheck size={20} className="text-orange-500" />Data & Security
    </span>
  </p>
</section>
  );
}
