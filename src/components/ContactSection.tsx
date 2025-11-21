import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faFileLines,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xankygbe";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre + intro */}
        <div className="text-center" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Contact
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Un projet, une question ou juste envie de say hi&nbsp;?  
            Envoie-moi un message, je reviens vers toi asap.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="mt-12 flex flex-col md:flex-row items-start justify-center gap-12">
          {/* Bloc descriptif (gauche) */}
          <div className="space-y-6 max-w-xl" data-aos="fade-right">
            <div className="flex items-start gap-4">
              <div
                className="mt-1 h-10 w-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center
                           dark:bg-indigo-600"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Réponse par e-mail
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tu reçois la réponse directement dans ta inbox!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="mt-1 h-10 w-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center
                           dark:bg-indigo-600"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faFileLines} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Types de demandes
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Projets, collabs, questions techniques, feedbacks…  
                  Si tu hésites, send it anyway, i guess.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="mt-1 h-10 w-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center
                           dark:bg-indigo-600"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Humain first
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Pas de bot auto-répondeur ici&nbsp;: chaque message est lu et
                  traité avec un vrai cerveau.
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire (droite) */}
          <div
            className="w-full max-w-xl bg-white/80 border border-gray-200 shadow-sm rounded-2xl p-6
                       dark:bg-white/5 dark:border-white/10"
            data-aos="fade-left"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              aria-label="Formulaire de contact"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                  >
                    Nom
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900
                                 px-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white text-white caret-white"
                      placeholder="Ton nom"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900
                                 px-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white text-white caret-white"
                      placeholder="ton@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  Sujet
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900
                             px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white text-white caret-white"
                  placeholder="De quoi tu veux parler ?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900
                             px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white text-white caret-white"
                  placeholder="Explique ton projet, ton contexte, ton timing, etc."
                />
              </div>

              {/* Anti-spam honeypot optionnel */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                aria-hidden="true"
                tabIndex={-1}
              />

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5
                             text-sm font-semibold text-white shadow-sm hover:bg-indigo-700
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2 text-xs" />
                  {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                </button>

                {status === "success" && (
                  <p
                    className="text-sm text-green-600 dark:text-green-400"
                    role="status"
                  >
                    Message envoyé, check ta boîte mail soon ✨
                  </p>
                )}
                {status === "error" && (
                  <p
                    className="text-sm text-red-600 dark:text-red-400"
                    role="status"
                  >
                    Oups, un souci technique… réessaie un peu plus tard, whatever.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
