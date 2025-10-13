import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  if (!showButtons) return null;

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-2">
      <Button
        onClick={scrollToTop}
        size="icon"
        className="rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
      <Button
        onClick={scrollToBottom}
        size="icon"
        className="rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Scroll to bottom"
      >
        <ArrowDown className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ScrollButtons;
