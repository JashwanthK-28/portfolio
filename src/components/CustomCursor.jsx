import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorOuterRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorOuter = cursorOuterRef.current;
    if (!cursor || !cursorOuter) return;

    let mouseX = -100;
    let mouseY = -100;
    let outerX = -100;
    let outerY = -100;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX - 5}px`;
      cursor.style.top = `${mouseY - 5}px`;
    };

    const animate = () => {
      outerX += (mouseX - outerX) * 0.18;
      outerY += (mouseY - outerY) * 0.18;
      cursorOuter.style.left = `${outerX - 16}px`;
      cursorOuter.style.top = `${outerY - 16}px`;
      rafId = requestAnimationFrame(animate);
    };

    const onMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        cursor.style.transform = "scale(1.6) rotate(45deg)";
        cursorOuter.style.transform = "scale(1.35)";
        cursorOuter.style.borderColor = "#FF5E5B";
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        cursor.style.transform = "scale(1) rotate(0deg)";
        cursorOuter.style.transform = "scale(1)";
        cursorOuter.style.borderColor = "#000000";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        ref={cursorRef}
        className="fixed w-2.5 h-2.5 bg-accent border border-black pointer-events-none z-[9999] transition-transform duration-150"
        style={{ willChange: "transform", left: "-100px", top: "-100px" }}
      />
      <div
        ref={cursorOuterRef}
        className="fixed w-8 h-8 pointer-events-none z-[9998] border-2 border-black"
        style={{
          willChange: "transform",
          left: "-100px",
          top: "-100px",
          transition: "transform 0.2s ease, border-color 0.2s ease",
        }}
      />
    </div>
  );
}
