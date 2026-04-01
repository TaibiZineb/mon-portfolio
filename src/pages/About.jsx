import { GraduationCap, Award,Handshake } from "lucide-react";
export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">À propos</h2>
      <div className="bg-white shadow-xl rounded-3xl p-10 text-center leading-relaxed text-gray-700">
        <p>
          Diplômée d’un Master en Technologies de l’Information et Sciences des Données,
          je suis à la recherche d’une opportunité en développement logiciel, idéalement
          en environnement Full Stack ou applicatif. Passionnée par la conception
          d’applications web et d’API performantes, j’ai acquis une expérience concrète
          en développement, optimisation et intégration de solutions en contexte professionnel.
        </p>
        <p className="mt-6">
          En parallèle, je me spécialise en cybersécurité à travers une formation
          dédiée (Jobintech – ENSI), avec un intérêt particulier pour la sécurité
          applicative, la protection des données et la supervision des systèmes.
        </p>

        <p className="mt-6">
          Rigoureuse, autonome et dotée d’un fort esprit d’équipe, je souhaite intégrer
          une entreprise innovante où je pourrai contribuer activement aux projets
          techniques tout en développant des solutions performantes et sécurisées.
        </p>
      </div>

      <div className="mt-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Formations */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-4 flex items-center gap-2"><GraduationCap size={22} />Formations</h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li> <strong>Formation Cybersécurité – Jobintech </strong>  ENSI Rabat  <span className="text-sm text-gray-500">Septembre 2025 – Février 2026</span></li>
              <li><strong>Master en Technologies de l’Information et Sciences des Données</strong> – Institut Supérieur Vinci, Rabat <span className="text-sm text-gray-500">2023 – 2025</span></li>
              <li> <strong>Licence en Technologies de l’Information</strong> – Institut Supérieur Vinci, Rabat <span className="text-sm text-gray-500">2022 – 2023</span></li>
              <li> <strong>Technicien Spécialisé en Développement Informatique</strong> – ISTA Hay Salam, Salé <span className="text-sm text-gray-500">2019 – 2021</span></li>
              <li> <strong>Licence Professionnelle en Management et Administration des Entreprises</strong> – FSJES Souissi, Rabat <span className="text-sm text-gray-500">2014 – 2017</span></li>
              <li> <strong>Baccalauréat Sciences Expérimentales – Option Physique-Chimie</strong> – Lycée Attajdid, Salé <span className="text-sm text-gray-500">2014</span></li>
            </ul>
          </div>
          {/* Certifications */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            
               <h3 className="text-xl font-semibold text-orange-500 mb-4 flex items-center gap-2"><Award size={22} />Certifications</h3>  
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>Certificat d’accomplissement : <strong>L’essentiel de PHP 8</strong></li>
              <li> Certificat d’accomplissement : <strong>L’essentiel de PrestaShop</strong></li>
              <li> Certificat d’accomplissement : <strong>L’essentiel de Sass</strong></li>
              <li> Certificat d’accomplissement : <strong>L’essentiel de GitHub</strong></li>
              <li>SymfonyCasts : <strong>Symfony Fundamentals</strong></li>
              <li> SymfonyCasts : <strong>Symfony Beginner</strong></li>
            </ul>
          </div>
          {/* Engagement */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-4 flex items-center gap-2"><Handshake size={22} />Engagement associatif</h3>
            <ul className="space-y-3 text-gray-700 text-sm"><strong>Association Joody</strong>
              <li>  Accompagnement éducatif et soutien aux orphelins</li>
              <li> Animation d’activités et aide scolaire</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
