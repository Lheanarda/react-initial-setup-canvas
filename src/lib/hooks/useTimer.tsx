import { useEffect, useState } from "react";

export const useTimer = (numb: number) => {
  const [timer, setTimer] = useState<number>(numb);
  const [stopTimer, setStopTimer] = useState<boolean>(false);

  useEffect(() => {
    if (timer > 0 && !stopTimer) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer, stopTimer]);

  const handleStopTimer = () => {
    setTimer(0);
    setStopTimer(true);
  };

  return { timer, handleStopTimer, setTimer };
};
