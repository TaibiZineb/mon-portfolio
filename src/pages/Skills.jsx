export default function Skills() {
  const competences = [
    "💻 PL/SQL",
    "🎨 HTML5 / CSS3 / SASS",
    "🐍 Python",
    "☕ Java",
    "📜 JavaScript",
    "🛠️ Supabase",
    "🎨 TailwindCSS",
    "⚡ Angular",
    "📐 Conception UML",
    "🐘 PHP"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600">Compétences</h2>
      <p className="mt-4 text-center text-gray-700">
        Voici un aperçu des langages, frameworks et outils que je maîtrise :
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
        {competences.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow p-6 rounded-xl text-center font-medium hover:shadow-lg transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
