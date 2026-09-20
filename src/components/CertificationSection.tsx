import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
    date: 'August 2026',
  },
  {
    name: 'Data Analytics Job Simulation — Deloitte via Forage',
    date: 'May 2026',
  },
  {
    name: 'UiPath Academy Agentic Automation Developer Associate Training',
    date: 'January 2026',
  },
  {
    name: 'Artificial Intelligence Capsule Program — Samsung Innovation Campus',
    date: 'January 2023',
  },
];

export default function CertificationSection() {
  return (
    <section id="certifications" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-editorial">
        <ScrollReveal>
          <SectionLabel className="mb-8">Certifications</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-20 font-display text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-tightest text-primary text-balance">
            Continuous{' '}
            <span className="italic font-light text-secondary">learning.</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 0.08}>
              <div className="group grid grid-cols-1 gap-4 border-t border-border py-8 transition-colors duration-300 hover:border-border-hover md:grid-cols-12 md:gap-10">
                <div className="md:col-span-1">
                  <span className="font-display text-[13px] font-medium tracking-wide text-muted">
                    0{i + 1}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <p className="font-display text-[clamp(1.1rem,2vw,1.5rem)] font-light leading-tight tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
                    {cert.name}
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <p className="font-body text-[12px] font-medium tracking-wide text-secondary">
                    {cert.date}
                  </p>
                </div>
              </div>
              {i === certifications.length - 1 && (
                <div className="border-b border-border" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
