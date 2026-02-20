export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-600">À propos</h2>
<p className="mt-4 text-center max-w-5xl mx-auto text-gray-700 leading-relaxed">
  Diplômée d’un Master en Technologies de l’Information et Sciences des Données,
  je suis à la recherche d’une opportunité en développement logiciel, idéalement
  en environnement Full Stack ou applicatif. Passionnée par la conception
  d’applications web et d’API performantes, j’ai acquis une expérience concrète
  en développement, optimisation et intégration de solutions en contexte professionnel.
</p>

<p className="mt-4 text-center max-w-5xl mx-auto text-gray-700 leading-relaxed">
  En parallèle, je me spécialise en cybersécurité à travers une formation
  dédiée (Jobintech – ENSI), avec un intérêt particulier pour la sécurité
  applicative, la protection des données et la supervision des systèmes.
</p>

<p className="mt-4 text-center max-w-5xl mx-auto text-gray-700 leading-relaxed">
  Rigoureuse, autonome et dotée d’un fort esprit d’équipe, je souhaite intégrer
  une entreprise innovante où je pourrai contribuer activement aux projets
  techniques tout en développant des solutions performantes et sécurisées.
</p>

      {/* 🎓 Formations */}
      <div className="mt-8 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">🎓 Formations</h3>
        <ul className="space-y-3 text-gray-700">
          <li> 📌 <strong>Formation Cybersécurité – Jobintech </strong>  ENSI Rabat  <span className="text-sm text-gray-500">Septembre 2025 – Février 2026</span></li>
          <li>📌 <strong>Master en Technologies de l’Information et Sciences des Données</strong> – Institut Supérieur Vinci, Rabat <span className="text-sm text-gray-500">2023 – 2025</span></li>
          <li>📌 <strong>Licence en Technologies de l’Information</strong> – Institut Supérieur Vinci, Rabat <span className="text-sm text-gray-500">2022 – 2023</span></li>
          <li>📌 <strong>Technicien Spécialisé en Développement Informatique</strong> – ISTA Hay Salam, Salé <span className="text-sm text-gray-500">2019 – 2021</span></li>
          <li>📌 <strong>Licence Professionnelle en Management et Administration des Entreprises</strong> – FSJES Souissi, Rabat <span className="text-sm text-gray-500">2014 – 2017</span></li>
          <li>📌 <strong>Baccalauréat Sciences Expérimentales – Option Physique-Chimie</strong> – Lycée Attajdid, Salé <span className="text-sm text-gray-500">2014</span></li>
        </ul>
      </div>

      {/* 🏅 Certifications */}
      <div className="mt-10 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">🏅 Certifications</h3>
        <ul className="space-y-3 text-gray-700">
          <li>✅ Certificat d’accomplissement : <strong>L’essentiel de PHP 8</strong></li>
          <li>✅ Certificat d’accomplissement : <strong>L’essentiel de PrestaShop</strong></li>
          <li>✅ Certificat d’accomplissement : <strong>L’essentiel de Sass</strong></li>
          <li>✅ Certificat d’accomplissement : <strong>L’essentiel de GitHub</strong></li>
          <li>✅ SymfonyCasts : <strong>Symfony Fundamentals</strong></li>
          <li>✅ SymfonyCasts : <strong>Symfony Beginner</strong></li>
        </ul>
      </div>

      {/* 🤝 Engagement associatif */}
      <div className="mt-10 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">🤝 Engagement associatif</h3>
        <ul className="space-y-3 text-gray-700">
    <li>
      <strong>Association Joody</strong>
      <div className="mt-2 text-gray-600">
        <p>• Accompagnement éducatif et soutien aux orphelins</p>
        <p>• Animation d’activités et aide scolaire</p>
      </div>
    </li>
       
        </ul>
      </div>
    </section>
  );
}
