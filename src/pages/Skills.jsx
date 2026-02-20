export default function Skills() {
  const skills = [
    {
      category: "🔐 Cybersécurité & Systèmes",
      items: [
        "Sécurité applicative",
        "Sécurisation des API",
        "Authentification & Contrôle d’accès",
        "Linux (Ubuntu, Kali, CentOS)",
        "Supervision système",
        "Monitoring réseau",
        "Protection des données",
        "Initiation SOC"
      ]
    },
    {
      category: "🛠 Outils & Conception",
      items: [
        "Git / GitHub",
        "Vercel",
        "Toad for Oracle",
        "UML",
        "Cahier des charges"
      ]
    },
    {
      category: "💻 Développement",
      items: [
        "HTML5 / CSS3 / SASS",
        "JavaScript",
        "Angular",
        "React / React Native",
        "TailwindCSS",
        ".NET",
        "Java (Spring Boot)",
        "Python",
        "PL/SQL / SQL / Oracle",
        "PHP",
        "Frameworks MVC"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600">
        Compétences
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {skills.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-2xl hover:shadow-xl transition"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              {section.category}
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm">
              {section.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}