import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPaintBrush,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  const skills = [
    {
      icon: faCode,
      title: "Développement",
      description:
        "Front-end moderne avec React, TypeScript, Tailwind, performance & accessibilité.",
      aosDelay: 0,
    },
    {
      icon: faPaintBrush,
      title: "Design",
      description:
        "UI/UX, design d’interfaces web responsives et prototypes Figma.",
      aosDelay: 100,
    },
    {
      icon: faChartLine,
      title: "Data",
      description:
        "Data analyse & visualisation de données (dashboards, KPIs).",
      aosDelay: 200,
    },
  ];

  const stack = [
    "React",
    "TypeScript",
    "Tailwind",
    "Figma",
    "SQL",
    "Power Bi",
  ];

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          data-aos="fade-down"
        >
          À propos de moi
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Colonne texte */}
          <div
            className="space-y-4 text-gray-700 dark:text-gray-300"
            data-aos="fade-right"
          >
            <p>
              Développeur basé en France, je combine une passion pour le{" "}
              <b>web design</b> et la <b>data analyse</b> pour créer des
              expériences uniques. J’ai affiné mes compétences pour proposer des
              solutions performantes, esthétiques et orientées utilisateur.
            </p>
            <p>
              J’aime travailler sur des projets variés — du site vitrine élégant
              aux tableaux de bord analytiques créer par le biais de Power BI. 
              Toujours curieux, je m’efforce d’apprendre et d’expérimenter de
              nouvelles technologies.
            </p>

            {/* Stack rapide (chips) */}
            <ul className="mt-6 flex flex-wrap gap-2 text-sm" aria-label="Stack rapide">
              {stack.map((label) => (
                <li
                  key={label}
                  className="px-3 py-1 rounded-full bg-white/80 text-gray-800 border border-gray-200 shadow-sm
                             dark:bg-white/10 dark:text-gray-100 dark:border-white/10"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne skills */}
          <div className="space-y-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-gray-200 shadow
                           dark:bg-white/5 dark:border-white/10"
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl
                             bg-indigo-500 text-white dark:bg-indigo-600"
                  aria-hidden="true"
                >
                  <FontAwesomeIcon icon={skill.icon} size="lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
