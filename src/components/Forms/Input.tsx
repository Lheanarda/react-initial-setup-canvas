import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefixImg?: string;
  className?: string;
  errMsg?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errMsg, prefixImg, ...rest }, ref) => {
    return (
      <div className="w-full relative">
        {prefixImg && (
          <img src={prefixImg} alt="" className="absolute top-3.5 left-3 w-5" />
        )}
        <input
          ref={ref}
          {...rest}
          className={`w-full py-2.5 px-3 border-2 border-gray-300 rounded focus:outline-none focus:ring-primary  transition-shadow duration-200 focus:ring-2 ${
            prefixImg ? "pl-10" : ""
          }`}
        />
        {errMsg && (
          <div className="text-red-600 text-sm font-bold">{errMsg}</div>
        )}
      </div>
    );
  }
);

export default Input;
