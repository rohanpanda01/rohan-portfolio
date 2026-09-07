import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";

/**
 * Scrolls to the top on route change, unless the navigation carried
 * a `scrollTo` state (then Home handles scrolling to that section).
 */
function ScrollManager() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, state]);

  return null;
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Ambient blue + purple background glows */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-purple-600/15 blur-[140px]" />
        <div className="absolute bottom-0 -left-24 h-[22rem] w-[22rem] rounded-full bg-indigo-600/10 blur-[130px]" />
      </div>

      <ScrollManager />
      <Navbar />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
