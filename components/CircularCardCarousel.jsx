import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";

const IMAGES = Array(8).fill("/assets/0N1A1389.png"); // Use your local image, repeat as needed

const CIRCLE_RADIUS = 320; // px
const IMAGE_WIDTH = 280;
const IMAGE_HEIGHT = 320;

export default function CircularCardCarousel() {
  const [angle, setAngle] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startAngle = useRef(0);

  // Drag handlers
  const onPointerDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX || e.touches?.[0]?.clientX;
    startAngle.current = angle;
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const x = e.clientX || e.touches?.[0]?.clientX;
    const delta = x - startX.current;
    setAngle(startAngle.current + delta * 0.4); // Adjust sensitivity
  };
  const onPointerUp = () => {
    dragging.current = false;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  };

  // For touch devices
  const onTouchStart = (e) => {
    dragging.current = true;
    startX.current = e.touches[0].clientX;
    startAngle.current = angle;
    window.addEventListener("touchmove", onPointerMove);
    window.addEventListener("touchend", onTouchEnd);
  };
  const onTouchEnd = () => {
    dragging.current = false;
    window.removeEventListener("touchmove", onPointerMove);
    window.removeEventListener("touchend", onTouchEnd);
  };

  return (
    <div
      className="relative flex items-center justify-center w-full h-[400px] select-none mt-24"
      style={{ perspective: 1200 }}
      onPointerDown={onPointerDown}
      onTouchStart={onTouchStart}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {IMAGES.map((src, i) => {
          const theta = (360 / IMAGES.length) * i + angle;
          const rad = (theta * Math.PI) / 180;
          const x = Math.sin(rad) * CIRCLE_RADIUS;
          const z = Math.cos(rad) * CIRCLE_RADIUS;
          const scale = 0.7 + 0.3 * ((z + CIRCLE_RADIUS) / (2 * CIRCLE_RADIUS));
          const opacity = 0.5 + 0.5 * ((z + CIRCLE_RADIUS) / (2 * CIRCLE_RADIUS));
          // Only show images at the front (z > 0)
          if (z <= 0) return null;
          return (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                zIndex: Math.round(z),
                opacity,
                borderRadius: 18,
                transition: dragging.current ? "none" : "opacity 0.3s, box-shadow 0.3s",
              }}
            >
              <Image
                src={src}
                alt={`carousel-img-${i}`}
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                quality={100}
                priority={i === 0}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 15,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>
      
    </div>
  );
}