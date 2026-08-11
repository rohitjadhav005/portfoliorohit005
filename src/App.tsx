import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Intro from "./components/Intro";
import { AnimatePresence } from "framer-motion";

// Augment Window so TypeScript knows about __lenis
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

function App() {
  const [loading, setLoading] = useState(true);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    // Show intro for a fixed duration (adjust as needed to match animation timing)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Detect touch / mobile devices — let mobile use 100% native GPU-accelerated kinetic scroll
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);

    if (isTouchDevice) {
      return;
    }

    const lenis = new Lenis({
      // Desktop: butter-smooth cinematic ease
      lerp: 0.07,
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      wheelMultiplier: 0.9,
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`bg-[#fff0e5] dark:bg-[#050505] text-gray-900 dark:text-white min-h-screen font-body max-w-[100vw] overflow-x-clip ${loading ? "h-screen overflow-hidden" : ""}`}>
      <AnimatePresence mode="wait">
        {loading && <Intro key="intro" />}
      </AnimatePresence>
      <Cursor isDark={isDark} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Expertise />
        <Contact />
      </main>
    </div>
  );
}

export default App;
