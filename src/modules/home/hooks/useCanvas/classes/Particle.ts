import { CanvasEl, Position } from "../typings/canvas";
import { ParticleProps, Velocity } from "../typings/particle";
import { handleGetRandomVelocity } from "../utils";

class Particle {
  position: Position = {
    x: 0,
    y: 0,
  };

  canvasEl: CanvasEl = {} as CanvasEl;

  radius = 0;

  velocity: Velocity = {
    x: handleGetRandomVelocity(),
    y: handleGetRandomVelocity(),
  };

  constructor({ canvasEl, position, radius }: ParticleProps) {
    this.canvasEl = canvasEl;
    this.position = position;
    this.radius = radius;
  }

  draw() {
    const { context } = this.canvasEl;
    const { x, y } = this.position;
    context.beginPath();
    context.arc(x, y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
  }

  update() {
    this.draw();

    const { canvas } = this.canvasEl;

    if (this.position.x >= canvas.width || this.position.x <= 0)
      this.velocity.x *= -1;

    if (this.position.y >= canvas.height || this.position.y <= 0)
      this.velocity.y *= -1;

    this.position.x += this.velocity.x;

    this.position.y += this.velocity.y;
  }
}

export default Particle;
