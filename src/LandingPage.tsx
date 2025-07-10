import TickerMenuItem from "./components/TickerMenuItem";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import StarsBackground from "./components/StarsBackground";


type LandingPageProps = {
  onEnter: () => void;
};

export default function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="h-screen bg-black flex flex-col items-center gap-0 font-[Space Grotesk] overflow-hidden pt-8 md:pt-12 relative">
      <StarsBackground />
      {/* Logo haut gauche */}
      <div className="absolute top-4 left-6 text-white text-sm md:text-base font-bold tracking-widest uppercase font-[Inter]">
        STEVE.SPACE
      </div>

      {/* BIENVENUE heading */}
      <div className="text-center mb-8 py-8 md:py-36">
        <h1 className="text-5xl md:text-7xl font-['Space Grotesk'] text-white uppercase">
          BIENVENUE
        </h1>

        <p className="text-lg md:text-2xl font-[Space Grotesk] text-gray-400 mt-2">
          Choose your way
        </p>
      </div>

      {/* Ticker items */}
      <TickerMenuItem
        label="PORTFOLIO"
        tickerText="STEVE SAISSAC * STEVE SAISSAC *"
        onClick={onEnter}
      />
      <TickerMenuItem
        label="AUTRES PROJETS"
        tickerText="Mes projets * Mes projets *"
        onClick={() => console.log("Projects clicked")}
      />
      <TickerMenuItem
        label="ZINT"
        tickerText="A lol project * A lol project *"
        onClick={() => window.open("https://zint.lol", "_blank")}
      />

      {/* LIGNE (HR) finale */}
      <div className="w-screen h-px bg-gray-600" />

      {/* Réseaux sociaux */}
      <div className="absolute bottom-4 left-6 flex gap-4 text-white text-xl">
        <a
          href="https://instagram.com/steve.ssc"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/steenne_"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://discord.gg/eKPbmrp5"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaDiscord />
        </a>
      </div>
    </div>
  );
}
