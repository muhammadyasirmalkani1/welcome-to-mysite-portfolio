import { ReactNode, useState } from "react";
import { Card } from "@/components/ui/card";

interface CardStackProps {
  cards: ReactNode[];
  className?: string;
}

export const CardStack = ({ cards, className = "" }: CardStackProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className={`relative ${className}`} style={{ perspective: "1000px" }}>
      <div className="relative w-full h-full">
        {cards.map((card, index) => {
          const offset = index - currentIndex;
          const isActive = index === currentIndex;
          
          return (
            <Card
              key={index}
              className="absolute inset-0 glass-card transition-all duration-500 cursor-pointer"
              style={{
                transform: `
                  translateX(${offset * 30}px)
                  translateY(${Math.abs(offset) * 10}px)
                  translateZ(${-Math.abs(offset) * 100}px)
                  rotateY(${offset * -5}deg)
                  scale(${1 - Math.abs(offset) * 0.1})
                `,
                opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2,
                zIndex: cards.length - Math.abs(offset),
                pointerEvents: isActive ? "auto" : "none",
              }}
              onClick={offset > 0 ? nextCard : offset < 0 ? prevCard : undefined}
            >
              {card}
            </Card>
          );
        })}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-primary w-6" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
