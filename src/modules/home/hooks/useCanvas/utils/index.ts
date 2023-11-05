import { Position } from "../typings/canvas";

export const handleRandomRadius = () => {
  return Math.floor(Math.random() * 10 + 1);
};

export const handleGetRandomCirclePosition = (
  radius: number,
  width: number,
  height: number
) => {
  return {
    x: radius + Math.random() * (width - radius * 2),
    y: radius + Math.random() * (height - radius * 2),
  };
};

export const handleCreateGradient = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) => {
  const gradient = context.createLinearGradient(
    0,
    0,
    canvas.width,
    canvas.height
  );
  gradient.addColorStop(0, "white");
  gradient.addColorStop(0.5, "gold");
  gradient.addColorStop(1, "orangered");
  return gradient;
};

export const handleGetRandomVelocity = () => {
  return Math.random() * 1 - 0.5; //between -0.5 to 1
};

export const hanldeGetDistanceBetween2Circle = (
  positionA: Position,
  positionB: Position
) => {
  const dx = positionA.x - positionB.x;
  const dy = positionA.y - positionB.y;
  return Math.sqrt(dx * dx + dy * dy);
};
