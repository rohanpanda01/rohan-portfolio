import { motion } from "framer-motion";
import { Cloud, Database, Monitor, Server } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { skillCategories } from "../data/skills.js";

const ICONS = { frontend: Monitor, backend: Server, database: Database, cloud: Cloud };

export default function Skills() {
  return (
    <section id="skills" className="relative border-y border-white/5 bg-night-900/50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Tools I use to <span className="text-gradient">build and ship.</span>
            </>
          }
          subtitle="A focused stack — from structured backend services to responsive, user-first interfaces."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = ICONS[category.id];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass group rounded-2xl p-6 transition-colors hover:border-blue-400/30"
              >
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-white shadow-lg`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-colors group-hover:border-white/15"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
