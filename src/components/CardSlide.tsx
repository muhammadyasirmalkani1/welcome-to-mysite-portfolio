import { ReactNode, useState } from "react";
import { Card } from "@/components/ui/card";

interface CardSlideProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
}

export const CardSlide = ({ 
  front, 
  back, 
  className = "", 
  direction = "left" 
}: CardSlideProps) => {
  const [isSlid, setIsSlid] = useState(false);

  const getTransform = () => {
    if (!isSlid) return "translate3d(0, 0, 0)";
    
    switch (direction) {
      case "left":
        return "translate3d(-100%, 0, 0)";
      case "right":
        return "translate3d(100%, 0, 0)";
      case "up":
        return "translate3d(0, -100%, 0)";
      case "down":
        return "translate3d(0, 100%, 0)";
      default:
        return "translate3d(-100%, 0, 0)";
    }
  };

  const getBackTransform = () => {
    if (!isSlid) {
      switch (direction) {
        case "left":
          return "translate3d(100%, 0, 0)";
        case "right":
          return "translate3d(-100%, 0, 0)";
        case "up":
          return "translate3d(0, 100%, 0)";
        case "down":
          return "translate3d(0, -100%, 0)";
        default:
          return "translate3d(100%, 0, 0)";
      }
    }
    return "translate3d(0, 0, 0)";
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden cursor-pointer ${className}`}
      onClick={() => setIsSlid(!isSlid)}
    >
      {/* Front */}
      <Card
        className="absolute inset-0 glass-card transition-transform duration-500 ease-out"
        style={{
          transform: getTransform(),
        }}
      >
        {front}
      </Card>

      {/* Back */}
      <Card
        className="absolute inset-0 glass-card transition-transform duration-500 ease-out"
        style={{
          transform: getBackTransform(),
        }}
      >
        {back}
      </Card>
    </div>
  );
};
