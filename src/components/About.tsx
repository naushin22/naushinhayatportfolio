import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';
import { usePortfolioContent } from '../lib/PortfolioProvider';

export default function About() {
  const { content } = usePortfolioContent();
  const metadata = [
    { label: 'Location', value: content.profile.location, sub: 'Currently pursuing MCA at KIIT' },
    { label: 'Education', value: content.education[0]?.degree ?? 'MCA', sub: content.education[0]?.period ?? '' },
    { label: 'Focus', value: content.profile.role, sub: 'AI/ML, Automation, Mobile' },
  ];
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-editorial">
        <ScrollReveal>
          <SectionLabel className="mb-16">About</SectionLabel>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Main content */}
          <div className="md:col-span-8">
            <ScrollReveal>
              <h2 className="font-display text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-tightest text-primary text-balance">
                {content.profile.aboutTitle}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10 max-w-2xl space-y-6">
                {content.profile.aboutBody.map((paragraph) => (
                  <p key={paragraph} className="font-body text-base font-light leading-[1.7] text-secondary md:text-lg">{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Metadata sidebar */}
          <div className="md:col-span-4 md:border-l md:border-border md:pl-10">
            <div className="space-y-10">
              {metadata.map((item, i) => (
                <ScrollReveal key={item.label} delay={0.2 + i * 0.1}>
                  <div className="border-b border-border pb-6">
                    <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
                      {item.label}
                    </span>
                    <p className="mt-2 font-display text-lg font-medium tracking-tight text-primary">
                      {item.value}
                    </p>
                    <p className="mt-1 font-body text-[13px] font-light text-secondary">
                      {item.sub}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
