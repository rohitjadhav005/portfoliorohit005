import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { PaperPlaneTilt, X, GithubLogo, LinkedinLogo, TwitterLogo, CheckCircle } from "@phosphor-icons/react";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send Message");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [displayText, setDisplayText] = useState("");
  const text = "Let's Connect";

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayText(text.slice(0, i) + (i < text.length ? "|" : ""));
        if (i > text.length) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setDisplayText("");
    }
  }, [isInView]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonText("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "59dd9fbd-5732-456b-bff3-8b012fc6d947");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setButtonText("Send Message");
        event.currentTarget.reset();
      } else {
        console.error("Web3Forms error:", data);
        setButtonText("Error sending");
        setTimeout(() => {
          setButtonText("Send Message");
        }, 3000);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setButtonText("Error sending");
      setTimeout(() => {
        setButtonText("Send Message");
      }, 3000);
    }
  };

  return (
    <section ref={containerRef} id="contact" className="py-12 md:py-[120px] relative overflow-hidden perspective-2000">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-black/5 dark:bg-white/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] font-bold font-outfit mb-4 leading-tight text-gray-900 dark:text-white">{displayText}</motion.h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-[600px] mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isFormVisible ? (
            <motion.div
              key="button"
              className="w-full flex justify-center mt-4"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setIsFormVisible(true)}
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold font-outfit text-lg rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-all flex items-center gap-3"
              >
                <PaperPlaneTilt className="text-2xl" /> Send me a message
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              className="w-full max-w-[800px] preserve-3d"
              initial={{ opacity: 0, rotateX: 10, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.25 }}
            >
              <div className="bg-white/80 dark:bg-[#111111]/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[24px] p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
                <button 
                  onClick={() => {
                    setIsFormVisible(false);
                    setTimeout(() => setIsSuccess(false), 400); // reset state after fade out
                  }}
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/60 dark:bg-[#1a1a1a] text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors z-10"
                  aria-label="Close form"
                >
                  <X className="text-lg" />
                </button>
                
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center py-8 md:py-12"
                  >
                    <div className="w-20 h-20 bg-[#4ade80]/20 text-[#22c55e] dark:text-[#4ade80] rounded-full flex items-center justify-center mb-6">
                      <CheckCircle weight="fill" className="text-5xl" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold font-outfit text-gray-900 dark:text-white mb-3">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8 max-w-[400px]">
                      Your message has been sent successfully. I will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-3 border-2 border-gray-200 dark:border-gray-800 rounded-full font-bold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} className="flex flex-col gap-5 md:gap-6 mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-6">
                      <div className="flex-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2 font-outfit">Your Name</label>
                        <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full bg-white/60 dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/30 dark:focus:ring-white/30 transition-all" />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2 font-outfit">Your Email</label>
                        <input type="email" id="email" name="email" required placeholder="john@example.com" className="w-full bg-white/60 dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/30 dark:focus:ring-white/30 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2 font-outfit">Message</label>
                      <textarea id="message" name="message" required rows={4} placeholder="Tell me about your project..." className="w-full bg-white/60 dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/30 dark:focus:ring-white/30 transition-all resize-none"></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="mt-2 w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold font-outfit text-lg py-4 rounded-xl hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all"
                    >
                      {buttonText}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer minimal */}
      <div className="mt-10 md:mt-[80px] pt-8 border-t border-black/10 dark:border-white/5 flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-6 text-gray-600 dark:text-gray-500 text-sm gap-3 md:gap-0">
        <p>&copy; {new Date().getFullYear()} Rohit Jadhav. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/rohitjadhav005" className="hover:text-gray-900 dark:hover:text-white transition-colors"><GithubLogo className="text-xl" /></a>
          <a href="https://www.linkedin.com/in/rohit-jadhav-bba22731a/" className="hover:text-gray-900 dark:hover:text-white transition-colors"><LinkedinLogo className="text-xl" /></a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors"><TwitterLogo className="text-xl" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
