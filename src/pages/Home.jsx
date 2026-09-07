import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Experience from "../components/Experience.jsx";
import Timeline from "../components/Timeline.jsx";
import Education from "../components/Education.jsx";
import Certifications from "../components/Certifications.jsx";
import Contact from "../components/Contact.jsx";

/**
 * When a navigation carries { state: { scrollTo: "section-id" } }
 * (e.g. from the navbar while on a case-study page), scroll to it
 * once the home page has mounted.
 */
export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return undefined;
    const id = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, "");
    }, 120);
    return () => window.clearTimeout(id);
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Timeline />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
