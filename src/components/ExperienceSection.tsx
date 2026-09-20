import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';
import { motion } from 'framer-motion';
import { usePortfolioContent } from '../lib/PortfolioProvider';

const experiences = [
  {
    index: '01',
    role: 'AI/ML Intern',
    company: 'Tata Motors',
    location: 'Lucknow',
    period: 'May 2026 – June 2026',
    points: [
      'Worked across design, implementation, testing, deployment, and production support',
      'Built a real-time detection system in Python',
      'Investigated networking, application logic, and hardware integration issues',
      'Connected the vision system with Rockwell PLC/Modbus automation',
      'Packaged the system with Docker and PyInstaller',
      'Diagnosed system-level failures involving networking, streams, and hardware communication',
    ],
  },
  {
    index: '02',
    role: 'Flutter Developer Intern',
    company: 'Ekana Technologies',
    location: 'Remote',
    period: 'July 2024 – February 2025',
    points: [
      'Built and shipped mobile application features using Dart and Flutter while working with senior developers in a remote cross-functional agile team.',
    ],
  },
];

export default function ExperienceSection() {
  const { content } = usePortfolioContent();
  const visibleExperiences = content.experiences;
  return (
    <section id="experience" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-editorial">
        <ScrollReveal>
          <SectionLabel className="mb-8">Experience</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-20 font-display text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-tightest text-primary text-balance">
            Where I've{' '}
            <span className="italic font-light text-secondary">worked.</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {visibleExperiences.map((exp, i) => (
            <ScrollReveal key={exp.index} delay={i * 0.1}>
              <div className="grid grid-cols-1 gap-6 border-t border-border py-12 md:grid-cols-12 md:gap-10 md:py-16">
                {/* Index + period */}
                <div className="md:col-span-3">
                  <span className="font-display text-[13px] font-medium tracking-wide text-muted">
                    {exp.index}
                  </span>
                  <p className="mt-3 font-body text-[12px] font-medium tracking-wide text-secondary">
                    {exp.period}
                  </p>
                </div>

                {/* Role + company */}
                <div className="md:col-span-4">
                  <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-tight tracking-tight text-primary">
                    {exp.role}
                  </h3>
                  <p className="mt-2 font-body text-[14px] font-light text-secondary">
                    {exp.company} · {exp.location}
                  </p>
                </div>

                {/* Points */}
                <div className="md:col-span-5">
                  <ul className="space-y-3">
                    {exp.points.map((point, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + j * 0.08 }}
                        className="flex gap-3 font-body text-[15px] font-light leading-[1.6] text-secondary"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              {i === visibleExperiences.length - 1 && (
                <div className="border-b border-border" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
