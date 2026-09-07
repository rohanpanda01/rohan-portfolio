import { motion } from "framer-motion";

// Shared reveal animation — used across sections and cards.
export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div {...fadeUp} className={`flex flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-blue-300">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {subtitle ? <p className="max-w-2xl text-base text-slate-400 sm:text-lg">{subtitle}</p> : null}
    </motion.div>
  );
}
