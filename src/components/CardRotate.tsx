import { ReactNode, useRef } from "react";
import { Card } from "@/components/ui/card";

interface CardRotateProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export const CardRotate = ({ children, className = "", speed = 1 }: CardRotateProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const angleX = ((y - centerY) / centerY) * (20 * speed);
    const angleY = ((x - centerX) / centerX) * (20 * speed);

    card.style.transform = `perspective(1000px) rotateX(${-angleX}deg) rotateY(${angleY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Card
      ref={cardRef}
      className={`transition-all duration-300 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Card>
  );
};
