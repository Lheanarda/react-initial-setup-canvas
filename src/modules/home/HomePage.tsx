import React, { useRef } from "react";
import Canvas from "../../components/canvas";
import useCanvas from "./hooks/useCanvas";

const HomePage: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useCanvas(ref);

  return <Canvas className=" w-full bg-black" ref={ref} />;
};
export default HomePage;
