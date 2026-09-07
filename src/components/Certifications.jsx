import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading, { fadeUp } from "./SectionHeading.jsx";
import CertificateModal from "./CertificateModal.jsx";
import { certifications } from "../data/certifications.js";

export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <section id="certifications" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Certified, and <span className="text-gradient">still learning.</span>
            </>
          }
          subtitle="Structured training programs that back the stack I build with every day."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              {...fadeUp}
              className="glass flex flex-col overflow-hidden rounded-2xl p-6 transition-colors hover:border-purple-400/30 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                  <Award className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-amber-400/25 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  {cert.grade}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-white">{cert.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{cert.provider}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{cert.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {cert.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="font-mono text-xs text-slate-500">{cert.period}</span>
                <button
                  onClick={() => setActive(cert)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate modal */}
      <CertificateModal cert={active} onClose={() => setActive(null)} />
    </section>
  );
}

