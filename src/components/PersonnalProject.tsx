import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function PersonalProjects({
  useAOS = false,
  projects = [
    { title: "Portfolio v2 (Next.js)", description: "Refonte avec animations, dark-mode et data-viz.", tags: ["React", "Next.js", "Tailwind"], link: "#" },
    { title: "Dash KPIs (maquette)", description: "Dashboard SVG: filtres, graphes, export CSV.", tags: ["DataViz", "SVG", "UX"], link: "#" },
    { title: "CLI Nettoyage CSV", description: "Nettoyage/normalisation de datasets pour analyses.", tags: ["Python", "Pandas"] },
  ],
}: {
  useAOS?: boolean;
  projects?: Project[];
}) {
  return (
    <section id="projects" className="py-20 bg-[color:var(--color-gray-950)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center" {...(useAOS ? { "data-aos": "fade-down" } : {})}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white">Projets personnels</h2>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Sélection d’expérimentations et prototypes de R&amp;D.
          </p>
        </div>

        <div
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          {...(useAOS ? { "data-aos": "fade-up", "data-aos-delay": "80" } : {})}
        >
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl bg-white/70 border border-gray-200 p-5 shadow-sm
                         dark:bg-white/5 dark:border-white/10"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{p.description}</p>

              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700
                               dark:bg-indigo-500/15 dark:text-indigo-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-600 hover:underline
                             dark:text-indigo-300"
                >
                  Voir le projet <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
