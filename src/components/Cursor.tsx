import { useEffect, useRef } from "react";

interface CursorProps {
  isDark: boolean;
}

const Cursor = ({ isDark }: CursorProps) => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
        
        // Add slight delay to outline for smooth trailing effect
        cursorOutlineRef.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: "forwards" }
        );
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        if (cursorOutlineRef.current) {
          cursorOutlineRef.current.style.width = "60px";
          cursorOutlineRef.current.style.height = "60px";
          // We can just use CSS classes for this or leave the inline style transparent/semi-transparent
          cursorOutlineRef.current.style.backgroundColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
        }
      }
    };

    const handleMouseOut = () => {
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.width = "40px";
        cursorOutlineRef.current.style.height = "40px";
        cursorOutlineRef.current.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isDark]);

  return (
    <>
      <div 
        ref={cursorDotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-gray-900 dark:bg-white rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999]"
      ></div>
      <div 
        ref={cursorOutlineRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-gray-900/50 dark:border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] transition-[width,height,background-color] duration-200"
      ></div>
    </>
  );
};

export default Cursor;
