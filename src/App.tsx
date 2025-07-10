import ReactFullpage from "@fullpage/react-fullpage";
import { motion } from "framer-motion";
import LandingPage from "./LandingPage";
import { useState } from "react";
import StarsBackground from "./components/StarsBackground";
import TypewriterText from "./components/TypeWriterText";


export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return <LandingPage onEnter={() => setShowLanding(false)} />;
  }

  return (

    <ReactFullpage
      scrollingSpeed={1000}
      credits={{ enabled: false }} 
      navigation={true}
      render={({ fullpageApi }) => {
        return (
          <>
            {/* SECTION MOI */}
            <div
              className="section relative overflow-hidden flex items-center justify-center text-white bg-gradient-to-r from-[#0b1d3a] to-[#1c2e5c]"
              style={{ height: "100dvh" }}
            >
            <div className="absolute top-4 left-6 text-white text-sm md:text-base font-bold tracking-widest uppercase font-[Inter]">
            STEVE.SPACE
            </div>

              <h1 className="absolute w-[800px] text-[20rem] font-extrabold text-white opacity-5 uppercase select-none pointer-events-none leading-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                Steve
              </h1>

              <motion.div
                className="absolute w-[400px] h-[400px] bg-red-500 rounded-full blur-3xl opacity-20 top-10 right-10 pointer-events-none"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                animate={{
                  backgroundPositionX: ["0px", "50px", "0px"],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundImage: "radial-gradient(#ffffff33 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="overflow-hidden relative z-20 text-center px-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">
                <TypewriterText
                  text="Salut, moi c'est Steve"
                  highlight="Steve"
                  highlightClassName="text-red-500"
                  speed={100}
                  className="text-white"
                />


              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto"
              >
                Développeur Front-End passionné, fasciné par le design moderne et le souci du détail. 
                J’adore créer des interfaces <span className="text-red-500">simples, dynamiques et esthétiques</span>, où chaque animation a du sens. 
                Toujours curieux, j’explore sans cesse les <span className="text-red-500">nouvelles technologies</span> et lance régulièrement de petits projets pour apprendre et rester à la pointe. 
                Mon objectif ? Offrir aux utilisateurs des expériences <span className="text-red-500">fluides, modernes et inoubliables</span>.
              </motion.p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
                onClick={() => fullpageApi.moveSectionDown()}
              >
                Voir mon travail
              </motion.button>
              </motion.div>
              
            </div>

            <div className="absolute left-[-100px] bottom-0 z-10 w-[900px] h-auto">
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="#1c2e5c"
                opacity="0.35"
                className="w-full h-auto group"
              >
                {/* Translation vers la droite */}
                <g transform="translate(20, 0)">
                  {/* Tronc */}
                  <path d="M50 30 Q47 70 50 100 Q53 70 50 30 Z" />

                  {/* Feuilles */}
                  <g className="origin-[50px_30px] group-hover:animate-sway">
                    <path d="M50 30 Q20 10 5 5 Q30 20 50 30 Z" />
                    <path d="M50 30 Q60 0 90 0 Q65 15 50 30 Z" />
                    <path d="M50 30 Q75 20 100 25 Q70 30 50 30 Z" />
                    <path d="M50 30 Q50 0 50 -10 Q50 20 50 30 Z" />
                    <path d="M50 30 Q25 40 0 50 Q30 35 50 30 Z" />
                  </g>
                </g>
              </svg>
            </div>

            {/* SVG en fixed */}
            <svg
              className="fixed left-0 bottom-0 w-full h-[200px] z-0"
              viewBox="0 0 1920 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#1c2e5c"
                fillOpacity="1"
                d="M0,192L30,197.3C60,203,120,213,180,224C240,235,300,245,360,229.3C420,213,480,171,540,160C600,149,660,171,720,176C780,181,840,171,900,176C960,181,1020,203,1080,186.7C1140,171,1200,117,1260,112C1320,107,1380,149,1410,170.7L1920,192L1920,320L0,320Z"
              ></path>
            </svg>




            {/* SECTION À PROPOS */}
            <div className="section bg-gradient-to-r from-[#2c0f48] to-[#5a1d80] relative flex items-center justify-center text-white">
            <div className="absolute top-4 left-6 text-white text-sm md:text-base font-bold tracking-widest uppercase font-[Inter]">
            STEVE.SPACE
            </div>
              <StarsBackground />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center max-w-2xl px-4 z-10"
              >
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
                  À propos de <span className="text-red-500">Moi</span>
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Étudiant en développement web moderne. J’adore créer des
                  interfaces élégantes et dynamiques.
                </p>
                <p className="text-gray-300 text-lg">
                  Compétences : React · Tailwind · TypeScript · Framer Motion
                </p>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition mt-6"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  Voir mes projets
                </button>
              </motion.div>
            </div>

            {/* SECTION PROJETS */}
            <div className="section bg-gradient-to-r from-[#0b2f26] to-[#12463a] relative flex flex-col items-center justify-center text-white">
            <div className="absolute top-4 left-6 text-white text-sm md:text-base font-bold tracking-widest uppercase font-[Inter]">
            STEVE.SPACE
            </div> 
              <StarsBackground/>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center max-w-3xl px-4 z-10"
              >
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                  Mes <span className="text-red-500">Projets</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ProjectCard
                    title="Portfolio REILE"
                    description="Site vitrine moderne pour un salon de coiffure, design dark & vibrant."
                    tech="React · Tailwind · Framer Motion"
                    link="https://tonlien.com"
                  />
                  <ProjectCard
                    title="Dashboard Admin"
                    description="Dashboard interactif avec animations et dark mode."
                    tech="React · Tailwind · Chart.js"
                    link="https://tonlien.com"
                  />
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition mt-6"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  Me contacter
                </button>
              </motion.div>
            </div>

            {/* SECTION CONTACT */}
            <div className="section bg-gradient-to-r from-[#3b0d0c] to-[#701818] relative flex items-center justify-center text-white">
            <div className="absolute top-4 left-6 text-white text-sm md:text-base font-bold tracking-widest uppercase font-[Inter]">
            STEVE.SPACE
            </div>
            <StarsBackground />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center max-w-2xl px-4 z-10"
              >
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
                  Me <span className="text-red-500">Contacter</span>
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  N'hésitez pas à me contacter via LinkedIn, GitHub ou par mail.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/tonusername"
                    className="text-red-500 hover:text-red-400 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/tonusername"
                    className="text-red-500 hover:text-red-400 transition"
                  >
                    LinkedIn
                  </a>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition mt-6"
                  onClick={() => fullpageApi.moveTo(1)}
                >
                  Retour en haut
                </button>
              </motion.div>
            </div>
          </>
        );
      }}
    />
  );
}

function ProjectCard({
  title,
  description,
  tech,
  link,
}: {
  title: string;
  description: string;
  tech: string;
  link: string;
}) {
  return (
    <div className="bg-[#122347] p-6 rounded-lg shadow-lg hover:scale-105 transition">
      <h3 className="text-2xl font-bold text-red-500 mb-2">{title}</h3>
      <p className="text-gray-300 mb-2">{description}</p>
      <p className="text-gray-400 text-sm mb-4">{tech}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
      >
        Voir le projet
      </a>
    </div>
  );
}


