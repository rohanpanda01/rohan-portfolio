import { motion } from "framer-motion";
import { Blocks, Code2, Gauge, PenTool, Search } from "lucide-react";
import SectionHeading, { fadeUp } from "./SectionHeading.jsx";
import { profile } from "../data/profile.js";

const highlights = [
  { label: "MCA Graduate", detail: "GIET University — 2026" },
  { label: "Full-Stack Focus", detail: "Java • Spring Boot • React" },
  { label: "REST APIs", detail: "Spring Boot integrations" },
  { label: "Databases", detail: "MySQL • MongoDB" },
];

const approach = [
  { step: "01", title: "Understand", detail: "Understand the problem before touching code.", icon: Search },
  { step: "02", title: "Design", detail: "Plan the user experience end to end.", icon: PenTool },
  { step: "03", title: "Develop", detail: "Build reusable, maintainable components.", icon: Code2 },
  { step: "04", title: "Integrate", detail: "Connect APIs, services and databases.", icon: Blocks },
  { step: "05", title: "Improve", detail: "Debug, optimise and refine continuously.", icon: Gauge },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              More than just <span className="text-gradient">writing code.</span>
            </>
          }
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-5">
          <motion.div {...fadeUp} className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-slate-300">{profile.about}</p>
            <p className="mt-5 leading-relaxed text-slate-400">
              From scalable backend services in Java and Spring Boot to responsive, user-focused
              interfaces in React — I care about building software that is structured, secure and
              genuinely useful.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {highlights.map((h) => (
              <motion.div key={h.label} {...fadeUp} className="glass rounded-2xl p-5">
                <p className="text-sm font-semibold text-white">{h.label}</p>
                <p className="mt-1 text-xs text-slate-400">{h.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development approach */}
        <div className="mt-24">
          <motion.h3 {...fadeUp} className="text-center font-display text-2xl font-bold text-white sm:text-3xl">
            My <span className="text-gradient">development approach</span>
          </motion.h3>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {approach.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="glass group relative overflow-hidden rounded-2xl p-5 transition-colors hover:border-blue-400/30"
                >
                  <div className="absolute -right-3 -top-3 font-display text-6xl font-extrabold text-white/5 transition-colors group-hover:text-blue-400/10">
                    {a.step}
                  </div>
                  <Icon className="h-6 w-6 text-blue-400" />
                  <p className="mt-4 font-display text-base font-semibold text-white">{a.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{a.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
