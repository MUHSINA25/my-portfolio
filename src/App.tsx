import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * Root application component for Muhsina CT's personal portfolio.
 * Composes all sections and provides global theme, loading, and scroll UX.
 */
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Loader loading={loading} />
      <ScrollProgress />
      <div className="relative min-h-screen bg-white text-slate-900 selection:bg-fuchsia-500 selection:text-white dark:bg-[#0a0a12] dark:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <GitHubStats />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
