import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Extracted from JSON
const motionEvents = [
  {
    time_sec: 0.4,
    x: 385,
    y: 213,
    width: 168,
    height: 71,
    className: "w-[168px] h-[71px]",
    type: "structural_shift"
  },
  {
    time_sec: 0.4,
    x: 211,
    y: 175,
    width: 179,
    height: 129,
    className: "w-[179px] h-[129px]",
    type: "structural_shift"
  },
  {
    time_sec: 0.5,
    x: 177,
    y: 159,
    width: 402,
    height: 155,
    className: "w-[402px] h-[155px]",
    type: "structural_shift"
  }
];

export const ReplicatedMotion: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    // Schedule all shifts based on their time_sec relative to start
    const timeouts = motionEvents.map((event, i) => {
      return setTimeout(() => {
        setCurrentIndex(i);
      }, event.time_sec * 1000);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const currentEvent = currentIndex >= 0 ? motionEvents[currentIndex] : motionEvents[0];
  
  // Calculate transition duration based on the timeline shifts
  const getTransition = () => {
    if (currentIndex <= 0) {
      // First shift from initial (time 0) to first event (time 0.4)
      return { duration: motionEvents[0].time_sec, ease: "easeInOut" as const };
    }
    const current = motionEvents[currentIndex];
    const prev = motionEvents[currentIndex - 1];
    const duration = current.time_sec - prev.time_sec;
    
    return { 
      duration: duration > 0 ? duration : 0.01, 
      ease: "easeInOut" as const 
    };
  };

  return (
    <div className="relative w-full min-h-[500px] bg-slate-100 overflow-hidden rounded-lg shadow-inner">
      <motion.div
        layout
        initial={{
          x: motionEvents[0].x,
          y: motionEvents[0].y,
        }}
        animate={{
          x: currentEvent.x,
          y: currentEvent.y,
        }}
        transition={getTransition()}
        className={`absolute bg-indigo-500 rounded-xl shadow-2xl flex items-center justify-center text-white font-semibold text-sm ${currentEvent.className}`}
      >
        <div className="text-center">
          <p>Shift {currentIndex >= 0 ? currentIndex + 1 : 1}</p>
          <p className="text-xs opacity-75">{currentEvent.time_sec}s</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ReplicatedMotion;
