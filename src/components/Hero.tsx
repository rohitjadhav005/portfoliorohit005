import HeroIllustration from "./HeroIllustration";
import { motion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const svgVariants: Variants = {
  hidden: { x: 50, opacity: 0, scale: 0.95 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.4 }
  }
};

const Hero = () => {

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-14 md:pt-20 overflow-hidden">
      {/* Massive Outline Background Text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
        animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 pointer-events-none select-none"
      >
        <div className="text-[15vw] font-outfit font-black uppercase text-transparent whitespace-nowrap opacity-[0.04] dark:opacity-[0.03] [-webkit-text-stroke:2px_#000] dark:[-webkit-text-stroke:2px_#fff]">
          ROHIT JADHAV
        </div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
        className="max-w-[1200px] mx-auto px-5 w-full flex flex-col md:flex-row items-center gap-5 md:gap-12 z-10 py-4 md:py-0"
      >
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <motion.div variants={itemVariants} className="w-full flex justify-center md:justify-start mb-4 md:mb-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
              <span className="text-[9px] md:text-[10px] font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                Available for opportunities
              </span>
            </div>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-outfit text-[2.4rem] sm:text-5xl md:text-[5rem] font-bold leading-[1.05] tracking-tight mb-3 md:mb-6 text-gray-900 dark:text-white">
            AI & DATA
            <br />
            <span>
              ENGINEER
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-xl max-w-[500px] mb-5 md:mb-10 leading-relaxed font-light">
            Building intelligent, scalable systems at the intersection of Machine Learning and Full-Stack Engineering.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-row flex-nowrap justify-center md:justify-start gap-3 mt-0 md:mt-0">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold bg-gray-900 dark:bg-white text-white dark:text-[#050505] transition-transform hover:scale-105 no-underline overflow-hidden group shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] text-sm sm:text-base whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                Explore Work <i className="ph ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </span>
            </a>
            <a
              href="https://github.com/rohitjadhav005"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold bg-transparent text-gray-900 dark:text-white border border-gray-900/20 dark:border-white/20 transition-all hover:bg-gray-900/5 dark:hover:bg-white/10 hover:border-gray-900/40 dark:hover:border-white/40 no-underline overflow-hidden text-sm sm:text-base whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                <i className="ph ph-github-logo text-xl"></i> GitHub
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div variants={svgVariants} className="flex-1 w-full max-w-[340px] sm:max-w-[480px] md:max-w-[580px] mx-auto md:mx-0">
          {/* Cartoon Developer Animation SVG */}
          <div className="relative w-full aspect-[58/48] max-h-[220px] sm:max-h-[300px] md:max-h-none">
            {/* SVG Content from index.html line 98 to 376 will be placed here.
                Due to size, I am wrapping it in a dedicated SVG block */}
            <HeroIllustration />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
