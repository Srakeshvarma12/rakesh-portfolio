import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dotRef.current.style.transform =
        `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      ringRef.current.style.transform =
        `translate(${ringX}px, ${ringY}px)`;

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
      />
    </>
  );
}
