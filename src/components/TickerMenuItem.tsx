import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function TickerMenuItem({
  label,
  tickerText,
  onClick,
}: {
  label: string;
  tickerText: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [tickerWidth, setTickerWidth] = useState(0);

  useEffect(() => {
    if (tickerRef.current) {
      setTickerWidth(tickerRef.current.scrollWidth);
    }
  }, []);

  return (
    <>
      <div className="w-screen h-px bg-gray-600" />

      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        className="cursor-pointer overflow-hidden relative w-screen h-[5rem]"
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-white origin-center"
          style={{ pointerEvents: "none" }}
        />

        <motion.div
          className="absolute w-full h-full"
          animate={{ color: hovered ? "#000" : "#fff" }}
        >
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-bold uppercase tracking-wide font-[Inter]"
          >
            {label}
          </motion.span>

          <div
            className={`flex absolute top-0 left-0 w-full h-full overflow-hidden ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <motion.div
            ref={tickerRef}
            animate={{ x: [0, -tickerWidth / 2] }}
            transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 10,
            }}
            className="flex items-center justify-center whitespace-nowrap gap-8 text-3xl md:text-5xl font-light uppercase tracking-wide font-[Inter] italic"
            >
              <span>{tickerText}</span>
              <span>{tickerText}</span>
              <span>{tickerText}</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
