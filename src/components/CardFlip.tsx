import { ReactNode, useState } from "react";
import { Card } from "@/components/ui/card";

interface CardFlipProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export const CardFlip = ({ front, back, className = "" }: CardFlipProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative w-full h-full cursor-pointer ${className}`}
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <Card
          className="absolute inset-0 glass-card"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {front}
        </Card>

        {/* Back */}
        <Card
          className="absolute inset-0 glass-card"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {back}
        </Card>
      </div>
    </div>
  );
};
