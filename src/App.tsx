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
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Loader loading={loading} />
      <ScrollProgress />
      <div className="relative min-h-screen overflow-x-hidden bg-[#05070c] text-slate-100 selection:bg-fuchsia-500/80 selection:text-white">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.14),transparent_28%),linear-gradient(120deg,#05070c_0%,#080b16_100%)]" />
          <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        </div>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
