import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} w-full py-2 px-5 rounded text-white bg-primary`}
    >
      {children}
    </button>
  );
};
export default Button;
