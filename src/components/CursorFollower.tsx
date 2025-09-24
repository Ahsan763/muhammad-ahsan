import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorFollower = () => {
  // 1. Ref to hold the dot element
  const dotRef = useRef(null);

  useEffect(() => {
    // Check if running on the client-side and if the dot ref is ready
    if (typeof window === 'undefined' || !dotRef.current) return;

    // 2. Function to handle mouse movement
    const handleMouseMove = (event: any) => {
      // Get the cursor coordinates
      const { clientX, clientY } = event;

      // 3. GSAP animation to follow the cursor
      // 'gsap.to' animates the target (dotRef.current) to the new position (x, y)
      // The duration controls the 'smoothness' or lag. 
      // A longer duration = more lag, which creates the smooth, trailing effect.
      // 'ease: "none"' ensures it's perfectly linear, as you requested.
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 1, // Adjust this value for more or less lag/smoothness
        ease: "elastic",  // Use "none" for a strictly linear movement
        // We set 'pointerEvents: "none"' in CSS, but 'overwrite: "auto"' is a good practice.
        overwrite: "auto",
      });
    };

    // 4. Attach the event listener
    window.addEventListener('mousemove', handleMouseMove);

    // 5. Cleanup function: important for Next.js and React!
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this runs once on mount

  // 6. Render the dot using Tailwind CSS
  // - fixed: Ensures it stays in place relative to the viewport.
  // - -translate-x-1/2 -translate-y-1/2: Centers the dot on the cursor tip.
  // - pointer-events-none: Crucial! Prevents the dot from blocking clicks on elements beneath it.
  return (
    <div
      ref={dotRef}
      className="fixed 
                 w-4 h-4 
                 bg-white 
                 rounded-full 
                 z-50 
                 -translate-x-1/2 -translate-y-1/2 
                 pointer-events-none"
      style={{ top: 0, left: 0 }} // Initial position (GSAP will handle movement)
    >
      {/*  */}
    </div>
  );
};

export default CursorFollower;