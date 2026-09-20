import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';
import CVVisualization from './CVVisualization';

interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  details: {
    overview: string;
    role: string;
    whatWasBuilt: string[];
    challenges: string[];
    keyFunctionality: string[];
  };
  visualization: 'cabin-detection' | 'realtime-pipeline' | 'flutter-app';
}

const projects: Project[] = [
  {
    id: 'cabin-detection',
    index: '01',
    title: 'Industrial Cabin Detection System',
    category: 'AI / Computer Vision / Automation',
    description:
      'A YOLO-based object detection system developed for identifying industrial cabin-related objects in real-world conditions.',
    technologies: ['YOLOv8', 'Python', 'OpenCV', 'Docker', 'Rockwell PLC', 'Modbus', 'Networking'],
    details: {
      overview:
        'Designed and trained a YOLO-based object detection model for identifying industrial cabin-related objects in real-world factory conditions.',
      role: 'AI/ML development, dataset preparation, model training, and edge-case analysis.',
      whatWasBuilt: [
        'Designed and trained a YOLO-based object detection model',
        'Worked from dataset labeling through evaluation',
        'Tested against real-world edge cases including occlusion, blur, and poor lighting',
        'Analyzed frame-by-frame misclassifications',
        'Investigated failure patterns and iterated on model performance',
      ],
      challenges: [
        'Handling edge cases like occlusion, blur, and poor lighting',
        'Analyzing frame-by-frame misclassifications to find failure patterns',
        'Iterating on model performance based on real-world testing',
      ],
      keyFunctionality: [
        'Real-time object detection using YOLOv8',
        'Dataset labeling and evaluation pipeline',
        'Failure pattern analysis and model iteration',
      ],
    },
    visualization: 'cabin-detection',
  },
  {
    id: 'realtime-pipeline',
    index: '02',
    title: 'Real-time Detection & Industrial Integration',
    category: 'Software Development / Automation / Systems',
    description:
      'A real-time detection pipeline developed during an AI/ML internship at Tata Motors, covering design, implementation, testing, deployment, and production support.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Docker', 'PyInstaller', 'Rockwell PLC', 'Modbus', 'Networking'],
    details: {
      overview:
        'A real-time detection pipeline developed during an AI/ML internship at Tata Motors, covering the full software development lifecycle from design through production support.',
      role: 'AI/ML Intern — building, testing, deploying, and supporting the detection system.',
      whatWasBuilt: [
        'Built a real-time detection system in Python',
        'Worked across the software development lifecycle',
        'Connected the vision system to factory-floor hardware',
        'Worked with Rockwell PLC/Modbus automation',
        'Investigated networking and stream connectivity issues',
        'Diagnosed hardware communication failures',
        'Packaged the solution using Docker and PyInstaller',
      ],
      challenges: [
        'Diagnosing system-level failures involving networking, streams, and hardware communication',
        'Investigating networking and stream connectivity issues',
        'Connecting vision software to factory-floor PLC hardware',
      ],
      keyFunctionality: [
        'Real-time Python detection pipeline',
        'PLC/Modbus hardware integration',
        'Docker and PyInstaller packaging for deployment',
      ],
    },
    visualization: 'realtime-pipeline',
  },
  {
    id: 'flutter-app',
    index: '03',
    title: 'Flutter Application Development',
    category: 'Mobile Development',
    description:
      'Built and shipped mobile application features using Dart and Flutter while working with senior developers in a remote cross-functional agile environment.',
    technologies: ['Dart', 'Flutter'],
    details: {
      overview:
        'Built and shipped mobile application features using Dart and Flutter while working with senior developers in a remote cross-functional agile team.',
      role: 'Flutter Developer Intern at Ekana Technologies (Jul 2024 – Feb 2025).',
      whatWasBuilt: [
        'Built and shipped mobile application features using Dart and Flutter',
        'Worked with senior developers in a remote cross-functional agile environment',
      ],
      challenges: [
        'Collaborating effectively in a remote agile development environment',
        'Shipping features that met production standards',
      ],
      keyFunctionality: [
        'Mobile application feature development in Flutter',
        'Cross-functional remote team collaboration',
      ],
    },
    visualization: 'flutter-app',
  },
];

export default function ProjectSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-editorial">
        <ScrollReveal>
          <SectionLabel className="mb-8">Selected Work</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-20 font-display text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-tightest text-primary text-balance">
            Projects that span{' '}
            <span className="italic font-light text-secondary">
              vision, systems, and mobile.
            </span>
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {projects.map((project, i) => {
            const isExpanded = expandedId === project.id;
            const isReversed = i % 2 === 1;

            return (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <div
                  className={`border-t border-border py-12 md:py-16 ${
                    i === projects.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <div
                    className={`grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 ${
                      isReversed ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Visualization */}
                    <div
                      className={`md:col-span-5 ${
                        isReversed ? 'md:order-2' : ''
                      }`}
                    >
                      <CVVisualization variant={project.visualization} />
                    </div>

                    {/* Content */}
                    <div
                      className={`md:col-span-7 ${
                        isReversed ? 'md:order-1' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="font-display text-[13px] font-medium tracking-wide text-muted">
                            {project.index}
                          </span>
                          <p className="mt-2 font-body text-[11px] font-medium uppercase tracking-wide-3 text-accent">
                            {project.category}
                          </p>
                        </div>
                      </div>

                      <h3 className="mt-6 font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.1] tracking-tightest text-primary text-balance">
                        {project.title}
                      </h3>

                      <p className="mt-5 max-w-xl font-body text-base font-light leading-[1.7] text-secondary">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="border border-border px-3 py-1.5 font-body text-[11px] font-medium tracking-wide text-secondary transition-colors hover:border-border-hover hover:text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expand button */}
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : project.id)
                        }
                        className="group mt-8 inline-flex items-center gap-2 font-body text-[13px] font-medium tracking-wide text-primary transition-colors hover:text-accent"
                      >
                        {isExpanded ? (
                          <>
                            <Minus size={16} strokeWidth={1.5} />
                            LESS INFO
                          </>
                        ) : (
                          <>
                            <Plus size={16} strokeWidth={1.5} />
                            MORE INFO
                          </>
                        )}
                      </button>

                      {/* Expanded panel */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mt-8 space-y-8 border-t border-border pt-8">
                              <div>
                                <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
                                  Overview
                                </span>
                                <p className="mt-2 font-body text-[15px] font-light leading-[1.7] text-secondary">
                                  {project.details.overview}
                                </p>
                              </div>

                              <div>
                                <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
                                  Role / Context
                                </span>
                                <p className="mt-2 font-body text-[15px] font-light leading-[1.7] text-secondary">
                                  {project.details.role}
                                </p>
                              </div>

                              <div>
                                <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
                                  What Was Built
                                </span>
                                <ul className="mt-3 space-y-2">
                                  {project.details.whatWasBuilt.map((item, j) => (
                                    <li
                                      key={j}
                                      className="flex gap-3 font-body text-[15px] font-light leading-[1.6] text-secondary"
                                    >
                                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
                                  Technical Challenges
                                </span>
                                <ul className="mt-3 space-y-2">
                                  {project.details.challenges.map((item, j) => (
                                    <li
                                      key={j}
                                      className="flex gap-3 font-body text-[15px] font-light leading-[1.6] text-secondary"
                                    >
                                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <span className="font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted">
                                  Key Functionality
                                </span>
                                <ul className="mt-3 space-y-2">
                                  {project.details.keyFunctionality.map((item, j) => (
                                    <li
                                      key={j}
                                      className="flex gap-3 font-body text-[15px] font-light leading-[1.6] text-secondary"
                                    >
                                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
