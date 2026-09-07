import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";

const events = [
  {
    year: "2019",
    title: "BCA Started",
    detail: "Sambalpur University, Odisha",
    tag: "Education",
  },
  {
    year: "2022",
    title: "BCA Completed",
    detail: "Graduated with CGPA 7.56",
    tag: "Education",
  },
  {
    year: "2022",
    title: "Full Stack Java Training",
    detail: "NareshIT Technologies — from Core Java to full-stack development",
    tag: "Certification",
  },
  {
    year: "2024",
    title: "MCA Started",
    detail: "GIET University, Gunupur, Rayagada",
    tag: "Education",
  },
  {
    year: "2025",
    title: "Industry Exposure Program",
    detail: "Python backend components, AWS Lambda, S3 and DynamoDB",
    tag: "Experience",
  },
  {
    year: "2026",
    title: "MCA Completed",
    detail: "GIET University — CGPA 7.19",
    tag: "Education",
  },
  {
    year: "2026",
    title: "MFA Authentication System",
    detail: "TOTP-based two-factor authentication — Java, Spring Boot, React, MySQL",
    tag: "Project",
  },
  {
    year: "2026",
    title: "Software Developer",
    detail: "Building scalable applications and clean, user-focused interfaces",
    tag: "Now",
    highlight: true,
  },
];

const TAG_STYLES = {
  Education: "border-sky-400/25 bg-sky-500/10 text-sky-300",
  Certification: "border-amber-400/25 bg-amber-500/10 text-amber-300",
  Experience: "border-emerald-400/25 bg-emerald-500/10 text-emerald-300",
  Project: "border-purple-400/25 bg-purple-500/10 text-purple-300",
  Now: "border-blue-400/30 bg-blue-500/10 text-blue-300",
};

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="journey" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Journey"
          title={
            <>
              The journey <span className="text-gradient">so far.</span>
            </>
          }
          subtitle="From BCA classrooms to building full-stack systems — step by step."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-[9px] top-1 bottom-1 w-px bg-white/10" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[9px] top-1 bottom-1 w-px origin-top bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-500"
          />

          <div className="space-y-8">
            {events.map((event, i) => (
              <motion.div
                key={`${event.year}-${event.title}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="relative pl-12"
              >
                <span
                  className={`absolute left-[2px] top-6 h-[17px] w-[17px] rounded-full border-[3px] border-night-950 ${
                    event.highlight
                      ? "bg-gradient-to-br from-blue-400 to-purple-500 shadow-[0_0_18px_rgb(139_92_246/0.7)]"
                      : "bg-gradient-to-br from-slate-500 to-slate-700"
                  }`}
                />
                <div
                  className={`rounded-2xl p-5 ${
                    event.highlight
                      ? "border border-blue-400/30 bg-gradient-to-r from-blue-600/15 to-purple-600/15"
                      : "glass"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-white">{event.year}</span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${TAG_STYLES[event.tag]}`}
                    >
                      {event.tag}
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-semibold text-white">{event.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{event.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
