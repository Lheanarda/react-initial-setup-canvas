import React, { useEffect } from "react";

interface FallbackProps {
  isAnimating: boolean;
  setIsAnimating: (bool: boolean) => void;
}

const Fallback: React.FC<FallbackProps> = ({ isAnimating, setIsAnimating }) => {
  useEffect(() => {
    setIsAnimating(true);
    return () => {
      setIsAnimating(false);
    };
  }, [isAnimating, setIsAnimating]);
  return <></>;
};
export default Fallback;
