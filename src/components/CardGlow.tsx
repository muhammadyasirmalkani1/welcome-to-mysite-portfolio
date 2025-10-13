import { ReactNode, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface CardGlowProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export const CardGlow = ({ children, className = "", glowColor = "rgba(var(--primary), 0.5)" }: CardGlowProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setGlowPosition({ x, y });
  };

  return (
    <Card
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(600px circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 40%)`,
      }}
    >
      <div className="relative z-10">{children}</div>
    </Card>
  );
};
