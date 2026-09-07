import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Cloud, Database, ExternalLink, FolderUp, FunctionSquare } from "lucide-react";
import SectionHeading, { fadeUp } from "./SectionHeading.jsx";
import CertificateModal from "./CertificateModal.jsx";

const internshipCert = {
  title: "Internship Certificate — Industry Exposure Program (IEP)",
  provider: "Hebbale Academy",
  period: "May 2025 — Jul 2025 · 45 days",
  pdf: "/certificates/hebbale-internship.pdf",
};

const role = {
  title: "Industry Exposure Program",
  org: "Hebbale Academy · Virtual Internship (Python – AWS)",
  period: "May 2025 — Jul 2025",
  points: [
    "Built frontend development workflows and responsive UI components.",
    "Developed Python backend components for cloud workflows.",
    "Deployed serverless functions with AWS Lambda.",
    "Stored and served assets with Amazon S3.",
    "Modelled application data with Amazon DynamoDB.",
    "Collaborated through the Cloud First Hackathon using Git and VS Code.",
  ],
  stack: ["Python", "AWS", "Lambda", "S3", "DynamoDB", "Git", "VS Code"],
};

export default function Experience() {
  const [activeCert, setActiveCert] = useState(null);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative border-y border-white/5 bg-night-900/50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Industry <span className="text-gradient">exposure.</span>
            </>
          }
        />

        {/* Vertical timeline — the line grows while scrolling */}
        <div ref={timelineRef} className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-white/10" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[9px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-blue-400 to-purple-500"
          />

          <motion.div {...fadeUp} className="relative pl-12">
            <span className="absolute left-[2px] top-7 h-[17px] w-[17px] rounded-full border-[3px] border-night-900 bg-gradient-to-br from-blue-400 to-purple-500 shadow-[0_0_16px_rgb(99_102_241/0.6)]" />
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{role.title}</h3>
                    <p className="text-xs text-slate-400">{role.org}</p>
                  </div>
                </div>
                <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-300">
                  {role.period}
                </span>
              </div>

              <ul className="mt-6 space-y-2.5">
                {role.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                {role.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex justify-end border-t border-white/5 pt-4">
                <button
                  onClick={() => setActiveCert(internshipCert)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
                >
                  View Internship Certificate
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cloud exposure */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 text-white">
                <Cloud className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl font-bold text-white">Exploring the Cloud</h3>
            </div>
            <p className="mt-4 leading-relaxed text-slate-400">
              Industry exposure through Python and AWS training and the Cloud First Hackathon —
              building and deploying serverless components on AWS.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["AWS Lambda", "Amazon S3", "DynamoDB", "Cloud First Hackathon"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="glass rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <FunctionSquare className="h-4 w-4 shrink-0 text-orange-400" />
                <span className="font-mono text-sm text-slate-200">AWS Lambda</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <FolderUp className="h-4 w-4 shrink-0 text-amber-400" />
                <span className="font-mono text-sm text-slate-200">Amazon S3</span>
              </div>
            </div>

            <svg viewBox="0 0 240 56" className="mx-auto my-1 h-12 w-60" fill="none" aria-hidden="true">
              <path d="M60 4 V22 H120 V48" stroke="rgb(255 255 255 / 0.18)" strokeWidth="1.5" />
              <path d="M180 4 V22 H120 V48" stroke="rgb(255 255 255 / 0.18)" strokeWidth="1.5" />
            </svg>

            <div className="mx-auto flex w-fit items-center gap-3 rounded-xl border border-purple-400/25 bg-purple-500/10 px-5 py-3">
              <Database className="h-4 w-4 text-purple-300" />
              <span className="font-mono text-sm text-purple-200">DynamoDB</span>
            </div>

            <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Serverless data flow
            </p>
          </motion.div>
        </div>
      </div>

      <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
}

