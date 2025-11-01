import { useState, useEffect } from "react";

interface TypingAnimationHook {
  displayText: string;
  isComplete: boolean;
}

export const useTypingAnimation = (
  text: string,
  speed: number = 100
): TypingAnimationHook => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsComplete(false);

    if (text.length === 0) return;

    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
};

export const getTimeBasedGreeting = (): string => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "おはよう";
  } else if (hour >= 12 && hour < 18) {
    return "こんにちは";
  } else {
    return "こんばんは";
  }
};
