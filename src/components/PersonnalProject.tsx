import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Data1 from "../assets/kpi/Data1.png";
import Data2 from "../assets/kpi/Data2.png";
import Data3 from "../assets/kpi/Data3.png";
import Data4 from "../assets/kpi/Data4.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  images?: string[]; // ok: Vite résout les imports d’images en string (URL)
}

function LightboxSlider({
  images,
  startIndex = 0,
  onClose,
}: {
  images: string[];
  startIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number | null>(null);

  const safeImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const total = safeImages.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, total]);

  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    startX.current = null;
  };

  if (!total) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Galerie d'images"
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className="relative w-full max-w-5xl select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          aria-label="Fermer"
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm"
        >
          Fermer ✕
        </button>

        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl border border-white/10">
          <img
            src={safeImages[index]}
            alt={`Image ${index + 1} sur ${total}`}
            className="h-full w-full object-contain"
            draggable={false}
          />
        </div>

        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Précédent"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Suivant"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white"
            >
              →
            </button>
          </>
        )}

        {total > 1 && (
          <div className="mt-3 flex justify-center gap-2">
            {safeImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Aller à l'image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PersonalProjects({
  useAOS = false,
  projects = [
    {
      title: "Portfolio (React Typescript)",
      description:
        "Refonte de mon ancien portfolio avec petites animations, dark-mode et très simple.",
      tags: ["React", "Next.js", "Tailwind"],
    },
    {
      title: "Dashbords KPIs (Power bi)",
      description:
        "Dashboard, graphes, export en CSV de mes différents tableaux power bi.",
      tags: ["Figma", "UX"],
      images: [Data1, Data2, Data3, Data4], // <-- ici on utilise les imports
    },
    {
      title: "Zint.lol",
      description:
        "Site d'analyse de statistiques d'un compte league of legends",
      tags: ["React", "Database", "API"],
      link: "https://zint.lol/",
    },
    {
      title: "Jeu Point & Click",
      description:
        "Jeu créer durant mes études visant à étudier le principe du point & click",
      tags: ["Java", "Objet"],
    },
    {
      title: "Maquette Web",
      description:
        "Création d'une large diversité de maquette de site internet afin d'étudier de plus en plus l'ui/ux",
      tags: ["UI/UX", "Figma"],
    },
  ],
}: {
  useAOS?: boolean;
  projects?: Project[];
}) {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const openSlider = (images: string[], index = 0) => setLightbox({ images, index });
  const closeSlider = () => setLightbox(null);

  return (
    <section id="projects" className="py-20 bg-[color:var(--color-gray-950)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center" {...(useAOS ? { "data-aos": "fade-down" } : {})}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Projets personnels
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Petit apperçu de mes projets personnels, mêlant web design et data analyse.
          </p>
        </div>

        <div
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          {...(useAOS ? { "data-aos": "fade-up", "data-aos-delay": "80" } : {})}
        >
          {projects.map((p) => {
            const hasImages = Array.isArray(p.images) && p.images.length > 0;

            return (
              <article
                key={p.title}
                className="rounded-2xl bg-white/70 border border-gray-200 p-5 shadow-sm dark:bg-white/5 dark:border-white/10"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {hasImages ? (
                  <button
                    onClick={() => openSlider(p.images!, 0)}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-600 hover:underline dark:text-indigo-300"
                  >
                    Voir le projet (Slider/Galerie)
                  </button>
                ) : (
                  p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      Voir le projet
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  )
                )}
              </article>
            );
          })}
        </div>
      </div>

      {lightbox && (
        <LightboxSlider
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={closeSlider}
        />
      )}
    </section>
  );
}
