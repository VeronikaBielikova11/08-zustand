import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import css from "./NotFound.module.css";

export const metadata: Metadata = {
  title: "404 - Page not found | NoteHub",
  description: "Sorry, the page you are looking for does not exist in NoteHub.",
  openGraph: {
    title: "404 - Page not found | NoteHub",
    description:
      "Sorry, the page you are looking for does not exist in NoteHub.",
    url: `${SITE_URL}/404`,
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>404 - Page not found</h1>
        <p className={css.description}>
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}
