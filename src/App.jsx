import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Engagement from "./pages/Engagement";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Page d’accueil (avec plusieurs sections) */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                {/*<Engagement />*/}
                <Contact />
              </>
            }
          />

          {/* Page séparée pour Compétences */}
          <Route path="/skills" element={<Skills />} />
  <Route path="/projects" element={<Projects />} />
          {/* Page séparée pour Expériences */}
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
