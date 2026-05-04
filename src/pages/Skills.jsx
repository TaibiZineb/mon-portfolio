import { ShieldCheck, Wrench, Terminal, Code } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: (
        <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)] p-2 rounded-full">
            <Code size={18} className="text-[var(--accent)]" />
          </div>
          Développement
        </div>
      ),
      items: [
        "Frontend : HTML5, CSS3, SASS, JavaScript, Angular, React, Tailwind CSS",
        "Backend : .NET, Java (Spring Boot), PHP, Python (bases), architecture MVC",
        "Mobile : React Native",
        "API REST",
        "Bases de données : Oracle, SQL, PL/SQL"
      ]
    },

    {
      category: (
        <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)] p-2 rounded-full">
            <ShieldCheck size={18} className="text-[var(--accent)]" />
          </div>
          Cybersécurité & Systèmes
        </div>
      ),
      items: [
        "Sécurité applicative et sécurisation des API",
        "Authentification et contrôle d’accès",
        "Supervision et monitoring (Nagios)",
        "Systèmes : Linux (Ubuntu, Kali, CentOS)",
        "Initiation SOC (analyse et détection d’incidents)"
      ]
    },

    {
      category: (
        <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)] p-2 rounded-full">
            <Wrench size={18} className="text-[var(--accent)]" />
          </div>
          Outils & Méthodologies
        </div>
      ),
      items: [
        "Git, GitHub, Vercel",
        "TOAD for Oracle",
        "UML, rédaction de cahier des charges",
        "Travail en méthodologie Agile"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[var(--background)]">
      <h2 className="text-3xl font-bold text-center text-[var(--accent)] mb-8 max-w-2xl mx-auto">
        Compétences
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {skills.map((section, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-white via-purple-50 to-purple-100 shadow-md p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              {section.category}
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm">
              {section.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}