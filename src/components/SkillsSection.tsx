import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';
import { usePortfolioContent } from '../lib/PortfolioProvider';

const skillClusters = [
  {
    label: 'Programming',
    items: ['Python', 'C++', 'Java', 'SQL', 'Dart'],
  },
  {
    label: 'Computer Science',
    items: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Complexity Analysis', 'SDLC'],
  },
  {
    label: 'Systems',
    items: ['Docker', 'Git', 'GitHub', 'Networking', 'RTSP', 'TCP/IP'],
  },
  {
    label: 'AI / ML',
    items: ['YOLOv8', 'OpenCV'],
  },
  {
    label: 'Automation',
    items: ['Rockwell PLC', 'Modbus', 'Automation Pipelines'],
  },
  {
    label: 'Mobile',
    items: ['Flutter'],
  },
];

export default function SkillsSection() {
  const { content } = usePortfolioContent();
  const visibleSkillClusters = content.skills;
  return (
    <section id="skills" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-editorial">
        <ScrollReveal>
          <SectionLabel className="mb-8">Tools & Technologies</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-6 font-display text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-tightest text-primary text-balance">
            A practical{' '}
            <span className="italic font-light text-secondary">toolkit.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mb-20 max-w-xl font-body text-base font-light leading-relaxed text-muted">
            A practical toolkit built through coursework, internships, and
            hands-on projects — not a claim of expert-level mastery in every
            technology listed.
          </p>
        </ScrollReveal>

        <div className="space-y-0">
          {visibleSkillClusters.map((cluster, i) => (
            <ScrollReveal key={cluster.label} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-6 border-t border-border py-8 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <span className="font-body text-[11px] font-medium uppercase tracking-wide-3 text-accent">
                    {cluster.label}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {cluster.items.map((item) => (
                      <span
                        key={item}
                        className="font-display text-[clamp(1.1rem,2vw,1.5rem)] font-light tracking-tight text-primary transition-colors duration-300 hover:text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-b border-border" />
        </div>
      </div>
    </section>
  );
}
