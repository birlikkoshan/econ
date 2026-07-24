import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type HeroSphereProps = {
  className?: string;
};

/** Изумруд бренда (~#2D6A4F) и оттенки для объёмного шейдинга. */
const BRAND = { r: 45, g: 106, b: 79 };
const BRAND_LIGHT = { r: 64, g: 145, b: 108 };
const BRAND_DEEP = { r: 32, g: 78, b: 58 };

type Vec3 = { x: number; y: number; z: number };

function rotateY(p: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: p.x * cos - p.z * sin, y: p.y, z: p.x * sin + p.z * cos };
}

function rotateX(p: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: p.x, y: p.y * cos - p.z * sin, z: p.y * sin + p.z * cos };
}

function project(
  p: Vec3,
  cx: number,
  cy: number,
  angleY: number,
  angleX: number,
): Vec3 {
  const rotated = rotateX(rotateY(p, angleY), angleX);
  return { x: cx + rotated.x, y: cy + rotated.y, z: rotated.z };
}

/**
 * Полупрозрачная вращающаяся сфера на Canvas — декоративный акцент hero-секции.
 */
export function HeroSphere({ className }: HeroSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let angleY = 0;
    const angleX = 0.32;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawCurve = (
      points: Vec3[],
      stroke: string,
      lineWidth: number,
      backCutoff: number,
    ) => {
      ctx.beginPath();
      let drawing = false;

      for (const point of points) {
        if (point.z < backCutoff) {
          drawing = false;
          continue;
        }
        if (!drawing) {
          ctx.moveTo(point.x, point.y);
          drawing = true;
        } else {
          ctx.lineTo(point.x, point.y);
        }
      }

      ctx.strokeStyle = stroke;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const size = Math.min(width, height);
      const cx = width / 2;
      const cy = height / 2;
      const radius = size * 0.43;

      ctx.clearRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(
        cx,
        cy,
        radius * 0.15,
        cx,
        cy,
        radius * 1.35,
      );
      glow.addColorStop(0, `rgba(${BRAND.r}, ${BRAND.g}, ${BRAND.b}, 0.14)`);
      glow.addColorStop(1, `rgba(${BRAND.r}, ${BRAND.g}, ${BRAND.b}, 0)`);
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const bodyGrad = ctx.createRadialGradient(
        cx - radius * 0.32,
        cy - radius * 0.34,
        radius * 0.05,
        cx,
        cy,
        radius,
      );
      bodyGrad.addColorStop(
        0,
        `rgba(${BRAND_LIGHT.r}, ${BRAND_LIGHT.g}, ${BRAND_LIGHT.b}, 0.58)`,
      );
      bodyGrad.addColorStop(
        0.5,
        `rgba(${BRAND.r}, ${BRAND.g}, ${BRAND.b}, 0.44)`,
      );
      bodyGrad.addColorStop(
        1,
        `rgba(${BRAND_DEEP.r}, ${BRAND_DEEP.g}, ${BRAND_DEEP.b}, 0.3)`,
      );

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      const specular = ctx.createRadialGradient(
        cx - radius * 0.38,
        cy - radius * 0.42,
        0,
        cx - radius * 0.22,
        cy - radius * 0.28,
        radius * 0.52,
      );
      specular.addColorStop(0, "rgba(255, 255, 255, 0.38)");
      specular.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = specular;
      ctx.fill();

      const segments = 48;
      const longitudes = 14;
      const latitudes = 9;
      const backCutoff = -radius * 0.12;

      for (let i = 0; i < longitudes; i++) {
        const phi = (i / longitudes) * Math.PI * 2;
        const points: Vec3[] = [];

        for (let j = 0; j <= segments; j++) {
          const theta = (j / segments) * Math.PI;
          const x = radius * Math.sin(theta) * Math.cos(phi);
          const y = radius * Math.cos(theta);
          const z = radius * Math.sin(theta) * Math.sin(phi);
          points.push(project({ x, y, z }, cx, cy, angleY, angleX));
        }

        drawCurve(
          points,
          "rgba(255, 255, 255, 0.24)",
          1,
          backCutoff,
        );
      }

      for (let i = 1; i < latitudes; i++) {
        const theta = (i / latitudes) * Math.PI;
        const ringR = radius * Math.sin(theta);
        const y = radius * Math.cos(theta);
        const points: Vec3[] = [];

        for (let j = 0; j <= segments; j++) {
          const phi = (j / segments) * Math.PI * 2;
          const x = ringR * Math.cos(phi);
          const z = ringR * Math.sin(phi);
          points.push(project({ x, y, z }, cx, cy, angleY, angleX));
        }

        drawCurve(
          points,
          `rgba(${BRAND_LIGHT.r}, ${BRAND_LIGHT.g}, ${BRAND_LIGHT.b}, 0.28)`,
          1,
          backCutoff,
        );
      }

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${BRAND_LIGHT.r}, ${BRAND_LIGHT.g}, ${BRAND_LIGHT.b}, 0.4)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      if (!reducedMotion) {
        angleY += 0.0045;
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none inline-flex origin-center rotate-[-30deg]",
        className,
      )}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="aspect-square w-full max-w-[min(100%,560px)]"
        aria-hidden="true"
      />
    </div>
  );
}
