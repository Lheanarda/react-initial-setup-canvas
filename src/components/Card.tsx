import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={`p-3 bg-white shadow w-full rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default Card;
