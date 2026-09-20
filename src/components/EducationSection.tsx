import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';
import { usePortfolioContent } from '../lib/PortfolioProvider';

const education = [
  {
    index: '01',
    degree: 'Master of Computer Applications',
    institution: 'KIIT, Kalinga Institute of Industrial Technology',
    period: 'Aug 2025 – Jun 2027',
  },
  {
    index: '02',
    degree: 'Bachelor of Computer Applications',
    institution: 'Lucknow University',
    period: 'Oct 2021 – Jun 2024',
  },
];

export default function EducationSection() {
  const { content } = usePortfolioContent();
  const visibleEducation = content.education;
  return (
    <section id="education" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-editorial">
        <ScrollReveal>
          <SectionLabel className="mb-8">Education</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-20 font-display text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-tightest text-primary text-balance">
            Academic{' '}
            <span className="italic font-light text-secondary">foundation.</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {visibleEducation.map((edu, i) => (
            <ScrollReveal key={edu.index} delay={i * 0.1}>
              <div className="grid grid-cols-1 gap-4 border-t border-border py-10 md:grid-cols-12 md:gap-10 md:py-14">
                <div className="md:col-span-2">
                  <span className="font-display text-[13px] font-medium tracking-wide text-muted">
                    {edu.index}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-[clamp(1.25rem,3vw,2rem)] font-medium leading-tight tracking-tight text-primary">
                    {edu.degree}
                  </h3>
                  <p className="mt-2 font-body text-[15px] font-light text-secondary">
                    {edu.institution}
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <p className="font-body text-[12px] font-medium tracking-wide text-secondary">
                    {edu.period}
                  </p>
                </div>
              </div>
              {i === visibleEducation.length - 1 && (
                <div className="border-b border-border" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
