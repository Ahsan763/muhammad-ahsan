import React from 'react';

interface MovingBarProps {
  text: string;
}

const MovingBar: React.FC<MovingBarProps> = ({ text }) => {
  const repeatedText = Array(10).fill(text).join(' • ');

  return (
    <div className="w-full h-16 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-16 bg-white shadow-xl animate-move-diag">
        <span className="text-black text-2xl whitespace-nowrap px-4 py-2">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MovingBar;