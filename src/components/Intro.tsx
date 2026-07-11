import { motion } from "framer-motion";

const Intro = () => {
  const text = "ROHIT";
  
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.4 
      }
    }
  };

  const child = {
    hidden: { y: "100%", opacity: 0, rotate: 10 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] text-[#fff0e5] overflow-hidden"
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 } 
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex overflow-hidden pb-4"
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            className="text-7xl md:text-9xl lg:text-[12rem] font-outfit font-black tracking-tighter leading-none"
            style={{ display: "inline-block" }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Intro;
