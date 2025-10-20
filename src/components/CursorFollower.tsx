import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CursorFollower = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !dotRef.current) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.6,     // more delay (0.5–0.8 feels smooth)
        ease: "power3.out", // smooth and natural easing
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={dotRef}
      className="hidden md:block fixed w-4 h-4 bg-white rounded-full z-50
                 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ top: 0, left: 0 }}
    />
  );
};

export default CursorFollower;
