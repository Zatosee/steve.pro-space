import { useEffect, useState } from "react";

export default function TypewriterText({
  text,
  highlight,
  highlightClassName = "",
  speed = 100,
  className = "",
}: {
  text: string;
  highlight?: string;
  highlightClassName?: string;
  speed?: number;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const partialText = text.slice(0, currentIndex);

  const cursor = (
    <span
      className={`inline-block ml-1 transition-opacity duration-200 ${
        showCursor ? "opacity-100" : "opacity-0"
      }`}
    >
      |
    </span>
  );

  if (highlight && partialText === text) {
    const [before, after] = text.split(highlight);
    return (
      <span className={className}>
        {before}
        <span className={highlightClassName}>{highlight}</span>
        {after}
        {cursor}
      </span>
    );
  }

  return (
    <span className={className}>
      {partialText}
      {cursor}
    </span>
  );
}
