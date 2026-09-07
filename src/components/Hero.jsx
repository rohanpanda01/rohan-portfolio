import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile.js";

const STACK = ["Java", "Spring Boot", "React", "MySQL", "MongoDB"];
const CMD = "system.build();";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/** Types "system.build();", holds, deletes and repeats forever. */
function useTypewriter(text) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    let phase = "typing";
    let pause = 0;
    const id = setInterval(() => {
      if (pause > 0) {
        pause -= 1;
        return;
      }
      if (phase === "typing") {
        i += 1;
        setTyped(text.slice(0, i));
        if (i >= text.length) {
          phase = "holding";
          pause = 24;
        }
      } else if (phase === "holding") {
        phase = "deleting";
      } else {
        i -= 2;
        setTyped(text.slice(0, Math.max(i, 0)));
        if (i <= 0) {
          phase = "typing";
          pause = 10;
        }
      }
    }, 85);
    return () => clearInterval(id);
  }, [text]);

  return typed;
}

function CodeCard() {
  const typed = useTypewriter(CMD);

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-blue-600/25 via-indigo-600/15 to-purple-600/25 blur-2xl" />

      <div className="glass glow-card relative animate-float rounded-2xl p-1.5">
        <div className="rounded-xl bg-night-900/90 p-5 sm:p-6">
          {/* Window header */}
          <div className="flex items-center gap-2 border-b border-white/5 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 font-mono text-xs text-slate-400">Rohan.java</span>
          </div>

          <p className="pt-4 font-mono text-[11px] text-slate-500">{"// rohan.config"}</p>

          <div className="mt-3 space-y-2.5">
            {STACK.map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + idx * 0.3, duration: 0.4 }}
                className="flex items-center justify-between"
              >
                <span className="font-mono text-sm text-slate-300">{tech}</span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.05 + idx * 0.3, type: "spring", stiffness: 320, damping: 16 }}
                >
                  <Check className="h-4 w-4 text-emerald-400" />
                </motion.span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 border-t border-white/5 pt-4 font-mono text-sm">
            <span className="text-slate-500">$&nbsp;</span>
            <span className="text-emerald-400">{typed}</span>
            <span className="animate-blink text-blue-400">▌</span>
          </div>

          <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            build: passing — all checks green
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
        className="glass absolute -left-5 top-12 hidden rounded-xl px-3 py-2 font-mono text-xs text-blue-300 animate-float-slow lg:block"
      >
        REST APIs
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.7, duration: 0.5 }}
        className="glass absolute -right-4 top-1/3 hidden rounded-xl px-3 py-2 font-mono text-xs text-purple-300 animate-float-slow lg:block"
      >
        Full-Stack
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="glass absolute -left-3 bottom-10 hidden rounded-xl px-3 py-2 font-mono text-xs text-indigo-300 animate-float-slow lg:block"
      >
        AWS Cloud
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center pt-28 pb-20">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left — intro */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-start gap-6">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-blue-300"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Rohan Kumar
            <span className="text-gradient block">Panda</span>
          </motion.h1>

          <motion.div variants={item} className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-slate-300">
              Software Developer
            </span>
          </motion.div>

          <motion.p variants={item} className="font-mono text-sm text-slate-500">
            Java • Spring Boot • React
          </motion.p>

          <motion.p variants={item} className="max-w-xl text-lg text-slate-400">
            I build scalable applications and
            <span className="text-white"> clean, user-focused interfaces</span>.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform hover:scale-[1.03]"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={profile.resumeUrl}
              download="Rohan-Kumar-Panda-Resume.pdf"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-blue-400/40"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 pt-2">
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
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-300 transition-all hover:-translate-y-0.5 hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — animated developer workspace */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <CodeCard />
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-white"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.button>
    </section>
  );
}


