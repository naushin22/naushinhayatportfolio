import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';

const stages = [
  {
    index: '01',
    title: 'Understand',
    description:
      'Understand the problem, requirements, constraints, and expected outcome.',
  },
  {
    index: '02',
    title: 'Build',
    description:
      'Break the problem down and develop a practical technical solution.',
  },
  {
    index: '03',
    title: 'Debug',
    description:
      'Analyze failures systematically and identify the underlying cause.',
  },
  {
    index: '04',
    title: 'Refine',
    description:
      'Test, improve, deploy, and make the solution more reliable.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-editorial">
        <ScrollReveal>
          <SectionLabel className="mb-8">How I Approach Problems</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-20 font-display text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-tightest text-primary text-balance">
            A methodical{' '}
            <span className="italic font-light text-secondary">process.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.index} delay={i * 0.1}>
              <div className="group h-full bg-bg p-8 transition-colors duration-500 hover:bg-bg-elevated md:p-10">
                <span className="font-display text-[13px] font-medium tracking-wide text-muted">
                  {stage.index}
                </span>
                <h3 className="mt-6 font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
                  {stage.title}
                </h3>
                <p className="mt-4 font-body text-[14px] font-light leading-[1.6] text-secondary">
                  {stage.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
