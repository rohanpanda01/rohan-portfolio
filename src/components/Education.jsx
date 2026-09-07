import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const education = [
  {
    id: "mca",
    degree: "MCA",
    field: "Master of Computer Applications",
    school: "GIET University, Gunupur, Rayagada",
    period: "Jul 2024 — Jun 2026",
    cgpa: "7.19",
  },
  {
    id: "bca",
    degree: "BCA",
    field: "Bachelor of Computer Applications",
    school: "Sambalpur University, Odisha",
    period: "Sep 2019 — Jun 2022",
    cgpa: "7.56",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative border-y border-white/5 bg-night-900/50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Strong academic <span className="text-gradient">foundation.</span>
            </>
          }
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-blue-400/30 sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  CGPA {edu.cgpa}
                </span>
              </div>
              <h3 className="mt-5 font-display text-3xl font-extrabold text-white">{edu.degree}</h3>
              <p className="mt-1 text-sm font-medium text-blue-300">{edu.field}</p>
              <p className="mt-3 text-sm text-slate-400">{edu.school}</p>
              <p className="mt-4 font-mono text-xs text-slate-500">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
