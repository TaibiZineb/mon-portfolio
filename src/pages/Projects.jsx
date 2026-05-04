  import {RadioTower, Smartphone, Plane, Globe, Database, LayoutDashboard, ShoppingCart, Code2, Monitor, Code} from "lucide-react";
  
  export default function Projects() {
  const projets = [
    {
      titre: (
        <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)] p-2 rounded-full"><RadioTower size={18} className="text-[var(--accent)]" /></div>
          Supervision Réseau – Projet Nagios
        </div>
      ),
      description:
        "Mise en place d’une plateforme complète de monitoring réseau avec configuration des checks de services, alertes, notifications, détection automatique d’anomalies et simulation de pannes.",
      techno: ["Ubuntu", "Kali Linux", "CentOS", "NRPE", "Nagios Plugins"],
       type: "Configuration système (Linux / Nagios)"
    },
    {
      titre: (
      <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)]  p-2 rounded-full"><Smartphone size={18} className="text-[var(--accent)]" /></div>
          Application Mobile – React Native
        </div>
      ),

      description:
        "Développement d’une application mobile avec gestion d’état global via Redux, configuration de la navigation et création de composants réutilisables.",
      techno: ["React Native", "Redux", "React Navigation"]
    },
    {
      titre: (
         <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)] p-2 rounded-full"><Plane size={18} className="text-[var(--accent)]" /></div>
          Agence de Voyage
        </div>        
      ),
      description:
        "Conception et développement d’une application de gestion d’agence de voyage avec architecture MVC.",
      techno: ["Java JEE", "Spring Boot"]
    },
    {
      titre: (
     <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)]  p-2 rounded-full"><Globe size={18} className="text-[var(--accent)]" /></div>
          API SyncFinance
        </div>
      ),
      description:
        "Développement d’une API .NET permettant la synchronisation des données financières entre SQL Server et Oracle EBS, réduisant le temps de traitement et améliorant la fiabilité des échanges. Optimisation des requêtes PL/SQL pour améliorer les performances de l’API, réduisant les temps de réponse de 30% et assurant une meilleure gestion des ressources.",
      techno:   [".NET", "PL/SQL", "Oracle", "SQL Server"],
      github: "https://github.com/TaibiZineb/APISync",
    },
    {
      titre: (
         <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)] p-2 rounded-full"><LayoutDashboard size={18} className="text-[var(--accent)]" /></div>
          Plateforme de Gestion des CVs
        </div>
    
      ),
      description:
        "Application web full-stack avec Angular pour le front-end et Supabase pour la gestion des données et API.",
     
      techno: ["Angular", "TailwindCSS", "Supabase"],
      github: "https://github.com/TaibiZineb/projet_stage"
    },
    {
      titre: (
         <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)] p-2 rounded-full"><ShoppingCart size={18} className="text-[var(--accent)]" /></div>
          Projet Hoppy & Maintenance e-commerce
        </div>
  
      ),
      description:
        "Participation au développement du projet Hoppy et maintenance de plusieurs sites e-commerce en production.",
      techno: ["HTML", "CSS", "SASS", "JavaScript", "PrestaShop"]
    },
    {
      titre: (

         <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)] p-2 rounded-full"><Code size={18} className="text-[var(--accent)]" /></div>
          Portfolio Personnel
        </div>
        
      ),
      description:
        "Création d’un portfolio moderne pour présenter mes projets, compétences et expériences.",
      techno:   ["React", "TailwindCSS", "Vite"],
      github: "https://github.com/TaibiZineb/mon-portfolio",

    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[var(--background)]">
      <h2 className="text-3xl font-bold text-center text-[var(--accent)]">
        Projets Académiques & Professionnels
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {projets.map((projet, index) => (
          <div key={index}  className={`bg-gradient-to-br from-white to-purple-100 shadow-md p-6 rounded-2xl hover:shadow-xl transition duration-300 ${index === projets.length - 1 ? "lg:col-span-3 lg:mx-auto lg:w-1/3" : ""}`}>
            <div className="flex items-center gap-3 mb-3">{projet.icon}
              <h3 className="text-lg font-bold text-gray-800">{projet.titre}</h3>
            </div>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed"> {projet.description}</p>
            {projet.image && (
              <img src={projet.image} alt={projet.titre} className="w-full h-48 object-cover rounded-xl mb-4"/>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {(Array.isArray(projet.techno) ? projet.techno : projet.techno.split(", ")).map((techno, i) => (
              <span key={i} className="bg-purple-100 dark:bg-[var(--accent-light)] text-purple-700 text-xs px-3 py-1 rounded-full font-medium">{techno}</span>
              ))}
            </div>
            
            <div className="mt-4 flex gap-3">
              {projet.github && (
                <a href={projet.github}target="_blank" rel="noopener noreferrer" className="px-4 py-2  text-white rounded-lg text-sm bg-[var(--accent)] hover:bg-[var(--accent-light)] transition"> GitHub</a>
              )}
              {projet.type && (
                <span className=" text-sm italic text-[var(--accent)]"> {projet.type}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}