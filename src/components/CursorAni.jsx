import React, { useState, useEffect } from 'react';

const CursorAni = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  let timeoutId;

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);

    // Reset the timeout whenever the cursor moves
    resetTimeout();
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const resetTimeout = () => {
    // Clear the previous timeout
    clearTimeout(timeoutId);

    // Set a new timeout to hide the cursor after 3 seconds
    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  useEffect(() => {
    // Attach event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Set an initial timeout to hide the cursor after 3 seconds on component mount
    resetTimeout();

    return () => {
      // Clean up event listeners and timeout on component unmount
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <div
            className="z-0 cursor fixed w-16 h-16 border-slate-700 border-2 rounded-full left-0 top-0 pointer-events-none -translate-x-[50%] -translate-y-[50%]"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          ></div>
          <div
            className="z-0 cursor2 fixed opacity-50 w-14 h-14 bg-slate-700 rounded-full left-0 top-0 pointer-events-none -translate-x-[50%] -translate-y-[50%]"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          ></div>
        </>
      )}
    </>
  );
};

export default CursorAni;
