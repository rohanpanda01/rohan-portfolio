import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

// Shared fullscreen modal used to preview certificate PDFs.
export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${cert.title} certificate`}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="glass relative flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-night-900"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <p className="font-display text-sm font-semibold text-white">{cert.title}</p>
                <p className="text-xs text-slate-400">
                  {cert.provider}
                  {cert.grade ? ` — ${cert.grade}` : ""}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white"
                aria-label="Close certificate"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <iframe src={cert.pdf} title={cert.title} className="h-[62vh] w-full bg-white" />
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
              <span className="font-mono text-xs text-slate-500">{cert.period}</span>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
              >
                Open PDF in new tab
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
