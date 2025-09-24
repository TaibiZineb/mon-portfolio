export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-600">À propos</h2>
      <p className="mt-4 text-center max-w-5xl mx-auto text-gray-700 leading-relaxed">
        Jeune diplômée d’un Master en Technologies de l’Information et Sciences des Données,
        passionnée par le développement logiciel et la data. 
        Je possède un bon sens de l’organisation, de l’adaptation et du travail en équipe.
      </p>
      <p className="mt-4 text-center max-w-5xl mx-auto text-gray-700 leading-relaxed">
        Je suis constamment à la recherche de nouvelles opportunités pour apprendre et me perfectionner dans le domaine de la technologie.
      </p>

      {/* 🎓 Formations */}
      <div className="mt-8 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">🎓 Formations</h3>
        <ul className="space-y-3 text-gray-700">
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
          <li>🌍 Membre de l’<strong>Association Joody</strong></li>
          <li>📚 Cours de soutien et assistance aux orphelins de l’<strong>Association Al Mansour</strong></li>
        </ul>
      </div>
    </section>
  );
}
