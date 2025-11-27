export default function Projects() {
  const projets = [
      {
      titre: "📌 Supervision Réseau – Projet Nagios",
      description:
        "Mise en place d’une plateforme de monitoring réseau avec Nagios : configuration des checks de services, alertes, notifications, détection automatique d’anomalies et simulation de pannes pour tester la réactivité du système.",
      techno: "Nagios, Ubuntu, Kali Linux, CentOS, NRPE, Nagios Plugins",
      lien: "#"
    },
    {
      titre: "📌 API SyncFinance",
      description: "Développement d’une API .NET pour synchroniser les données financières (factures, paiements, états des comptes) entre SQL Server et Oracle EBS.",
      techno: ".NET, PL/SQL, Oracle, SQL Server",
      lien: "#"
    },
    {
      titre: "📌 Plateforme de gestion des CVs",
      description: "Application web pour gérer les CVs des candidats. Développée lors de mon stage PFC chez Adservio.",
      techno: "Angular, TailwindCSS, Supabase",
      lien: "#"
    },
    {
      titre: "📌 Projet Hoppy & Maintenance e-commerce",
      description: "Participation au développement du projet Hoppy et maintenance de sites (Kechmara, OEK) avec PrestaShop.",
      techno: "HTML5, CSS3, JS, SASS, PrestaShop",
      lien: "#"
    },
    {
      titre: "📌 Application mobile e-commerce",
      description: "Développement d’une application mobile avec gestion d’état global via Redux et navigation entre écrans.",
      techno: "React Native, Redux, React Navigation",
      lien: "#"
    },
    {
      titre: "📌 Agence de Voyage",
      description: "Projet académique de gestion d’une agence de voyage avec Spring Boot et Java JEE.",
      techno: "Java JEE, Spring Boot",
      lien: "#"
    },
    {
      titre: "📌 Portfolio Personnel",
      description: "Création de mon portfolio en ligne pour présenter mes projets, compétences et expériences.",
      techno: "React, TailwindCSS, Vite",
      lien: "#" 
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-600">Mes Projets</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {projets.map((projet, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-lg p-6 rounded-xl hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-bold text-gray-800">{projet.titre}</h3>
            <p className="mt-2 text-gray-600">{projet.description}</p>
            <p className="mt-2 text-sm text-blue-600 font-semibold">Technologies : {projet.techno}</p>
            {projet.lien !== "#" && (
              <a
                href={projet.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                🔗 Voir le projet
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
