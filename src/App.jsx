import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./sections/hero";
import About from "./sections/about";
import Work from "./sections/work";
import Capabilities from "./sections/capabilities";
import Beyond from "./sections/beyond";
import Philosophy from "./sections/philosophy";
import Contact from "./sections/contact";

import ProjectPage from "./pages/ProjectPage";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Work />
        <Capabilities />
        <Beyond />
        <Philosophy />
        <Contact />
      </main>

      <footer className="bg-[#332E2A] px-5 pb-8 text-[#F7F3EA] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-1400px flex-col justify-between gap-5 border-t border-[#F7F3EA]/20 pt-6 text-xs uppercase tracking-[0.15em] opacity-50 sm:flex-row">
          <span>© 2026 Vasu Aggarwal</span>

          <span>
            Event Producer · Artist Manager · Creative Coordinator
          </span>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/work/:slug"
          element={<ProjectPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
