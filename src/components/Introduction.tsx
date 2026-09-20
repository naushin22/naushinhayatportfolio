import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const statementText = [
  "I'm Naushin, an MCA postgraduate with a practical software development background.",
  " My experience spans Python, AI/ML, computer vision, Flutter, Docker, networking, and industrial automation.",
  " I enjoy working through ambiguous technical problems, understanding how systems fail, and turning those problems into working solutions.",
];

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const lineWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={ref}
      className="relative px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-accent" />
          <span className="font-body text-[11px] font-medium uppercase tracking-wide-3 text-secondary">
            Introduction
          </span>
        </motion.div>

        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tightest text-primary text-balance">
          <span className="block">I build, debug,</span>
          <span className="block italic font-light text-accent">and learn.</span>
        </h2>

        <motion.div
          style={{ scaleX: lineWidth }}
          className="mt-12 h-px w-full origin-left bg-border"
        />

        <div className="mt-12 max-w-3xl">
          <p className="font-display text-[clamp(1.25rem,2.5vw,2rem)] font-light leading-[1.4] tracking-tight text-primary text-balance">
            {statementText.map((segment, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.15 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0.15 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {segment}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
