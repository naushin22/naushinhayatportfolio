import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-12 pt-32 md:px-10"
    >
      {/* Top metadata bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="mx-auto flex w-full max-w-editorial items-center justify-between border-b border-border pb-6"
      >
        <span className="font-body text-[11px] font-medium uppercase tracking-wide-3 text-secondary">
          Software Developer
        </span>
        <span className="font-body text-[11px] font-medium uppercase tracking-wide-3 text-secondary">
          Portfolio / 2026
        </span>
      </motion.div>

      {/* Main hero content */}
      <div className="mx-auto flex w-full max-w-editorial flex-1 flex-col justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-accent" />
          <span className="font-body text-[11px] font-medium uppercase tracking-wide-3 text-accent">
            Software Developer
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-tightest text-primary text-balance">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="block"
          >
            Building software
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease }}
            className="block"
          >
            systems that turn
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease }}
            className="block"
          >
            ideas into{' '}
            <span className="italic font-light text-accent">working products.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease }}
          className="mt-8 max-w-xl font-body text-base font-light leading-relaxed text-secondary md:text-lg"
        >
          MCA postgraduate working across software development, AI/ML,
          computer vision, automation, and mobile applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-body text-[13px] font-medium tracking-wide text-bg transition-all duration-300 hover:bg-accent"
          >
            VIEW MY WORK
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 font-body text-[13px] font-medium tracking-wide text-primary transition-all duration-300 hover:border-border-hover hover:text-accent"
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </div>

      {/* Bottom metadata */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease }}
        className="mx-auto flex w-full max-w-editorial items-end justify-between border-t border-border pt-6"
      >
        <div className="flex flex-col gap-1">
          <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
            Based in
          </span>
          <span className="font-body text-[12px] font-medium tracking-wide text-secondary">
            Bhubaneswar, India
          </span>
        </div>

        <div className="hidden flex-col items-center gap-2 sm:flex">
          <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
            Scroll
          </span>
          <ArrowDown
            size={14}
            strokeWidth={1.5}
            className="scroll-pulse text-secondary"
          />
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
            Status
          </span>
          <span className="font-body text-[12px] font-medium tracking-wide text-secondary">
            Open to opportunities
          </span>
        </div>
      </motion.div>
    </section>
  );
}
