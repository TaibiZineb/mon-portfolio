export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 text-center">
      <h2 className="text-3xl font-bold text-blue-600">Contact</h2>

      {/* Email cliquable */}
      <p className="mt-4">
        📧 Email :{" "}
        <a href="mailto:taibizineb96@gmail.com" className="text-blue-500 hover:underline">
          taibizineb96@gmail.com
        </a>
      </p>

      {/* Numéro de téléphone cliquable */}
      <p>
        📱 Téléphone :{" "}
        <a href="tel:+212652841972" className="text-blue-500 hover:underline">
          +212 6 52 84 19 72
        </a>
      </p>

      {/* Lien LinkedIn qui s’ouvre dans un nouvel onglet */}
      <p>
        💼 LinkedIn :{" "}
        <a
          href="https://www.linkedin.com/in/zineb-taibi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          www.linkedin.com/in/zineb-taibi
        </a>
      </p>

      
      <p>
        🐙 GitHub :{" "}
        <a
          href="https://github.com/TaibiZineb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          github.com/TaibiZineb
        </a>
      </p>
    </section>
  );
}
