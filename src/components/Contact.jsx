import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { fadeUp } from "./SectionHeading.jsx";
import { profile } from "../data/profile.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <section id="contact" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div {...fadeUp} className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            Available for opportunities
          </span>

          <h2 className="mt-6 font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Let's build something <span className="text-gradient">great.</span>
          </h2>

          <p className="mt-5 max-w-xl text-lg text-slate-400">
            I'm open to Software Developer opportunities and interesting development projects.
          </p>

          <a
            href={`mailto:${profile.email}?subject=Opportunity%20for%20Rohan%20Kumar%20Panda`}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-transform hover:scale-[1.04]"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={copyEmail}
              className="glass inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 font-mono text-sm text-slate-200 transition-colors hover:border-blue-400/40"
              aria-label="Copy email address"
            >
              <Mail className="h-4 w-4 text-blue-400" />
              {profile.email}
              {copied ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4 text-slate-500" />
              )}
            </button>
            <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-purple-400" />
              {profile.location}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-300 transition-all hover:-translate-y-0.5 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-300 transition-all hover:-translate-y-0.5 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
