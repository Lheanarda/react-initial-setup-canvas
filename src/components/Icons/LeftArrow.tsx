import React from "react";

interface LeftArrowProps {
  className?: string;
  onClick: () => void;
}

const LeftArrow: React.FC<LeftArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={`rounded-full w-10 h-10 bg-white drop-shadow-md p-2 cursor-pointer hover:bg-gray-100 ${className}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#04ac4d"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M8 12.154c0-.636.292-1.219.8-1.6l4.611-3.362a.999.999 0 111.178 1.616l-4.6 3.354 4.563 3.004a1 1 0 01-1.104 1.668l-4.6-3.046C8.291 13.372 8 12.79 8 12.154z"></path>
      </svg>
    </div>
  );
};
export default LeftArrow;
