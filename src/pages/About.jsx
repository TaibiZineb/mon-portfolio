import { GraduationCap, Award, Handshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[var(--background)]">
      <h2 className="text-4xl font-bold text-center text-[var(--accent)] mb-10">
        À propos
      </h2>

      {/* Bloc présentation */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-white to-purple-100 shadow-xl rounded-3xl p-8 md:p-10 text-center leading-relaxed text-gray-700 space-y-6">
        <p>
          Diplômée d’un Master en Technologies de l’Information et Sciences des
          Données, je suis à la recherche d’une opportunité en développement
          logiciel, idéalement en environnement Full Stack ou applicatif.
          Passionnée par la conception d’applications web et d’API performantes,
          j’ai acquis une expérience concrète en développement, optimisation et
          intégration de solutions en contexte professionnel.
        </p>

        <p>
          En parallèle, j’ai suivi une formation intensive de quatre mois en
          cybersécurité (Jobintech – ENSI), renforçant mes compétences en
          sécurité applicative, protection des données, supervision des systèmes
          et bonnes pratiques de sécurité.
        </p>

        <p>
          Actuellement en stage en tant que consultante fonctionnelle chez
          Alexsys Solutions, je contribue à l’analyse des besoins métiers, à la
          rédaction des spécifications fonctionnelles et à l’accompagnement des
          projets, me permettant d’acquérir une double compétence technique et
          fonctionnelle.
        </p>

        <p>
          Rigoureuse, autonome et dotée d’un fort esprit d’équipe, je souhaite
          intégrer une entreprise innovante où je pourrai contribuer activement
          aux projets techniques tout en développant des solutions performantes
          et sécurisées.
        </p>
      </div>

      {/* Cartes */}
      <div id="formations"className="mt-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Formations */}
        <div className="bg-gradient-to-br from-white to-purple-100 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[350px]">
           <div className="bg-[var(--accent)]/15 text-[var(--accent)] text-xs px-3 py-1 rounded-full font-medium shadow-sm hover:bg-[var(--accent-g)] hover:text-white transition">
           <h3 className="text-xl font-semibold justify-center text-center text-[var(--accent)] mb-4 flex items-center gap-2 hover:text-white">
           <GraduationCap size={22} />
            Formations
          </h3></div>
          
          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="border-b pb-2">
              <strong>Formation Cybersécurité – Jobintech</strong>
              <br />
              ENSI Rabat{" "}
              <span className="text-gray-500">• Septembre 2025 – Février 2026</span>
            </li>

            <li className="border-b pb-2">
              <strong>Master en Technologies de l’Information et Sciences des Données</strong>
              <br />
              Institut Supérieur Vinci, Rabat{" "}
              <span className="text-gray-500">2023 – 2025</span>
            </li>

            <li className="border-b pb-2">
              <strong>Licence en Technologies de l’Information</strong>
              <br />
              Institut Supérieur Vinci, Rabat{" "}
              <span className="text-gray-500"> 2022 – 2023</span>
            </li>

            <li className="border-b pb-2">
              <strong>Technicien Spécialisé en Développement Informatique</strong>
              <br />
              ISTA Hay Salam, Salé{" "}
              <span className="text-gray-500">2019 – 2021</span>
            </li>

            <li className="border-b pb-2">
              <strong>Licence Professionnelle en Management et Administration des Entreprises</strong>
              <br />
              FSJES Souissi, Rabat{" "}
              <span className="text-gray-500">2014 – 2017</span>
            </li>

            <li>
              <strong>Baccalauréat Sciences Expérimentales – Option Physique-Chimie</strong>
              <br />
              Lycée Attajdid, Salé{" "}
              <span className="text-gray-500">2014</span>
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-white to-purple-100 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <div className="bg-[var(--accent)]/15 text-[var(--accent)] text-xs px-3 py-1 rounded-full font-medium shadow-sm hover:bg-[var(--accent-g)] hover:text-white transition"><h3 className="text-xl font-semibold justify-center text-center text-[var(--accent)] mb-4 flex items-center gap-2 hover:text-white">
             <Award size={22} />
            Certifications
          </h3></div>

          <div className="flex flex-wrap gap-2 mt-2">
<ul className="space-y-3 text-gray-700 text-sm">
              <li className="border-b pb-2">Certificat d’accomplissement : <strong>L’essentiel de PHP 8</strong></li>
              <li className="border-b pb-2"> Certificat d’accomplissement : <strong>L’essentiel de PrestaShop</strong></li>
              <li className="border-b pb-2"> Certificat d’accomplissement : <strong>L’essentiel de Sass</strong></li>
              <li className="border-b pb-2"> Certificat d’accomplissement : <strong>L’essentiel de GitHub</strong></li>
              <li className="border-b pb-2">SymfonyCasts : <strong>Symfony Fundamentals</strong></li>
              <li> SymfonyCasts : <strong>Symfony Beginner</strong></li>
            </ul>
</div>
          
        </div>

        {/* Engagement */}
        <div className="bg-gradient-to-br from-white to-purple-100 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <div className="bg-[var(--accent)]/15 text-[var(--accent)] text-xs px-3 py-1 rounded-full font-medium shadow-sm hover:bg-[var(--accent-g)] hover:text-white transition"><h3 className="text-xl font-semibold justify-center text-centertext-[var(--accent)] mb-4 flex items-center gap-2 hover:text-white">
           <Handshake size={22} />
            Engagement associatif
          </h3></div>

          <ul className="space-y-3 text-gray-700 text-sm mt-2">
            <li className="font-semibold text-[var(--accent)]">Association Joody</li>
            <li>Accompagnement éducatif</li>
            <li>Soutien aux orphelins</li>
            <li>Animation d’activités</li>
          </ul>
        </div>
      </div>
    </section>
  );
}