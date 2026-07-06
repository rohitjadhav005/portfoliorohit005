import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const About = () => {
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
  const rotateY1Raw = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const rotateY2Raw = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  // Disable on mobile to keep layout simple
  const rotateX = isMobile ? 0 : rotateXRaw;
  const rotateY1 = isMobile ? 0 : rotateY1Raw;
  const rotateY2 = isMobile ? 0 : rotateY2Raw;

  const leftCardVariants = {
    hidden: { opacity: 0, x: -100, rotateX: -15, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: custom * 0.15,
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99] as const,
      }
    })
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 100, rotateX: -15, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: custom * 0.15,
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99] as const,
      }
    })
  };

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-[120px] relative perspective-1000">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="mb-8 md:mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold tracking-tight mb-3 font-outfit text-gray-900 dark:text-white">Behind the Code</h2>
          <p className="text-gray-600 dark:text-gray-400 text-[1rem] md:text-[1.1rem]">Get to know me and my journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 preserve-3d">
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={leftCardVariants}
            style={{ rotateX, rotateY: rotateY1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2, z: 20 }}
            className="md:col-span-2 relative z-10 preserve-3d backface-hidden bg-white/80 dark:bg-[#191919]/60 backdrop-blur-md rounded-[24px] p-8 border border-black/10 dark:border-white/10 transition-colors duration-300 hover:bg-white dark:hover:bg-[#232323]/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
          >
            <i className="ph ph-user-focus text-4xl text-gray-900 dark:text-white mb-6"></i>
            <h3 className="text-2xl font-semibold mb-4 font-outfit text-gray-900 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a fourth-year Artificial Intelligence & Data Science student at Savitribai Phule Pune
              University (SPPU). I build systems that are intelligent, scalable, and built to solve real
              problems.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={rightCardVariants}
            style={{ rotateX, rotateY: rotateY2 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5, z: 30 }}
            className="md:col-span-1 relative z-20 preserve-3d backface-hidden bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-[24px] p-8 border border-black/10 dark:border-white/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] flex flex-col justify-center items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
          >
            <h2 className="text-[3.5rem] font-bold font-outfit text-gray-900 dark:text-white mb-2">AI</h2>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-widest">& Data Science<br />Student</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={leftCardVariants}
            style={{ rotateX, rotateY: rotateY1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, z: 30 }}
            className="md:col-span-1 relative z-30 preserve-3d backface-hidden bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-[24px] p-8 border border-black/10 dark:border-white/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] flex flex-col justify-center items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
          >
            <h2 className="text-[3.5rem] font-bold font-outfit text-gray-900 dark:text-white mb-2">ML</h2>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-widest">& Full Stack<br />Engineer</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={3}
            variants={rightCardVariants}
            style={{ rotateX, rotateY: rotateY2 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            whileHover={{ scale: 1.02, rotateY: -2, rotateX: -2, z: 20 }}
            className="md:col-span-2 relative z-40 preserve-3d backface-hidden bg-white/80 dark:bg-[#191919]/60 backdrop-blur-md rounded-[24px] p-8 border border-black/10 dark:border-white/10 transition-colors duration-300 hover:bg-white dark:hover:bg-[#232323]/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
          >
            <i className="ph ph-lightbulb text-4xl text-gray-900 dark:text-white mb-6"></i>
            <h3 className="text-2xl font-semibold mb-4 font-outfit text-gray-900 dark:text-white">My Philosophy</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              "Focused on building intelligent systems, solving real-world problems, and continuously
              improving through learning and development. From predictive models to production APIs, I'm
              focused on writing code that ships and creates value."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
