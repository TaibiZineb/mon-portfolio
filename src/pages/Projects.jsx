  import {
  Server,
  Smartphone,
  Plane,
  Database,
  LayoutDashboard,
  ShoppingCart,
  User
} from "lucide-react";
  
  export default function Projects() {
  const projets = [
    {
      titre: "📡 Supervision Réseau – Projet Nagios",
      icon: <Server size={28} className="text-orange-500" />,
      description:
        "Mise en place d’une plateforme complète de monitoring réseau avec configuration des checks de services, alertes, notifications, détection automatique d’anomalies et simulation de pannes.",
      techno: "Ubuntu, Kali Linux, CentOS, NRPE, Nagios Plugins"
    },
    {
      titre: "📱 Application Mobile – React Native",
      
       image: "/images/mobile.png",
      description:
        "Développement d’une application mobile avec gestion d’état global via Redux, configuration de la navigation et création de composants réutilisables.",
      techno: "React Native, Redux, React Navigation"
    },
    {
      titre: "✈️ Agence de Voyage",
      image: "/images/Java JEE,Spring Boot.webp",
      description:
        "Conception et développement d’une application de gestion d’agence de voyage avec architecture MVC.",
      techno: "Java JEE, Spring Boot"
    },
    {
      titre: "🌐 API SyncFinance",
      description:
        "Développement d’une API .NET pour la synchronisation de données financières entre SQL Server et Oracle EBS avec optimisation des requêtes PL/SQL.",
      techno: ".NET, PL/SQL, Oracle, SQL Server"
    },
    {
      titre: "🖥️ Plateforme de Gestion des CVs",
      description:
        "Application web full-stack avec Angular pour le front-end et Supabase pour la gestion des données et API.",
      techno: "Angular, TailwindCSS, Supabase"
    },
    {
      titre: "🛒 Projet Hoppy & Maintenance e-commerce",
      description:
        "Participation au développement du projet Hoppy et maintenance de plusieurs sites e-commerce en production.",
      techno: "HTML, CSS, SASS, JavaScript, PrestaShop"
    },
    {
      titre: "💻 Portfolio Personnel",
      description:
        "Création d’un portfolio moderne pour présenter mes projets, compétences et expériences.",
      techno: "React, TailwindCSS, Vite"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-orange-600">
        Projets Académiques & Professionnels
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {projets.map((projet, index) => (
          <div
            key={index}
            className=" bg-gradient-to-b from-white to-orange-50shadow-md p-6 rounded-2xl hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
  {projet.icon}
  <h3 className="text-lg font-bold text-gray-800">
    {projet.titre}
  </h3>
</div>
            

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {projet.description}
            </p>
            {projet.image && (
              <img
                src={projet.image}
                alt={projet.titre}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}

            <p className="mt-4 text-sm font-semibold text-orange-600">
              Technologies : {projet.techno}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}