import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faChartArea, faChartBar } from "@fortawesome/free-solid-svg-icons";

/**
 * DataSection
 * - AOS sur titres/blocs
 * - Graphique en SVG (responsive, grid, labels, aria)
 * - Dark mode + contrastes
 * - Petite zone de KPI
 */
export default function DataSection() {
  // Données d’exemple (12 points, croissance légère)
  const values = [24, 40, 32, 52, 44, 70, 56, 90, 72, 96, 84, 110];
  const max = Math.max(...values);
  const stepX = 26; // espace horizontal entre barres

  return (
    <section id="data" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre + intro */}
        <div className="text-center" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Data &amp; visualisation
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Les données guident mes choix de design&nbsp;: instrumentation, analyse, dashboards
            et itérations <em>data-driven</em>—du brut aux décisions.
          </p>
        </div>

        {/* KPI light */}
        <div
          className="mt-8 grid sm:grid-cols-3 gap-4"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          <div className="rounded-2xl p-5 bg-white/80 border border-gray-200 shadow-sm dark:bg-white/5 dark:border-white/10">
            <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Sessions (S-1 → S)
            </div>
            <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">+18%</div>
          </div>
          <div className="rounded-2xl p-5 bg-white/80 border border-gray-200 shadow-sm dark:bg-white/5 dark:border-white/10">
            <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
              CTR bouton primaire
            </div>
            <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">+6.2%</div>
          </div>
          <div className="rounded-2xl p-5 bg-white/80 border border-gray-200 shadow-sm dark:bg-white/5 dark:border-white/10">
            <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Taux de conversion
            </div>
            <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">+2.1pts</div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Chart SVG */}
          <figure
            className="w-full max-w-2xl bg-white/80 border border-gray-200 shadow-sm rounded-2xl p-6 dark:bg-white/5 dark:border-white/10"
            data-aos="fade-right"
          >
            <figcaption className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Sessions hebdomadaires (exemple)
            </figcaption>

            <div className="w-full overflow-x-auto">
              <svg
                viewBox="0 0 360 160"
                role="img"
                aria-labelledby="chartTitle chartDesc"
                className="w-[540px] max-w-full h-40"
              >
                <title id="chartTitle">Histogramme des sessions hebdomadaires</title>
                <desc id="chartDesc">
                  Barres représentant l’évolution des sessions sur douze périodes.
                </desc>

                {/* Grid horizontale */}
                {[0, 1, 2, 3, 4].map((g) => (
                  <line
                    key={g}
                    x1="0"
                    y1={20 + g * 28}
                    x2="360"
                    y2={20 + g * 28}
                    className="stroke-gray-200 dark:stroke-white/10"
                  />
                ))}

                {/* Barres */}
                {values.map((v, i) => {
                  const barH = (v / max) * 110; // hauteur normalisée
                  const x = 18 + i * stepX;
                  const y = 140 - barH;
                  const label = `S${i + 1}`;

                  return (
                    <g key={i} aria-label={`${label}: ${v}`}>
                      <rect
                        x={x}
                        y={y}
                        width="16"
                        height={barH}
                        rx="4"
                        className="fill-sky-500/80 dark:fill-sky-400/80"
                      />
                      <text
                        x={x + 8}
                        y={148}
                        textAnchor="middle"
                        className="fill-gray-600 dark:fill-gray-300 text-[10px]"
                      >
                        {label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <figcaption className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              Source: events analytics (dummy data). Tendance globale haussière.
            </figcaption>
          </figure>

          {/* Descriptif 3 points */}
          <div className="space-y-6 max-w-xl" data-aos="fade-left">
            <div className="flex items-start gap-4">
              <div
                className="mt-1 h-10 w-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center
                           dark:bg-indigo-600"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Collecte des données
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Agrégation multi-sources (API, DB, events), qualité de données et schémas
                  prêts pour l’analyse.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="mt-1 h-10 w-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center
                           dark:bg-indigo-600"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faChartArea} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Analyse & traitement
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Nettoyage, structuration, KPIs, cohortes et tests A/B pour orienter le design.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="mt-1 h-10 w-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center
                           dark:bg-indigo-600"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faChartBar} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Visualisation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Dashboards interactifs, lisibles et actionnables pour accélérer la décision.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
