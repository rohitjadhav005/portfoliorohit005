import { useEffect, useRef } from "react";

interface CursorProps {
  isDark: boolean;
}

const Cursor = ({ isDark }: CursorProps) => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;
    if (!dot || !outline) return;

    // Show cursor on first real mouse move, hide on touch
    // This is reliable across all device types including touchscreen laptops
    const showCursor = () => {
      dot.style.opacity = "1";
      outline.style.opacity = "1";
    };

    const hideCursor = () => {
      dot.style.opacity = "0";
      outline.style.opacity = "0";
    };

    const handleMouseMove = (e: MouseEvent) => {
      showCursor();
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      // Smooth trailing outline
      outline.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 500, fill: "forwards" }
      );
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        outline.style.width = "60px";
        outline.style.height = "60px";
        outline.style.backgroundColor = isDark
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)";
      }
    };

    const handleMouseOut = () => {
      outline.style.width = "40px";
      outline.style.height = "40px";
      outline.style.backgroundColor = "transparent";
    };

    // Touch devices: hide custom cursor when touch input is used
    const handleTouchStart = () => hideCursor();

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isDark]);

  return (
    <>
      {/* Cursor dot — starts hidden off-screen, shown on first mousemove */}
      <div
        ref={cursorDotRef}
        style={{ opacity: 0, left: "-9999px", top: "-9999px" }}
        className="fixed w-2 h-2 bg-gray-900 dark:bg-white rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] transition-opacity duration-150"
      />
      {/* Cursor outline ring */}
      <div
        ref={cursorOutlineRef}
        style={{ opacity: 0, left: "-9999px", top: "-9999px" }}
        className="fixed w-10 h-10 border border-gray-900/50 dark:border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] transition-[width,height,background-color,opacity] duration-200"
      />
    </>
  );
};

export default Cursor;
