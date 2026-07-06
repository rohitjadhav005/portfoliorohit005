import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Expertise = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotateXRaw = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateY1Raw = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]);
  const rotateY2Raw = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  // Disable on mobile to keep layout simple
  const rotateX = isMobile ? 0 : rotateXRaw;
  const rotateY1 = isMobile ? 0 : rotateY1Raw;
  const rotateY2 = isMobile ? 0 : rotateY2Raw;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftCategoryVariants = {
    hidden: { opacity: 0, x: -100, rotateX: -15 },
    visible: { opacity: 1, x: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] as const } }
  };

  const centerCategoryVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] as const } }
  };

  const rightCategoryVariants = {
    hidden: { opacity: 0, x: 100, rotateX: -15 },
    visible: { opacity: 1, x: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] as const } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const skillChipClass = "px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[12px] flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]";

  return (
    <section ref={sectionRef} id="skills" className="py-12 md:py-24 relative perspective-2000">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          className="mb-8 md:mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold tracking-tight mb-3 font-outfit text-gray-900 dark:text-white">Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 text-[1rem] md:text-[1.1rem]">Technologies I work with</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 preserve-3d"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* Category 1 */}
          <motion.div 
            variants={leftCategoryVariants}
            style={{ rotateX, rotateY: rotateY1 }}
            whileHover={{ scale: 1.02, rotateY: 5, z: 20 }}
            className="bg-white/80 dark:bg-[#191919]/60 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[20px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-xl"
          >
            <h3 className="text-xl font-semibold font-outfit mb-6 pb-4 border-b border-black/10 dark:border-white/10 text-gray-900 dark:text-white">Data Science &amp; ML</h3>
            <div className="flex flex-wrap gap-3">
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-file-py text-gray-900 dark:text-white"></i> Python
              </motion.div>
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-math-operations text-gray-900 dark:text-white"></i> NumPy &amp; Pandas
              </motion.div>
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-brain text-gray-900 dark:text-white"></i> Scikit-learn
              </motion.div>
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-chart-line-up text-gray-900 dark:text-white"></i> Matplotlib
              </motion.div>
            </div>
          </motion.div>

          {/* Category 2 */}
          <motion.div 
            variants={centerCategoryVariants}
            style={{ rotateX, rotateY: rotateY2 }}
            whileHover={{ scale: 1.02, rotateY: 5, z: 20 }}
            className="bg-white/80 dark:bg-[#191919]/60 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[20px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-xl"
          >
            <h3 className="text-xl font-semibold font-outfit mb-6 pb-4 border-b border-black/10 dark:border-white/10 text-gray-900 dark:text-white">Backend &amp; APIs</h3>
            <div className="flex flex-wrap gap-3">
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-lightning text-gray-900 dark:text-white"></i> FastAPI
              </motion.div>
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-coffee text-gray-900 dark:text-white"></i> Java
              </motion.div>
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-database text-gray-900 dark:text-white"></i> SQL &amp; SQLite
              </motion.div>
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-plugs text-gray-900 dark:text-white"></i> REST APIs
              </motion.div>
            </div>
          </motion.div>

          {/* Category 3 */}
          <motion.div 
            variants={rightCategoryVariants}
            style={{ rotateX, rotateY: rotateY1 }}
            whileHover={{ scale: 1.02, rotateY: 5, z: 20 }}
            className="bg-white/80 dark:bg-[#191919]/60 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[20px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-xl"
          >
            <h3 className="text-xl font-semibold font-outfit mb-6 pb-4 border-b border-black/10 dark:border-white/10 text-gray-900 dark:text-white">Frontend &amp; Tools</h3>
            <div className="flex flex-wrap gap-3">
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-file-js text-gray-900 dark:text-white"></i> JavaScript
              </motion.div>
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-atom text-gray-900 dark:text-white"></i> React
              </motion.div>
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-git-branch text-gray-900 dark:text-white"></i> Git &amp; GitHub
              </motion.div>
              <motion.div variants={itemVariants} className={skillChipClass}>
                <i className="ph ph-terminal-window text-gray-900 dark:text-white"></i> Terminal
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
