import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-night-950/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <button
          onClick={toTop}
          className="font-display text-2xl font-extrabold tracking-tight text-white"
          aria-label="Back to top"
        >
          ROHAN<span className="text-gradient">.</span>
        </button>

        <div>
          <p className="text-sm font-semibold text-slate-200">Software Developer</p>
          <p className="mt-1 font-mono text-xs text-slate-500">Java • Spring Boot • React</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="h-px w-full max-w-md bg-white/5" />

        <div className="flex w-full flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Rohan Kumar Panda. All rights reserved.</p>
          <p>
            Built with <span className="text-gradient font-semibold">React</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
