  import {
  Server,
  Smartphone,
  Plane,
  Database,
  LayoutDashboard,
  ShoppingCart,
  User,
  BadgeCheck,
  Cpu,
  Briefcase,
  BriefcaseBusiness,
  ClipboardCheck,
  BadgeDollarSign,
  Landmark,
  FileSearch,
  Calculator,
  TramFront, 
 
} from "lucide-react";


export default function Experience() {
  const experiences = [
     {  icon: <User size={22} className="text-[var(--accent)]" />,
      titre: "Stagiaire Consultante Fonctionnelle",
      
      entreprise: "Alexsys Solutions - Rabat",
      date: "30 Mars 2026 – Aujourd'hui",
      description:
       "Participation à l’analyse des besoins métiers et à la rédaction des spécifications fonctionnelles.\nRédaction des cahiers de tests et des guides utilisateurs.\nCollaboration avec les équipes techniques pour assurer la bonne mise en œuvre des solutions et le suivi des projets.",
      techno: "",
      competences : "Analyse fonctionnelle • SFD • UML • Cahier de tests • Rédaction de documentation",
      
    },
    {
      icon: <Database size={22} className="text-[var(--accent)]" />,
      titre: "Stage PFE – Développement & Sécurité Applicative",
      
      entreprise: "ONCF – Rabat",
      date: "Fév. 2025 – Juin 2025",
      description:
          "Développement d’une API .NET pour la synchronisation des données financières entre SQL Server et Oracle EBS.\nOptimisation des requêtes PL/SQL afin d'améliorer les performances et la fiabilité des échanges.\nParticipation à l'analyse des besoins, à la modélisation UML et à la rédaction du cahier des charges.",
      techno: ".NET, PL/SQL, Oracle",
      competences:"API REST • .NET • Oracle EBS • PL/SQL • UML • Cahier des charges",
    },
    {
      icon: <LayoutDashboard size={22} className="text-[var(--accent)]" />,
      titre: "Stage PFC (Projet fin de Cycle)– Développement Web Full Stack",
      
      entreprise: "Adservio – Casablanca",
      date: "Avr. 2023 – Sept. 2023",
      description:
        "Développement d’une application web Angular composée de plusieurs écrans fonctionnels pour la gestion des CV.\n Conception d’interfaces utilisateur responsives avec Angular et Tailwind CSS. \nIntégration frontend–backend via Supabase (base de données et API).",
      techno: "Angular, TailwindCSS, Supabase",
      competences:
"Angular • Développement Full Stack • UML • Cahier des charges • Supabase"
    },
    {
      icon: <ShoppingCart size={22} className="text-[var(--accent)]" />,
      titre: "Stage Développeur Web",
      entreprise: "Egio Digital – Rabat",
      date: "Fév. 2022 – Août 2022",
      description:
        "Participation au développement du projet web Hoppy au sein d’une équipe projet. \n Maintenance et évolution de plusieurs sites web existants. \n Intégration de nouvelles fonctionnalités front-end sur des pages en production",
      techno: "HTML, CSS, JavaScript, PrestaShop",
      competences: "Développement Web • Maintenance • PrestaShop • JavaScript",
    },
    {
      icon: <Server size={22} className="text-[var(--accent)]" />,
      titre: "Stage Pratique",
      entreprise: "Barid Al Maghrib – Rabat",
      date: "Avr. 2021 – Mai 2021",
      description:
        "Participation à un projet applicatif multi-dépôt.",
      techno: "ASP, Systèmes d’information"
    },
     {
      icon: <Plane size={22} className="text-[var(--accent)]" />,
      titre: "Stage – Centre de Demande de Visa VFS Global",
      entreprise: "Rabat",
      date: "Août 2018 – Oct. 2018",
      description: "Support administratif et gestion des dossiers clients.",
      domaine: "Service Client"
    },
    {
      icon: <Smartphone size={22} className="text-[var(--accent)]" />, 
      titre: "Customer Service Associate – Amazon RBA1",
      entreprise: "CDD",
      date: "Oct. 2017 – Fév. 2018",
      description: "Gestion des demandes clients et assistance technique.",
      domaine: "Service Client"
    },
    {
      icon: <Landmark size={22} className="text-[var(--accent)]" />,
      titre: "Stage Pratique – Trésorerie Générale du Royaume",
      entreprise: "Direction du contrôle & Audit",
      date: "Fév. 2017 – Avr. 2017",
      description:
        "Service d’Audit de la Capacité de Gestion des Ordonnateurs.",
      domaine: "Audit, Gestion"
    },
    {
       icon: <TramFront  size={22} className="text-[var(--accent)]" />,
      titre: "Stage d’Observation – ONCF",
      entreprise: "Pôle Infrastructure & Circulation",
      date: "Jan. 2016 – Mars 2016",
      description: "Service Comptable.",
      domaine: "Comptabilité"
    }
   
  ];

  return (
    <section data-aos="fade-down" className="py-20 px-6 bg-[var(--background)]">
      <h2 data-aos="fade-up" className="text-3xl font-bold text-center text-[var(--accent)]">Expériences Professionnelles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gradient-to-b from-white via-purple-50 to-purple-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-3">
              {exp.icon}
              <h3 className="text-lg font-bold text-gray-800">{exp.titre}</h3>
            </div>
            <p className="text-sm text-gray-500">{exp.entreprise} | {exp.date}</p>
            <p className="mt-3 text-gray-600 whitespace-pre-line">{exp.description}</p>
            {exp.techno && (
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu size={16} className="text-[var(--accent)]" />
                  <p className="text-sm font-bold text-[var(--accent)]">Technologies</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.techno.split(", ").map((tech, i) => (
                    <span key={i} className="bg-[var(--accent)]/10 text-[var(--accent)] px-3 py-1 rounded-full text-xs font-medium hover:bg-[var(--accent)] hover:text-white transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {exp.domaine && (
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={16} className="text-[var(--accent)]" />
                  <p className="text-sm font-bold text-[var(--accent)]">Domaine</p>
                </div>
                <span className="bg-[var(--accent)]/10 text-[var(--accent)] px-3 py-1 rounded-full text-sm font-medium hover:bg-[var(--accent)] hover:text-white transition">{exp.domaine}</span>
              </div>
            )}
            {exp.competences && (
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <BadgeCheck size={16} className="text-[var(--accent)]" />
                <p className="text-sm font-bold text-[var(--accent)]">Compétences</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.competences.split(" • ").map((comp, i) => (
                <span key={i} className="bg-[var(--accent)]/10 text-[var(--accent)] px-3 py-1 rounded-full text-xs font-medium hover:bg-[var(--accent)] hover:text-white transition">{comp}</span>
                ))}
              </div>
            </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}