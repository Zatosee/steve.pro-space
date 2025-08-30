import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useId, useRef, useState } from "react";

export default function ContactSection({
  useAOS = false,
  email = "contact@exemple.com",
  github = "https://github.com/",
  linkedin = "https://www.linkedin.com/",
}: {
  useAOS?: boolean;
  email?: string;
  github?: string;
  linkedin?: string;
}) {
  const nameId = useId();
  const mailId = useId();
  const msgId = useId();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const honeyRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Honeypot anti-bot
    if (honeyRef.current?.value) return;

    setLoading(true);
    // 👉 Remplace par ton appel API / email service
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {}
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center" {...(useAOS ? { "data-aos": "fade-down" } : {})}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white">Contactez-moi</h2>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Une idée de projet ou juste envie d’échanger ? Écrivez-moi 👇
          </p>
        </div>

        {/* Bandeau succès */}
        {sent && (
          <div className="max-w-xl mx-auto mt-6 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 p-3
                          dark:border-emerald-900/40 dark:bg-emerald-900/20 dark:text-emerald-200"
               role="status">
            Message bien reçu (démo). Branche ton envoi réel côté serveur.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto grid gap-4 mt-8"
          {...(useAOS ? { "data-aos": "fade-up", "data-aos-delay": "80" } : {})}
        >
          {/* Champ piège honeypot (invisible) */}
          <input ref={honeyRef} type="text" tabIndex={-1} aria-hidden="true" className="hidden" />

          <div>
            <label htmlFor={nameId} className="sr-only">Votre nom</label>
            <input
              id={nameId}
              name="name"
              type="text"
              placeholder="Votre nom"
              required
              autoComplete="name"
              className="w-full p-3 rounded-md border border-gray-200 bg-white/70 text-gray-900
                         placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none
                         dark:border-white/10 dark:bg-white/5 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor={mailId} className="sr-only">Votre email</label>
            <input
              id={mailId}
              name="email"
              type="email"
              placeholder="Votre email"
              required
              autoComplete="email"
              className="w-full p-3 rounded-md border border-gray-200 bg-white/70 text-gray-900
                         placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none
                         dark:border.white/10 dark:bg.white/5 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor={msgId} className="sr-only">Votre message</label>
            <textarea
              id={msgId}
              name="message"
              placeholder="Votre message"
              rows={4}
              required
              className="w-full p-3 rounded-md border border-gray-200 bg-white/70 text-gray-900
                         placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none
                         dark:border-white/10 dark:bg-white/5 dark:text-gray-100"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex justify-center px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700
                         text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Envoi..." : "Envoyer"}
            </button>

            {/* Liens directs */}
            <a
              href={`mailto:${email}`}
              className="inline-flex justify-center px-6 py-3 rounded-md border border-gray-300
                         text-gray-800 hover:bg-gray-50
                         dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/5"
            >
              Écrire par e-mail
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex justify-center px-6 py-3 rounded-md border border-gray-300
                         text-gray-800 hover:bg-gray-50
                         dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/5"
              aria-label="Copier l’adresse e-mail"
              title="Copier l’adresse e-mail"
            >
              Copier l’e-mail
            </button>
          </div>
        </form>

        {/* Réseaux */}
        <div className="mt-10 flex flex-wrap justify-center gap-4"
             {...(useAOS ? { "data-aos": "zoom-in", "data-aos-delay": "120" } : {})}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl px-4 py-3
                       bg-white/70 border border-gray-200 shadow-sm
                       hover:bg-white transition
                       dark:bg-white/5 dark:border-white/10"
            aria-label="GitHub"
          >
            <FontAwesomeIcon className="text-xl text-gray-900 dark:text-gray-100" icon={faGithub} />
            <span className="text-sm text-gray-800 dark:text-gray-200 group-hover:underline">GitHub</span>
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl px-4 py-3
                       bg-white/70 border border-gray-200 shadow-sm
                       hover:bg-white transition
                       dark:bg.white/5 dark:border-white/10"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon className="text-xl text-[#0A66C2]" icon={faLinkedin} />
            <span className="text-sm text-gray-800 dark:text-gray-200 group-hover:underline">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
