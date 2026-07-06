import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import geoletImg from "../assets/geolet.png";
import vitalityImg from "../assets/vitality.png";

const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} id="projects" className="py-12 md:py-24 relative bg-gradient-to-b from-transparent via-black/[0.02] dark:via-white/[0.02] to-transparent perspective-2000 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          className="mb-8 md:mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[3rem] font-bold tracking-tight mb-3 font-outfit text-gray-900 dark:text-white">Featured Work</h2>
          <p className="text-gray-600 dark:text-gray-400 text-[1.1rem]">Some of my recent projects</p>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-32">
          {/* Project 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 group preserve-3d">
            <motion.div 
              className="flex-1 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#4facfe] font-mono text-sm font-semibold tracking-wider uppercase mb-4 block">2024</span>
              <h3 className="text-4xl font-bold font-outfit mb-6 text-gray-900 dark:text-white">GeoLet</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                A modern, real-time geopolitical dashboard designed to monitor
                global energy supplies, pipeline statuses, geopolitical conflicts, and market pricing.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300">JavaScript</span>
                <span className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300">Web APIs</span>
                <span className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300">Data Visualization</span>
              </div>
              <div>
                <a href="https://github.com/rohitjadhav005/GeoLet" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-semibold transition-colors hover:text-[#4facfe] dark:hover:text-[#4facfe] no-underline">
                  <i className="ph ph-github-logo text-xl"></i> Source
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex-1 order-1 lg:order-2 w-full"
              style={{ y: y1 }}
              initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.05, rotateY: -10, rotateX: 5 }}
            >
              <div className="rounded-[16px] overflow-hidden border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#191919]/60 backdrop-blur-md shadow-2xl transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(79,172,254,0.2)]">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-[#0a0a0a] border-b border-black/10 dark:border-white/10">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                </div>
                <div className="relative overflow-hidden bg-gray-200 dark:bg-[#111] aspect-video">
                  <img src={geoletImg} alt="GeoLet Dashboard" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 group preserve-3d">
            <motion.div 
              className="flex-1 order-2 lg:order-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#00f2fe] font-mono text-sm font-semibold tracking-wider uppercase mb-4 block">2024</span>
              <h3 className="text-4xl font-bold font-outfit mb-6 text-gray-900 dark:text-white">Vitality-AI</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                AI-powered health analytics that predicts your energy and
                productivity — so you can always be at your best.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300">Machine Learning</span>
                <span className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300">Python</span>
                <span className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300">JavaScript</span>
              </div>
              <div>
                <a href="https://github.com/rohitjadhav005/Vitality-AI" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-semibold transition-colors hover:text-[#00f2fe] dark:hover:text-[#00f2fe] no-underline">
                  <i className="ph ph-github-logo text-xl"></i> Source
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex-1 order-1 lg:order-2 w-full"
              style={{ y: y2 }}
              initial={{ opacity: 0, rotateY: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
            >
              <div className="rounded-[16px] overflow-hidden border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#191919]/60 backdrop-blur-md shadow-2xl transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,242,254,0.2)]">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-[#0a0a0a] border-b border-black/10 dark:border-white/10">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                </div>
                <div className="relative overflow-hidden bg-gray-200 dark:bg-[#111] aspect-video">
                  <img src={vitalityImg} alt="Vitality-AI Dashboard" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
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
