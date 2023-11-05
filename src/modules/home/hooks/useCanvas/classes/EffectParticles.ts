import { MAX_DISTANCE, TOTAL_PARTICLES } from "../constants";
import { CanvasEl } from "../typings/canvas";
import { EffectParticlesProps, SizeEffect } from "../typings/effect-particles";
import {
  handleCreateGradient,
  handleGetRandomCirclePosition,
  handleRandomRadius,
  hanldeGetDistanceBetween2Circle,
} from "../utils";
import Particle from "./Particle";

class EffectParticles {
  canvasEl: CanvasEl = {} as CanvasEl;

  particles: Particle[] = [];

  totalParticles: number = TOTAL_PARTICLES;

  size: SizeEffect = {
    height: 0,
    width: 0,
  };

  constructor({ canvasEl, size }: EffectParticlesProps) {
    this.canvasEl = canvasEl;
    this.size = size;

    //create style
    canvasEl.context.strokeStyle = "white";
    const gradient = handleCreateGradient(canvasEl.context, canvasEl.canvas);
    this.canvasEl.context.fillStyle = gradient;

    this.createParticles();
  }

  createParticles() {
    for (let i = 0; i < this.totalParticles; i++) {
      const radius = handleRandomRadius();
      const { x, y } = handleGetRandomCirclePosition(
        radius,
        this.size.width,
        this.size.height
      );

      this.particles.push(
        new Particle({
          canvasEl: this.canvasEl,
          position: { x, y },
          radius,
          effectParticle: this,
        })
      );
    }
  }

  handleParticles() {
    this.particles.forEach((p) => p.update());
    this.connectParticles();
  }

  connectParticles() {
    const { context } = this.canvasEl;
    for (let a = 0; a < this.totalParticles; a++) {
      for (let b = a; b < this.totalParticles; b++) {
        const { x: xA, y: yA } = this.particles[a].position;
        const { x: xB, y: yB } = this.particles[b].position;
        const distance = hanldeGetDistanceBetween2Circle(
          this.particles[a].position,
          this.particles[b].position
        );

        if (distance <= MAX_DISTANCE) {
          context.save();
          const opacity = 1 - distance / MAX_DISTANCE;
          context.globalAlpha = opacity;
          context.beginPath();
          context.moveTo(xA, yA);
          context.lineTo(xB, yB);

          context.stroke();
          context.restore();
        }
      }
    }
  }
}

export default EffectParticles;
