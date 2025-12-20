import { useEffect } from "react";

export default function CursorMagnet() {
  useEffect(() => {
    const targets = document.querySelectorAll("a:not(.nav-icon), button");

    const clamp = (value, min, max) =>
      Math.min(Math.max(value, min), max);

    const handleMouseMove = (e) => {
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();

        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        const distance = Math.sqrt(x * x + y * y);

        if (distance < 100) {
          const moveX = clamp(x * 0.08, -12, 12);
          const moveY = clamp(y * 0.08, -12, 12);

          el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          el.style.transform = "translate(0px, 0px)";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      targets.forEach((el) => (el.style.transform = "translate(0px, 0px)"));
    };
  }, []);

  return null;
}
