import heroImg from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90svh] h-screen flex items-center justify-center text-white overflow-clip"
      aria-label="Section de bienvenue"
    >
      {/* Image de fond a changer générer par ia mais bof bof*/}
      <img
        src={heroImg}
        alt="Illustration d'un développeur avec des visualisations de données"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div
        className="relative z-10 max-w-3xl px-4 text-center space-y-6 bg-black/0 md:bg-black/0"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Hey <span aria-hidden>👋</span> Je suis{" "}
          <span className="text-indigo-400">Steve</span>
        </h1>

        <p className="text-lg sm:text-xl leading-relaxed text-white/90">
          Développeur web & fan de <strong>design</strong> et de <strong>data analyse</strong>.
          Je transforme des idées en expériences modernes et interactives.
        </p>

        <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Actions principales">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-transparent border border-white/90 hover:bg-white hover:text-black transition-colors font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Me contacter
          </a>
        </div>

        {/* Petit rank lol */}
        <ul
          className="mt-2 flex flex-wrap justify-center gap-2 text-sm text-white/90"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <li className="px-3 py-1 rounded-full bg-white/10 backdrop-blur">React • TypeScript</li>
          <li className="px-3 py-1 rounded-full bg-white/10 backdrop-blur">Figma • UI/UX</li>
          <li className="px-3 py-1 rounded-full bg-white/10 backdrop-blur">Data Analyse • Power BI</li>
        </ul>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs tracking-wider"
        aria-hidden="true"
      >
        <span className="block mb-2">Eh psst, scroll ?</span>
        <div className="h-6 w-[2px] mx-auto bg-white/50 overflow-hidden">
          <div className="h-2 w-full bg-white/90 animate-[scrollDown_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
