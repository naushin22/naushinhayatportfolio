import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-editorial">
        <ScrollReveal>
          <SectionLabel className="mb-8">Contact</SectionLabel>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Main CTA */}
          <div className="md:col-span-8">
            <ScrollReveal>
              <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tightest text-primary text-balance">
                Let's build{' '}
                <span className="italic font-light text-accent">something.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-8 max-w-xl font-body text-base font-light leading-relaxed text-secondary md:text-lg">
                Open to software development opportunities, internships, and
                collaborative projects. Reach out and I'll get back to you.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <motion.a
                href="mailto:naushinhayat22@gmail.com"
                whileHover={{ x: 4 }}
                className="group mt-10 inline-flex items-center gap-3 font-display text-[clamp(1.5rem,3vw,2.5rem)] font-light tracking-tight text-primary transition-colors hover:text-accent"
              >
                naushinhayat22@gmail.com
                <ArrowUpRight
                  size={28}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            </ScrollReveal>
          </div>

          {/* Contact details */}
          <div className="md:col-span-4 md:border-l md:border-border md:pl-10">
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
                    Email
                  </span>
                  <a
                    href="mailto:naushinhayat22@gmail.com"
                    className="mt-2 flex items-center gap-2 font-body text-[14px] font-light text-secondary transition-colors hover:text-accent"
                  >
                    <Mail size={14} strokeWidth={1.5} />
                    naushinhayat22@gmail.com
                  </a>
                </div>

                <div>
                  <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
                    Phone
                  </span>
                  <a
                    href="tel:+919696752540"
                    className="mt-2 flex items-center gap-2 font-body text-[14px] font-light text-secondary transition-colors hover:text-accent"
                  >
                    <Phone size={14} strokeWidth={1.5} />
                    9696752540
                  </a>
                </div>

                <div>
                  <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
                    Location
                  </span>
                  <p className="mt-2 flex items-center gap-2 font-body text-[14px] font-light text-secondary">
                    <MapPin size={14} strokeWidth={1.5} />
                    Bhubaneswar, India
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
