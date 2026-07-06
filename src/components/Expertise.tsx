import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const Expertise = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99] as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const skillChipClass = "px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[12px] flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300 hover:bg-black/10 dark:hover:bg-white/10 hover:border-[#00f2fe] hover:text-gray-900 dark:hover:text-white hover:shadow-[0_0_15px_rgba(0,242,254,0.3)]";

  return (
    <section id="skills" className="py-12 md:py-24 relative perspective-2000">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          className="mb-8 md:mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[3rem] font-bold tracking-tight mb-3 font-outfit text-gray-900 dark:text-white">Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 text-[1.1rem]">Technologies I work with</p>
        </motion.div>

        {isMobile ? (
          <ScrollStack
            itemDistance={8}
            itemScale={0.03}
            itemStackDistance={18}
            stackPosition="15%"
            scaleEndPosition="5%"
            baseScale={0.85}
            scaleDuration={0.5}
            rotationAmount={0}
            blurAmount={0}
            useWindowScroll={true}
          >
            {/* Card 1 — Data Science & ML */}
            <ScrollStackItem itemClassName="bg-white dark:bg-[#191919] rounded-[24px] p-6 md:p-8 border border-black/10 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
              <i className="ph ph-brain text-4xl text-[#00f2fe] mb-6"></i>
              <h3 className="text-2xl font-semibold font-outfit mb-6 pb-4 border-b border-black/10 dark:border-white/10 text-gray-900 dark:text-white">Data Science &amp; ML</h3>
              <div className="flex flex-wrap gap-3">
                <div className={skillChipClass}><i className="ph ph-file-py text-[#00f2fe]"></i> Python</div>
                <div className={skillChipClass}><i className="ph ph-math-operations text-[#00f2fe]"></i> NumPy &amp; Pandas</div>
                <div className={skillChipClass}><i className="ph ph-brain text-[#00f2fe]"></i> Scikit-learn</div>
                <div className={skillChipClass}><i className="ph ph-chart-line-up text-[#00f2fe]"></i> Matplotlib</div>
              </div>
            </ScrollStackItem>

            {/* Card 2 — Backend & APIs */}
            <ScrollStackItem itemClassName="bg-white dark:bg-[#191919] rounded-[24px] p-6 md:p-8 border border-black/10 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
              <i className="ph ph-plugs text-4xl text-[#00f2fe] mb-6"></i>
              <h3 className="text-2xl font-semibold font-outfit mb-6 pb-4 border-b border-black/10 dark:border-white/10 text-gray-900 dark:text-white">Backend &amp; APIs</h3>
              <div className="flex flex-wrap gap-3">
                <div className={skillChipClass}><i className="ph ph-lightning text-[#00f2fe]"></i> FastAPI</div>
                <div className={skillChipClass}><i className="ph ph-coffee text-[#00f2fe]"></i> Java</div>
                <div className={skillChipClass}><i className="ph ph-database text-[#00f2fe]"></i> SQL &amp; SQLite</div>
                <div className={skillChipClass}><i className="ph ph-plugs text-[#00f2fe]"></i> REST APIs</div>
              </div>
            </ScrollStackItem>

            {/* Card 3 — Frontend & Tools */}
            <ScrollStackItem itemClassName="bg-white dark:bg-[#191919] rounded-[24px] p-6 md:p-8 border border-black/10 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
              <i className="ph ph-atom text-4xl text-[#00f2fe] mb-6"></i>
              <h3 className="text-2xl font-semibold font-outfit mb-6 pb-4 border-b border-black/10 dark:border-white/10 text-gray-900 dark:text-white">Frontend &amp; Tools</h3>
              <div className="flex flex-wrap gap-3">
                <div className={skillChipClass}><i className="ph ph-file-js text-[#00f2fe]"></i> JavaScript</div>
                <div className={skillChipClass}><i className="ph ph-atom text-[#00f2fe]"></i> React</div>
                <div className={skillChipClass}><i className="ph ph-git-branch text-[#00f2fe]"></i> Git &amp; GitHub</div>
                <div className={skillChipClass}><i className="ph ph-terminal-window text-[#00f2fe]"></i> Terminal</div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 preserve-3d"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Category 1 */}
            <motion.div 
              variants={categoryVariants}
              whileHover={{ scale: 1.02, rotateY: 5, z: 20 }}
              className="bg-white/80 dark:bg-[#191919]/60 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[20px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-xl"
            >
              <h3 className="text-xl font-semibold font-outfit mb-6 pb-4 border-b border-black/10 dark:border-white/10 text-gray-900 dark:text-white">Data Science &amp; ML</h3>
              <div className="flex flex-wrap gap-3">
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-file-py text-[#00f2fe]"></i> Python
                </motion.div>
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-math-operations text-[#00f2fe]"></i> NumPy &amp; Pandas
                </motion.div>
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-brain text-[#00f2fe]"></i> Scikit-learn
                </motion.div>
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-chart-line-up text-[#00f2fe]"></i> Matplotlib
                </motion.div>
              </div>
            </motion.div>

            {/* Category 2 */}
            <motion.div 
              variants={categoryVariants}
              whileHover={{ scale: 1.02, rotateY: 5, z: 20 }}
              className="bg-white/80 dark:bg-[#191919]/60 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[20px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-xl"
            >
              <h3 className="text-xl font-semibold font-outfit mb-6 pb-4 border-b border-black/10 dark:border-white/10 text-gray-900 dark:text-white">Backend &amp; APIs</h3>
              <div className="flex flex-wrap gap-3">
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-lightning text-[#00f2fe]"></i> FastAPI
                </motion.div>
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-coffee text-[#00f2fe]"></i> Java
                </motion.div>
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-database text-[#00f2fe]"></i> SQL &amp; SQLite
                </motion.div>
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-plugs text-[#00f2fe]"></i> REST APIs
                </motion.div>
              </div>
            </motion.div>

            {/* Category 3 */}
            <motion.div 
              variants={categoryVariants}
              whileHover={{ scale: 1.02, rotateY: 5, z: 20 }}
              className="bg-white/80 dark:bg-[#191919]/60 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[20px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-xl"
            >
              <h3 className="text-xl font-semibold font-outfit mb-6 pb-4 border-b border-black/10 dark:border-white/10 text-gray-900 dark:text-white">Frontend &amp; Tools</h3>
              <div className="flex flex-wrap gap-3">
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-file-js text-[#00f2fe]"></i> JavaScript
                </motion.div>
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-atom text-[#00f2fe]"></i> React
                </motion.div>
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-git-branch text-[#00f2fe]"></i> Git &amp; GitHub
                </motion.div>
                <motion.div variants={itemVariants} className={skillChipClass}>
                  <i className="ph ph-terminal-window text-[#00f2fe]"></i> Terminal
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Expertise;
