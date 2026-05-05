  import {
  Server,
  Smartphone,
  Plane,
  Database,
  LayoutDashboard,
  ShoppingCart,
  User
} from "lucide-react";


export default function Experience() {
  const experiences = [
     {
      titre: "Stage - functional consultant",
      
      entreprise: "alexsys solutions - Rabat",
      date: "30 Mars 2026 ",
      description:
        "Participation à l’analyse des besoins métiers, rédaction des spécifications fonctionnelles et accompagnement des équipes techniques dans la mise en œuvre des solutions.",
      techno: ""
    },
    {
      titre: "Stage PFE – Développement & Sécurité Applicative",
      
      entreprise: "ONCF – Rabat",
      date: "Fév. 2025 – Juin 2025",
      description:
        "Développement d’une API de synchronisation de données financières utilisée pour des échanges réguliers. \n  Optimisation des requêtes PL/SQL pour améliorer les performances.",
      techno: ".NET, PL/SQL, Oracle"
    },
    {
      titre: "Stage PFC (Projet fin de Cycle)– Développement Web Full Stack",
      
      entreprise: "Adservio – Casablanca",
      date: "Avr. 2023 – Sept. 2023",
      description:
        "Développement d’une application web Angular composée de plusieurs écrans fonctionnels pour la gestion des CV.\n Conception d’interfaces utilisateur responsives avec Angular et Tailwind CSS. \nIntégration frontend–backend via Supabase (base de données et API).",
      techno: "Angular, TailwindCSS, Supabase"
    },
    {
      titre: "Stage Développeur Web",
      entreprise: "Egio Digital – Rabat",
      date: "Fév. 2022 – Août 2022",
      description:
        "Participation au développement du projet web Hoppy au sein d’une équipe projet. \n Maintenance et évolution de plusieurs sites web existants. \n Intégration de nouvelles fonctionnalités front-end sur des pages en production",
      techno: "HTML, CSS, JavaScript, PrestaShop"
    },
    {
      titre: "Stage Pratique",
      entreprise: "Barid Al Maghrib – Rabat",
      date: "Avr. 2021 – Mai 2021",
      description:
        "Participation à un projet applicatif multi-dépôt.",
      techno: "ASP, Systèmes d’information"
    },
     {
      titre: "Stage – Centre de Demande de Visa VFS Global",
      entreprise: "Rabat",
      date: "Août 2018 – Oct. 2018",
      description: "Support administratif et gestion des dossiers clients.",
      domaine: "Service Client"
    },
    {
      titre: "Customer Service Associate – Amazon RBA1",
      entreprise: "CDD",
      date: "Oct. 2017 – Fév. 2018",
      description: "Gestion des demandes clients et assistance technique.",
      domaine: "Service Client"
    },
    {
      titre: "Stage Pratique – Trésorerie Générale du Royaume",
      entreprise: "Direction du contrôle & Audit",
      date: "Fév. 2017 – Avr. 2017",
      description:
        "Service d’Audit de la Capacité de Gestion des Ordonnateurs.",
      domaine: "Audit, Gestion"
    },
    {
      titre: "Stage d’Observation – ONCF",
      entreprise: "Pôle Infrastructure & Circulation",
      date: "Jan. 2016 – Mars 2016",
      description: "Service Comptable.",
      domaine: "Comptabilité"
    }
   
  ];

  return (
    <section data-aos="fade-down" className="py-20 px-6 bg-[var(--background)]">
      <h2 data-aos="fade-up" className="text-3xl font-bold text-center text-[var(--accent)]">
        Expériences Professionnelles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-white via-purple-50 to-purple-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
             <div className="flex items-center gap-3 mb-3">
    {exp.icon}
    <h3 className="text-lg font-bold text-gray-800">
      {exp.titre}
    </h3>
  </div>
            <p className="text-sm text-gray-500">
              {exp.entreprise} | {exp.date}
            </p>
            <p className="mt-3 text-gray-600 whitespace-pre-line">{exp.description}</p>
            {exp.techno && (
  <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
    Technologies : {exp.techno}
  </p>
)}

{exp.domaine && (
  <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
    Domaine : {exp.domaine}
  </p>
)}
          </div>
        ))}
      </div>
    </section>
  );
}