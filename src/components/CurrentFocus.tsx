import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';
import { usePortfolioContent } from '../lib/PortfolioProvider';

export default function CurrentFocus() {
  const { content } = usePortfolioContent();
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-editorial">
        <ScrollReveal>
          <SectionLabel className="mb-8">Currently Learning & Building</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-light leading-[1.3] tracking-tight text-primary text-balance">
              {content.currentFocus.description}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-2">
            {content.currentFocus.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border px-4 py-2 font-body text-[12px] font-medium tracking-wide text-secondary transition-colors hover:border-border-hover hover:text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
