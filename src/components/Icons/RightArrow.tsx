import React from "react";

interface RightArrowProps {
  className?: string;
  onClick: () => void;
}

const RightArrow: React.FC<RightArrowProps> = ({ className, onClick }) => {
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
        <path d="M16 12.154c0-.636-.292-1.219-.8-1.6l-4.61-3.362a1 1 0 00-1.179 1.616l4.6 3.354-4.564 3.004a1 1 0 001.104 1.668l4.6-3.046c.559-.416.849-.998.849-1.634z"></path>
      </svg>
    </div>
  );
};
export default RightArrow;
