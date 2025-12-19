import { useEffect } from "react";

export default function CursorMagnet() {
  useEffect(() => {
    const targets = document.querySelectorAll("a, button");

    const handleMouseMove = (e) => {
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        const distance = Math.sqrt(x * x + y * y);

        if (distance < 100) {
          el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
        } else {
          el.style.transform = "translate(0, 0)";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      targets.forEach((el) => (el.style.transform = "translate(0, 0)"));
    };
  }, []);

  return null;
}
