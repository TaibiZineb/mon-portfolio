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
      description: (
        <>  <p>Déploiement d’une plateforme de supervision réseau avec Nagios pour surveiller les services critiques d’une infrastructure IT.</p>
          <p className="mt-2">Configuration de checks personnalisés, alertes et notifications pour assurer une surveillance proactive et la détection rapide d’anomalies.</p>
          <p className="mt-2">Simulation de pannes pour tester la robustesse et améliorer la surveillance du système</p>
          <p className="mt-3 text-sm font-semibold text-[var(--accent)]">   Résultat : <span className="text-green-500 font-bold">infrastructure supervisée et fiable</span></p>
        </>
      ),
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
      description:(
        <><p>Développement d’une application mobile avec React Native pour la gestion de tâches personnelles.</p>
          <p className="mt-2">Mise en place d’une architecture de gestion d’état global avec Redux pour assurer une expérience utilisateur fluide et réactive.</p>
          <p className="mt-2">Intégration de la navigation avec React Navigation et création de composants réutilisables pour améliorer la maintenabilité et la performance de l’application.</p>
          <p className="mt-3 text-sm font-semibold text-[var(--accent)]">Résultat : <span className="text-green-500 font-bold">application fonctionnelle et performante</span></p>
        </>

      ),
      techno: ["React Native", "Redux", "React Navigation"]
    },
    {
      titre: (
         <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)] p-2 rounded-full"><Plane size={18} className="text-[var(--accent)]" /></div>
          Agence de Voyage
        </div>        
      ),
      description:(
          <><p>Conception et développement d’une application de gestion d’agence de voyage basée sur une architecture MVC.</p>    
              <p className="mt-2">
      Réalisation des diagrammes UML et rédaction du cahier des charges pour structurer les besoins métiers et techniques.
    </p>  
          <p className="mt-2">Implémentation des fonctionnalités clés : gestion des réservations, clients et services.</p>
          <p className="mt-3 text-sm font-semibold text-[var(--accent)]">Résultat : <span className="text-green-500 font-bold">application fonctionnelle et évolutive</span></p>
        </> 
      ),
      techno: ["Java JEE", "Spring Boot"]
    },
    {
      titre: (
     <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)]  p-2 rounded-full"><Globe size={18} className="text-[var(--accent)]" /></div>
          API SyncFinance
        </div>
      ),
     description: (
      <>
    <p>Développement d’une API .NET pour la synchronisation automatisée des données financières entre SQL Server et Oracle EBS.</p>
          <p className="mt-2">
      Analyse des besoins, réalisation des diagrammes UML et rédaction du cahier des charges pour cadrer le projet.
    </p>
    <p className="mt-2">
      Optimisation des requêtes PL/SQL ayant permis de réduire le temps de traitement et d’améliorer la fiabilité des échanges.</p>
     <p className="mt-2 font-semibold text-[var(--accent)]">
      Résultat : <span className="text-green-500 font-bold">+30% performance</span>
    </p>
    </>
    ),
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
      

      description: (
      <> <p>Développement d’une application web full-stack avec Angular pour le front-end et Supabase pour la gestion des données.</p>
          <p className="mt-2">
      Réalisation des diagrammes UML et rédaction du cahier des charges afin de structurer les besoins et définir l’architecture.
    </p>
     <p className="mt-2">Conception d’interfaces utilisateur responsives avec Tailwind CSS et intégration de fonctionnalités de gestion des CVs pour améliorer l’expérience utilisateur.</p>
        <p className="mt-2">Intégration d’une API et conception d’interfaces responsives pour améliorer l’expérience utilisateur.</p>
          <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
      Résultat :
      <span className="ml-2 text-green-500 font-bold">
        plateforme fonctionnelle et performante
      </span>
    </p>
    
    </>
    ),
        
     
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
      description: (
        <>
          <p>Participation au développement du projet web Hoppy et maintenance de plusieurs sites e-commerce sous PrestaShop.</p>  
          <p className="mt-2">Intégration de nouvelles fonctionnalités front-end et optimisation des performances pour améliorer l’expérience utilisateur.</p>
          <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
      Résultat : <span className="text-green-500 font-bold">sites performants et à jour</span>
    </p>
        </>        
      ),
      techno: ["HTML", "CSS", "SASS", "JavaScript", "PrestaShop"]
    },
    {
      titre: (

         <div className="flex items-center gap-3 font-semibold">
          <div className="bg-[var(--violet-light)] dark:bg-[var(--accent-light)] p-2 rounded-full"><Code size={18} className="text-[var(--accent)]" /></div>
          Portfolio Personnel
        </div>
        
      ),
      description: (
        <>
          <p>Conception et développement d’un portfolio moderne pour présenter mes projets, compétences et expériences.</p>
          <p className="mt-2">Mise en place d’un design responsive avec TailwindCSS, ajout d’un mode sombre et intégration d’animations pour améliorer l’expérience utilisateur.</p>
            <p className="mt-2">Déploiement sur Vercel pour assurer une accessibilité rapide et fiable.</p>
            
          <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
      Résultat : <span className="text-green-500 font-bold">portfolio professionnel et attractif</span>
    </p>
        </>
      ) ,
      techno:   ["React", "TailwindCSS", "Vite"],
      github: "https://github.com/TaibiZineb/mon-portfolio",

    }
  ];

  return (
    <section data-aos="fade-down" id="projects" className="py-20 px-6 bg-[var(--background)]">
      <h2 data-aos="slide-right" className="text-3xl font-bold text-center text-[var(--accent)]">
        Projets Académiques & Professionnels</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {projets.map((projet, index) => (
          <div key={index}  className={`bg-gradient-to-br from-white to-purple-100 shadow-md p-6 rounded-2xl hover:shadow-xl transition duration-300 ${index === projets.length - 1 ? "lg:col-span-3 lg:mx-auto lg:w-1/3" : ""}`}>
            <div className="flex items-center gap-3 mb-3">{projet.icon}
              <h3 className="text-lg font-bold text-gray-800">{projet.titre}</h3>
            </div>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed whitespace-pre-line"> {projet.description}</p>
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