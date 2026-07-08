import { useState, useEffect } from "react";
import { Sun, Moon, DownloadSimple, List, X } from "@phosphor-icons/react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: (e: React.MouseEvent) => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full py-4 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/90 dark:bg-[#050505]/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-white/70 dark:bg-[#050505]/70 backdrop-blur-sm md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none"
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="#home"
              className="font-outfit font-bold text-2xl tracking-tighter text-gray-900 dark:text-white flex items-center gap-2"
            >
              Rohit Jadhav{" "}
            </a>
          </div>
          <div className="hidden md:flex gap-8">
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-400 text-[0.95rem] font-medium transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-400 text-[0.95rem] font-medium transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-400 text-[0.95rem] font-medium transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-200"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent text-gray-900 dark:text-white transition-colors hover:bg-black/5 dark:hover:bg-white/10"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="text-xl" /> : <Moon className="text-xl" />}
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold font-outfit text-sm transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              Resume <DownloadSimple />
            </a>
            <button
              className="md:hidden bg-transparent border-none text-gray-900 dark:text-white text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              <List />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 w-full h-screen bg-white dark:bg-[#050505] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out z-[999] ${isMobileMenuOpen ? "top-0" : "-top-[100vh]"
          }`}
      >
        <button
          className="absolute top-6 right-6 text-gray-900 dark:text-white text-3xl bg-transparent border-none"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close Mobile Menu"
        >
          <X />
        </button>
        <a
          href="#about"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-outfit text-3xl font-semibold text-gray-900 dark:text-white no-underline"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-outfit text-3xl font-semibold text-gray-900 dark:text-white no-underline"
        >
          Work
        </a>
        <a
          href="#skills"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-outfit text-3xl font-semibold text-gray-900 dark:text-white no-underline"
        >
          Expertise
        </a>
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-outfit text-3xl font-semibold text-gray-900 dark:text-white no-underline"
        >
          Contact
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-6 flex items-center gap-2 font-outfit text-xl font-semibold bg-gray-900 dark:bg-white text-white dark:text-[#050505] px-8 py-3.5 rounded-full no-underline transition-transform active:scale-95"
        >
          Resume <DownloadSimple className="text-2xl" />
        </a>
      </div>
    </>
  );
};

export default Navbar;
