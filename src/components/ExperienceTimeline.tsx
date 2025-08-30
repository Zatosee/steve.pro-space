import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faGlobe, faTrain, faFlask } from "@fortawesome/free-solid-svg-icons";

type IconType = Parameters<typeof FontAwesomeIcon>[0]["icon"];

interface Experience {
  title: string;
  period: string;
  description: string;
  icon: IconType;
}

export default function ExperienceTimeline({ useAOS = false }: { useAOS?: boolean }) {
  const experiences: Experience[] = [
    {
      title: "BUT Informatique (bac+3) – IUT Dijon-Auxerre (antenne Nevers)",
      period: "2021–2024",
      description: "Parcours informatique avec focus dev web et POO.",
      icon: faGraduationCap,
    },
    {
      title: "Projet web – ESAT (laboratoire drive, projet européen)",
      period: "2023",
      description: "Site web pour un laboratoire drive dans le cadre d’un projet européen.",
      icon: faGlobe,
    },
    {
      title: "Stage Data Analyst – SNCF (Technicentre industriel)",
      period: "2024",
      description: "Analyse entrées/sorties trains, création de KPI et supports de réunions.",
      icon: faTrain,
    },
    {
      title: "Projets personnels (R&D)",
      period: "2024–Présent",
      description: "Projets perso (portfolio, data-viz, outils). Pratique continue + veille.",
      icon: faFlask,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[color:var(--color-gray-950)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center" {...(useAOS ? { "data-aos": "fade-down" } : {})}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Mon parcours
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Études, projets appliqués et R&amp;D personnelle orientée produit.
          </p>
        </div>

        <div
          className="relative mt-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10"
          {...(useAOS ? { "data-aos": "fade-up", "data-aos-delay": "80" } : {})}
        >
          {/* Ligne de connexion (desktop) */}
          <div className="hidden md:block absolute left-0 right-0 top-6 h-0.5 bg-gradient-to-r from-indigo-500/60 via-indigo-500/20 to-indigo-500/60" />

          {experiences.map((exp, idx) => (
            <article key={exp.title + exp.period} className="relative md:w-1/4 text-center md:text-left">
              <div className="z-10 mx-auto md:mx-0 w-12 h-12 rounded-xl bg-indigo-500 text-white flex items-center justify-center shadow-sm dark:bg-indigo-600">
                <FontAwesomeIcon icon={exp.icon} />
              </div>

              {/* Connecteur mobile */}
              {idx !== experiences.length - 1 && <div className="md:hidden mx-auto w-0.5 h-10 bg-indigo-500/30" />}

              <div className="mt-4 rounded-2xl bg-white/70 border border-gray-200 p-5 shadow-sm
                              dark:bg-white/5 dark:border-white/10">
                <h3 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <div className="text-sm text-indigo-600 dark:text-indigo-300">{exp.period}</div>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
