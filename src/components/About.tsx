import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';

const metadata = [
  {
    label: 'Location',
    value: 'Bhubaneswar, India',
  sub: 'Currently pursuing MCA at KIIT',
  },
  {
    label: 'Education',
    value: 'MCA — KIIT',
    sub: 'Aug 2025 – Jun 2027',
  },
  {
    label: 'Focus',
    value: 'Software Development',
    sub: 'AI/ML, Automation, Mobile',
  },
];

export default function About() {
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
                A developer who likes{' '}
                <span className="italic font-light text-secondary">
                  understanding how things work.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10 max-w-2xl space-y-6">
                <p className="font-body text-base font-light leading-[1.7] text-secondary md:text-lg">
                  Currently pursuing a Master of Computer Applications at KIIT,
                  I have built a foundation across programming, algorithms,
                  databases, operating systems, software development, and
                  applied machine learning.
                </p>
                <p className="font-body text-base font-light leading-[1.7] text-secondary md:text-lg">
                  My experience has also taken me beyond application code into
                  networking, Docker deployment, industrial automation, and
                  hardware integration.
                </p>
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
