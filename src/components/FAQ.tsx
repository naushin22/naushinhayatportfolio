import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';

const faqs = [
  {
    question: 'What technologies do you work with most?',
    answer:
      'Python is my primary language for AI/ML and automation work. I also work with C++, Java, SQL, and Dart. For computer vision I use YOLOv8 and OpenCV, and I package systems with Docker. On the mobile side, I build with Flutter and Dart.',
  },
  {
    question: 'Are you open to software development opportunities?',
    answer:
      'Yes. I am currently pursuing my MCA at KIIT and am open to software development roles, internships, and collaborative projects. I am based in Bhubaneswar, India, and am open to remote work.',
  },
  {
    question: 'What kind of projects interest you?',
    answer:
      'I am drawn to projects that sit at the intersection of software and the physical world — computer vision, industrial automation, and systems that require debugging across networking, hardware, and application layers. I also enjoy building mobile applications with Flutter.',
  },
  {
    question: 'Can you share more details about your internship work?',
    answer:
      'During my AI/ML internship at Tata Motors, I built a real-time detection system in Python, connected it to Rockwell PLC/Modbus automation hardware, and packaged it with Docker and PyInstaller. During my Flutter Developer internship at Ekana Technologies, I shipped mobile features in Dart and Flutter within a remote agile team.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-editorial">
        <ScrollReveal>
          <SectionLabel className="mb-8">FAQ</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-20 font-display text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-tightest text-primary text-balance">
            Common{' '}
            <span className="italic font-light text-secondary">questions.</span>
          </h2>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl space-y-0">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="border-t border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-[clamp(1.1rem,2vw,1.4rem)] font-medium leading-tight tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-secondary transition-colors group-hover:text-accent">
                    {openIndex === i ? (
                      <Minus size={18} strokeWidth={1.5} />
                    ) : (
                      <Plus size={18} strokeWidth={1.5} />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 font-body text-[15px] font-light leading-[1.7] text-secondary">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-b border-border" />
        </div>
      </div>
    </section>
  );
}
