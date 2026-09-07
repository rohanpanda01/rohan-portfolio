import { Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Blocks,
  CheckCircle2,
  ChevronDown,
  Database,
  Lightbulb,
  Monitor,
  Server,
  ShieldCheck,
  Trophy,
  Wrench,
} from "lucide-react";
import { getNextProject, getProjectById } from "../data/projects.js";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);
  const next = getNextProject(id);

  if (!project) {
    return (
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-4xl font-bold text-white">Case study not found</h1>
        <p className="mt-3 text-slate-400">The project you are looking for does not exist.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform hover:scale-[1.03]"
        >
          Back to Home
        </button>
      </section>
    );
  }

  const cs = project.caseStudy;

  const layers = [
    { label: "Problem", icon: AlertCircle, body: cs.problem },
    { label: "Solution", icon: Lightbulb, body: cs.solution },
    { label: "Architecture", icon: Blocks, body: cs.architecture },
    { label: "Frontend", icon: Monitor, body: cs.frontend },
    { label: "Backend", icon: Server, body: cs.backend },
    { label: "Database", icon: Database, body: cs.database },
    ...(cs.authentication
      ? [{ label: "Authentication", icon: ShieldCheck, body: cs.authentication }]
      : []),
  ];

  return (
    <section className="relative pt-28 pb-24 sm:pt-32">
      <div className="mx-auto max-w-5xl px-6">
        <button
          onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </button>

        {/* Header */}
        <motion.div {...fadeUp} className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              {project.badge}
            </span>
            <span className="font-mono text-sm text-slate-500">Project {project.index}</span>
          </div>

          <h1 className="mt-5 font-display text-4xl font-extrabold text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 font-mono text-base text-purple-300">{project.subtitle}</p>
          <p className="mt-5 max-w-3xl leading-relaxed text-slate-400">{cs.overview}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {project.stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 text-center">
              <p className="text-gradient font-display text-xl font-extrabold">{stat.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div {...fadeUp} className="glass mt-10 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-white">Key Features</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* System flow */}
        <motion.div {...fadeUp} className="mt-14">
          <h2 className="text-center font-display text-2xl font-bold text-white">System Flow</h2>
          <div className="mx-auto mt-8 flex max-w-md flex-col items-center">
            {cs.flow.map((step, i) => (
              <Fragment key={step}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="glass w-full rounded-xl px-5 py-3.5 text-center font-mono text-sm text-blue-200"
                >
                  {step}
                </motion.div>
                {i < cs.flow.length - 1 ? (
                  <ChevronDown className="my-1 h-5 w-5 text-purple-400/70" />
                ) : null}
              </Fragment>
            ))}
          </div>
        </motion.div>

        {/* Layers: Problem → Solution → ... */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <motion.div key={layer.label} {...fadeUp} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">{layer.label}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{layer.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Challenges */}
        <motion.div {...fadeUp} className="mt-14">
          <h2 className="font-display text-2xl font-bold text-white">
            Challenges <span className="text-gradient">& how I solved them</span>
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {cs.challenges.map((challenge, i) => (
              <motion.div key={challenge.title} {...fadeUp} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono text-xs text-purple-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Wrench className="h-4 w-4 text-slate-500" />
                </div>
                <p className="mt-4 font-semibold text-white">{challenge.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{challenge.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Result */}
        <motion.div
          {...fadeUp}
          className="mt-14 overflow-hidden rounded-2xl border border-blue-400/25 bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-purple-600/15 p-8"
        >
          <div className="flex items-center gap-3">
            <Trophy className="h-5 w-5 text-amber-400" />
            <h2 className="font-display text-xl font-bold text-white">Result</h2>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">{cs.result}</p>
        </motion.div>

        {/* Next case study */}
        <motion.div {...fadeUp} className="mt-14">
          <Link
            to={`/project/${next.id}`}
            className="glass group flex items-center justify-between rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-blue-400/30 sm:p-8"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Next case study
              </p>
              <p className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">{next.title}</p>
            </div>
            <ArrowRight className="h-6 w-6 text-blue-400 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

