import { useEffect } from "react";

export default function CursorMagnet() {
  useEffect(() => {
    // ❌ Disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const targets = document.querySelectorAll("a, button");

    const handleMouseMove = (e) => {
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        const distance = Math.sqrt(x * x + y * y);

        if (distance < 80) {
          el.style.transform = `translate3d(${x * 0.05}px, ${y * 0.05}px, 0)`;
        } else {
          el.style.transform = "translate3d(0, 0, 0)";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      targets.forEach((el) => {
        el.style.transform = "translate3d(0, 0, 0)";
      });
    };
  }, []);

  return null;
}
