import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Github, Lock, ShieldCheck, Users } from "lucide-react";
import { fadeUp } from "./SectionHeading.jsx";
import { profile } from "../data/profile.js";

function randomCode() {
  const code = String(Math.floor(100000 + Math.random() * 900000));
  return `${code.slice(0, 3)} ${code.slice(3)}`;
}

/** Animated "Secure Login" mock — live TOTP countdown for the MFA project. */
function AuthVisual() {
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [code, setCode] = useState("482 916");

  useEffect(() => {
    const id = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 30)), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) setCode(randomCode());
  }, [secondsLeft]);

  return (
    <div className="glass relative w-full max-w-sm rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Lock className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-semibold">Secure Login</span>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
          2FA
        </span>
      </div>

      <div className="mt-5 space-y-3.5">
        <div>
          <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-slate-500">Email</p>
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 font-mono text-xs text-slate-400">
            rohan@developer.dev
          </div>
        </div>
        <div>
          <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-slate-500">Password</p>
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 font-mono text-xs tracking-[0.3em] text-slate-400">
            ••••••••••
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-blue-400/20 bg-blue-500/5 px-3 py-2.5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-lg font-semibold tracking-[0.2em] text-blue-300">{code}</span>
          <span className="font-mono text-[10px] text-slate-500">{secondsLeft}s</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-linear"
            style={{ width: `${(secondsLeft / 30) * 100}%` }}
          />
        </div>
      </div>

      <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25">
        Login
      </button>

      <div className="mt-4 flex items-center gap-2 text-[11px] text-emerald-300">
        <ShieldCheck className="h-3.5 w-3.5" />
        2FA Protected — TOTP verified
      </div>
    </div>
  );
}

/** Animated "Live Auction" mock — incrementing bid for the auction project. */
function AuctionVisual() {
  const [bid, setBid] = useState(72500);
  const [bidders, setBidders] = useState(24);
  const [secondsLeft, setSecondsLeft] = useState(272);

  useEffect(() => {
    const bidId = setInterval(() => {
      setBid((b) => b + 500 + Math.floor(Math.random() * 4) * 500);
      setBidders((n) => (Math.random() > 0.5 ? n + 1 : n));
    }, 3000);
    const timeId = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 272)), 1000);
    return () => {
      clearInterval(bidId);
      clearInterval(timeId);
    };
  }, []);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="glass relative w-full max-w-sm rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse-dot" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400">
            Live Auction
          </span>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <Users className="h-3.5 w-3.5" />
          {bidders} bidders
        </span>
      </div>

      <div className="mt-5 flex h-28 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-night-700 to-night-800">
        <span className="font-display text-xl font-bold text-white/80">MacBook Pro</span>
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Current Bid</p>
        <motion.p
          key={bid}
          initial={{ scale: 1.12, color: "#818cf8" }}
          animate={{ scale: 1, color: "#ffffff" }}
          transition={{ duration: 0.5 }}
          className="mt-1 font-display text-3xl font-extrabold"
        >
          ₹{bid.toLocaleString("en-IN")}
        </motion.p>
      </div>

      <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/25">
        Place Bid
      </button>

      <p className="mt-4 text-[11px] text-slate-500">
        Minimum increment ₹500 — closes in {mm}:{ss}
      </p>
    </div>
  );
}

const VISUALS = { auth: AuthVisual, auction: AuctionVisual };

export default function ProjectCard({ project, reverse = false }) {
  const Visual = VISUALS[project.visual];

  return (
    <motion.article {...fadeUp} className="group relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr ${project.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15`}
      />

      {/* Visual */}
      <div className={`relative flex justify-center ${reverse ? "lg:order-2" : ""}`}>
        <div
          aria-hidden="true"
          className={`absolute inset-x-8 top-10 bottom-0 rounded-[2rem] bg-gradient-to-br ${project.accent} opacity-20 blur-2xl`}
        />
        <div className="relative transition-transform duration-500 group-hover:-translate-y-2">
          <Visual />
        </div>
      </div>

      {/* Content */}
      <div className={reverse ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-slate-500">{project.index}</span>
          <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">
            {project.badge}
          </span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">{project.title}</h3>
        <p className="mt-2 font-mono text-sm text-purple-300">{project.subtitle}</p>
        <p className="mt-4 leading-relaxed text-slate-400">{project.summary}</p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to={`/project/${project.id}`}
            className="group/link inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform hover:scale-[1.03]"
          >
            View Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </Link>
          <a
            href={project.github || profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition-colors hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

