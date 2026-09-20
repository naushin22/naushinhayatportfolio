export interface ProjectDetails {
  overview: string;
  role: string;
  whatWasBuilt: string[];
  challenges: string[];
  keyFunctionality: string[];
}

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  details: ProjectDetails;
  visualization: 'cabin-detection' | 'realtime-pipeline' | 'flutter-app';
}

export interface Experience {
  index: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface SkillCluster {
  label: string;
  items: string[];
}

export interface PortfolioContent {
  profile: {
    name: string;
    role: string;
    location: string;
    status: string;
    heroTitle: string[];
    heroDescription: string;
    introductionTitle: string;
    introductionBody: string[];
    aboutTitle: string;
    aboutBody: string[];
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    message: string;
  };
  resumeUrl: string;
  projects: Project[];
  experiences: Experience[];
  skills: SkillCluster[];
  education: { index: string; degree: string; institution: string; period: string }[];
  certifications: { name: string; date: string }[];
  currentFocus: { description: string; tags: string[] };
  faqs: { question: string; answer: string }[];
}

export const defaultContent: PortfolioContent = {
  profile: {
    name: 'Naushin Hayat',
    role: 'Software Developer',
    location: 'Bhubaneswar, India',
    status: 'Open to opportunities',
    heroTitle: ['Building software', 'systems that turn', 'ideas into working products.'],
    heroDescription:
      'MCA postgraduate working across software development, AI/ML, computer vision, automation, and mobile applications.',
    introductionTitle: 'I build, debug, and learn.',
    introductionBody: [
      "I'm Naushin, an MCA postgraduate with a practical software development background.",
      ' My experience spans Python, AI/ML, computer vision, Flutter, Docker, networking, and industrial automation.',
      ' I enjoy working through ambiguous technical problems, understanding how systems fail, and turning those problems into working solutions.',
    ],
    aboutTitle: 'A developer who likes understanding how things work.',
    aboutBody: [
      'Currently pursuing a Master of Computer Applications at KIIT, I have built a foundation across programming, algorithms, databases, operating systems, software development, and applied machine learning.',
      'My experience has also taken me beyond application code into networking, Docker deployment, industrial automation, and hardware integration.',
    ],
  },
  contact: {
    email: 'naushinhayat22@gmail.com',
    phone: '9696752540',
    location: 'Bhubaneswar, India',
    message: "Open to software development opportunities, internships, and collaborative projects. Reach out and I'll get back to you.",
  },
  resumeUrl: '',
  projects: [
    {
      id: 'cabin-detection', index: '01', title: 'Industrial Cabin Detection System', category: 'AI / Computer Vision / Automation',
      description: 'A YOLO-based object detection system developed for identifying industrial cabin-related objects in real-world conditions.',
      technologies: ['YOLOv8', 'Python', 'OpenCV', 'Docker', 'Rockwell PLC', 'Modbus', 'Networking'],
      details: {
        overview: 'Designed and trained a YOLO-based object detection model for identifying industrial cabin-related objects in real-world factory conditions.',
        role: 'AI/ML development, dataset preparation, model training, and edge-case analysis.',
        whatWasBuilt: ['Designed and trained a YOLO-based object detection model', 'Worked from dataset labeling through evaluation', 'Tested against real-world edge cases including occlusion, blur, and poor lighting', 'Analyzed frame-by-frame misclassifications', 'Investigated failure patterns and iterated on model performance'],
        challenges: ['Handling edge cases like occlusion, blur, and poor lighting', 'Analyzing frame-by-frame misclassifications to find failure patterns', 'Iterating on model performance based on real-world testing'],
        keyFunctionality: ['Real-time object detection using YOLOv8', 'Dataset labeling and evaluation pipeline', 'Failure pattern analysis and model iteration'],
      }, visualization: 'cabin-detection',
    },
    {
      id: 'realtime-pipeline', index: '02', title: 'Real-time Detection & Industrial Integration', category: 'Software Development / Automation / Systems',
      description: 'A real-time detection pipeline developed during an AI/ML internship at Tata Motors, covering design, implementation, testing, deployment, and production support.',
      technologies: ['Python', 'YOLOv8', 'OpenCV', 'Docker', 'PyInstaller', 'Rockwell PLC', 'Modbus', 'Networking'],
      details: {
        overview: 'A real-time detection pipeline developed during an AI/ML internship at Tata Motors, covering the full software development lifecycle from design through production support.',
        role: 'AI/ML Intern — building, testing, deploying, and supporting the detection system.',
        whatWasBuilt: ['Built a real-time detection system in Python', 'Worked across the software development lifecycle', 'Connected the vision system to factory-floor hardware', 'Worked with Rockwell PLC/Modbus automation', 'Investigated networking and stream connectivity issues', 'Diagnosed hardware communication failures', 'Packaged the solution using Docker and PyInstaller'],
        challenges: ['Diagnosing system-level failures involving networking, streams, and hardware communication', 'Investigating networking and stream connectivity issues', 'Connecting vision software to factory-floor PLC hardware'],
        keyFunctionality: ['Real-time Python detection pipeline', 'PLC/Modbus hardware integration', 'Docker and PyInstaller packaging for deployment'],
      }, visualization: 'realtime-pipeline',
    },
    {
      id: 'flutter-app', index: '03', title: 'Flutter Application Development', category: 'Mobile Development',
      description: 'Built and shipped mobile application features using Dart and Flutter while working with senior developers in a remote cross-functional agile environment.',
      technologies: ['Dart', 'Flutter'],
      details: {
        overview: 'Built and shipped mobile application features using Dart and Flutter while working with senior developers in a remote cross-functional agile team.',
        role: 'Flutter Developer Intern at Ekana Technologies (Jul 2024 – Feb 2025).',
        whatWasBuilt: ['Built and shipped mobile application features using Dart and Flutter', 'Worked with senior developers in a remote cross-functional agile environment'],
        challenges: ['Collaborating effectively in a remote agile development environment', 'Shipping features that met production standards'],
        keyFunctionality: ['Mobile application feature development in Flutter', 'Cross-functional remote team collaboration'],
      }, visualization: 'flutter-app',
    },
  ],
  experiences: [
    { index: '01', role: 'AI/ML Intern', company: 'Tata Motors', location: 'Lucknow', period: 'May 2026 – June 2026', points: ['Worked across design, implementation, testing, deployment, and production support', 'Built a real-time detection system in Python', 'Investigated networking, application logic, and hardware integration issues', 'Connected the vision system with Rockwell PLC/Modbus automation', 'Packaged the system with Docker and PyInstaller', 'Diagnosed system-level failures involving networking, streams, and hardware communication'] },
    { index: '02', role: 'Flutter Developer Intern', company: 'Ekana Technologies', location: 'Remote', period: 'July 2024 – February 2025', points: ['Built and shipped mobile application features using Dart and Flutter while working with senior developers in a remote cross-functional agile team.'] },
  ],
  skills: [
    { label: 'Programming', items: ['Python', 'C++', 'Java', 'SQL', 'Dart'] },
    { label: 'Computer Science', items: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Complexity Analysis', 'SDLC'] },
    { label: 'Systems', items: ['Docker', 'Git', 'GitHub', 'Networking', 'RTSP', 'TCP/IP'] },
    { label: 'AI / ML', items: ['YOLOv8', 'OpenCV'] },
    { label: 'Automation', items: ['Rockwell PLC', 'Modbus', 'Automation Pipelines'] },
    { label: 'Mobile', items: ['Flutter'] },
  ],
  education: [{ index: '01', degree: 'Master of Computer Applications', institution: 'KIIT, Kalinga Institute of Industrial Technology', period: 'Aug 2025 – Jun 2027' }, { index: '02', degree: 'Bachelor of Computer Applications', institution: 'Lucknow University', period: 'Oct 2021 – Jun 2024' }],
  certifications: [{ name: 'Oracle Cloud Infrastructure Certified AI Foundations Associate', date: 'August 2026' }, { name: 'Data Analytics Job Simulation — Deloitte via Forage', date: 'May 2026' }, { name: 'UiPath Academy Agentic Automation Developer Associate Training', date: 'January 2026' }, { name: 'Artificial Intelligence Capsule Program — Samsung Innovation Campus', date: 'January 2023' }],
  currentFocus: { description: 'Continuing to deepen my understanding of software systems, machine learning, and applied automation — while building projects that connect code to the physical world.', tags: ['MCA at KIIT', 'AI/ML', 'Computer Vision', 'Automation', 'Mobile Development'] },
  faqs: [{ question: 'What technologies do you work with most?', answer: 'Python is my primary language for AI/ML and automation work. I also work with C++, Java, SQL, and Dart. For computer vision I use YOLOv8 and OpenCV, and I package systems with Docker. On the mobile side, I build with Flutter and Dart.' }, { question: 'Are you open to software development opportunities?', answer: 'Yes. I am currently pursuing my MCA at KIIT and am open to software development roles, internships, and collaborative projects. I am based in Bhubaneswar, India, and am open to remote work.' }, { question: 'What kind of projects interest you?', answer: 'I am drawn to projects that sit at the intersection of software and the physical world — computer vision, industrial automation, and systems that require debugging across networking, hardware, and application layers. I also enjoy building mobile applications with Flutter.' }, { question: 'Can you share more details about your internship work?', answer: 'During my AI/ML internship at Tata Motors, I built a real-time detection system in Python, connected it to Rockwell PLC/Modbus automation hardware, and packaged it with Docker and PyInstaller. During my Flutter Developer internship at Ekana Technologies, I shipped mobile features in Dart and Flutter within a remote agile team.' }],
};