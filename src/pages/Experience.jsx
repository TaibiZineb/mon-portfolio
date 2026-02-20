export default function Experience() {
  const experiences = [
    {
      titre: "Stage PFE – Développement & Sécurité Applicative",
      entreprise: "ONCF – Rabat",
      date: "Fév. 2025 – Juin 2025",
      description:
        "Développement d’une API de synchronisation de données financières utilisée pour des échanges réguliers. \n  Optimisation des requêtes PL/SQL pour améliorer les performances.",
      techno: ".NET, PL/SQL, Oracle"
    },
    {
      titre: "Stage PFC – Développement Web Full Stack",
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
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600">
        Expériences Professionnelles
      </h2>

      <div className="mt-12 space-y-8 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-lg font-bold text-gray-800">{exp.titre}</h3>
            <p className="text-sm text-gray-500">
              {exp.entreprise} | {exp.date}
            </p>
            <p className="mt-3 text-gray-600 whitespace-pre-line">{exp.description}</p>
            {exp.techno && (
  <p className="mt-3 text-sm font-semibold text-blue-600">
    Technologies : {exp.techno}
  </p>
)}

{exp.domaine && (
  <p className="mt-3 text-sm font-semibold text-blue-600">
    Domaine : {exp.domaine}
  </p>
)}
          </div>
        ))}
      </div>
    </section>
  );
}