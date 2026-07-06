import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import geoletImg from "../assets/geolet.png";
import vitalityImg from "../assets/vitality.png";

const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1Raw = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2Raw = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  // Disable parallax on mobile — it breaks the stacked layout
  const y1 = isMobile ? 0 : y1Raw;
  const y2 = isMobile ? 0 : y2Raw;


  return (
    <section ref={containerRef} id="projects" className="py-12 md:py-24 relative bg-gradient-to-b from-transparent via-black/[0.02] dark:via-white/[0.02] to-transparent perspective-2000">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          className="mb-8 md:mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold tracking-tight mb-3 font-outfit text-gray-900 dark:text-white">Featured Work</h2>
          <p className="text-gray-600 dark:text-gray-400 text-[1rem] md:text-[1.1rem]">Some of my recent projects</p>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-32">
          {/* Project 1 */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
            
            {/* Image (Right side on desktop) */}
            <motion.div 
              className="md:col-span-7 md:col-start-6 row-start-1 relative z-10 w-full group"
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <div className="rounded-[16px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] bg-white/50 dark:bg-[#111]">
                <a href="https://github.com/rohitjadhav005/GeoLet" target="_blank" rel="noreferrer" className="block relative overflow-hidden aspect-video">
                  <img src={geoletImg} alt="GeoLet Dashboard" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                </a>
              </div>
            </motion.div>

            {/* Content (Left side on desktop, overlapping) */}
            <motion.div 
              className="md:col-span-6 md:col-start-1 row-start-1 relative z-20 pointer-events-none"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <div className="pointer-events-auto text-left">
                <p className="text-gray-900 dark:text-white font-mono text-xs font-semibold tracking-wider uppercase mb-3 block">Featured Project</p>
                <h3 className="text-3xl md:text-4xl font-bold font-outfit mb-6 text-gray-900 dark:text-white">GeoLet</h3>
                
                <div className="bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md p-6 md:p-8 rounded-[16px] border border-black/10 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.05)] mb-6 text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                  A modern, real-time geopolitical dashboard designed to monitor
                  global energy supplies, pipeline statuses, geopolitical conflicts, and market pricing.
                </div>
                
                <ul className="flex flex-wrap gap-4 mb-6 font-mono text-sm text-gray-700 dark:text-gray-300">
                  <li>JavaScript</li>
                  <li>Web APIs</li>
                  <li>Data Viz</li>
                </ul>
                
                <div className="flex items-center gap-4">
                  <a href="https://github.com/rohitjadhav005/GeoLet" target="_blank" rel="noreferrer" className="text-gray-900 dark:text-white transition-colors hover:text-gray-600 dark:hover:text-gray-300" aria-label="GitHub Repository">
                    <i className="ph ph-github-logo text-2xl"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project 2 */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
            
            {/* Image (Left side on desktop) */}
            <motion.div 
              className="md:col-span-7 md:col-start-1 row-start-1 relative z-10 w-full group"
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <div className="rounded-[16px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] bg-white/50 dark:bg-[#111]">
                <a href="https://github.com/rohitjadhav005/Vitality-AI" target="_blank" rel="noreferrer" className="block relative overflow-hidden aspect-video">
                  <img src={vitalityImg} alt="Vitality-AI Dashboard" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                </a>
              </div>
            </motion.div>

            {/* Content (Right side on desktop, overlapping) */}
            <motion.div 
              className="md:col-span-6 md:col-start-7 row-start-1 relative z-20 pointer-events-none"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <div className="pointer-events-auto md:text-right text-left">
                <p className="text-gray-900 dark:text-white font-mono text-xs font-semibold tracking-wider uppercase mb-3 block">Featured Project</p>
                <h3 className="text-3xl md:text-4xl font-bold font-outfit mb-6 text-gray-900 dark:text-white">Vitality-AI</h3>
                
                <div className="bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md p-6 md:p-8 rounded-[16px] border border-black/10 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.05)] mb-6 text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed md:text-right text-left">
                  AI-powered health analytics that predicts your energy and
                  productivity — so you can always be at your best.
                </div>
                
                <ul className="flex flex-wrap md:justify-end justify-start gap-4 mb-6 font-mono text-sm text-gray-700 dark:text-gray-300">
                  <li>Machine Learning</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                </ul>
                
                <div className="flex items-center md:justify-end justify-start gap-4">
                  <a href="https://github.com/rohitjadhav005/Vitality-AI" target="_blank" rel="noreferrer" className="text-gray-900 dark:text-white transition-colors hover:text-gray-600 dark:hover:text-gray-300" aria-label="GitHub Repository">
                    <i className="ph ph-github-logo text-2xl"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
