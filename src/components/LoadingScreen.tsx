import { useEffect } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        <img 
          src="/img/DevFort.app.gif" 
          alt="Loading" 
          className="w-64 h-64 object-contain animate-pulse"
        />
      </div>
    </div>
  );
};