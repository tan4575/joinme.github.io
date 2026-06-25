export const profile = {
  name: 'Tan Wei Siang',
  role: 'Software Consultant',
  emails: ['tan4575@hotmail.com', 'ws-tan@wiu.edu'],
  phone: '+65 9782 6269',
  location: 'Singapore',
  cvUrl:
    'https://drive.google.com/file/d/1Ctl9T7fOnJ826moHAZzxynfuiUjm1me5/view?usp=sharing',
  links: [
    { label: 'Facebook', href: 'https://www.facebook.com/tan4575' },
    { label: 'Instagram', href: 'https://www.instagram.com/weitannn/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wei-siang-tan/' },
    { label: 'GitHub', href: 'https://github.com/tan4575' },
  ],
};

export const navItems = [
  { label: 'Introduction', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Publications', href: '#publications' },
  { label: '3D Modeling', href: '#modeling' },
];

export const heroSlides = [
  {
    image: '/images/AuroraFlag_Stalnacke_6677.jpg',
    title: "Hi, I'm Wei Siang",
    eyebrow: 'Firmware, systems, research, and the occasional skyward obsession.',
    action: 'View CV',
    href: profile.cvUrl,
  },
  {
    image: '/images/M102_HubbleEbrahimian_3615.jpg',
    title: 'I love to create new things',
    eyebrow: 'From embedded platforms to data workflows and web experiments.',
    action: 'View Projects',
    href: 'https://github.com/tan4575',
  },
  {
    image: '/images/BigDipperMt2_Cullen_1365.jpg',
    title: 'I design and develop',
    eyebrow: 'A practical blend of physics, firmware, machine learning, and product work.',
    action: 'View Blog',
    href: 'https://tan4575.github.io/joinme.github.io/',
  },
];

export const about =
  "I am a former physics student from Western Illinois University (WIU), where I completed my Master of Science in physics in 2017. To equip myself with frontier technology, I enrolled in a part-time Master of Science program specialized in Deep Learning for Industry (Industry 4.0) at the National University of Singapore (NUS). I am currently working as a Software Consultant, helping clients build data pipelines, computer vision integrations, full-stack applications, and retrieval-augmented generation (RAG) systems. My computer vision work includes integrating data into DeepStream, a hardware-accelerated SDK for AI-powered video, image, and sensor analytics applications. The blend of knowledge from various fields has prepared me for software, data, AI, and system-level architecture design.";

export const experiences = [
  {
    title: 'Firmware Engineer',
    summary:
      'I have worked as an embedded software developer for Toshiba TEC Singapore, Thermo Fisher Scientific, Scooterson, and Dyson. I have contributed to motion controllers, thermal PID controllers, electrical and system integration design, and embedded software architecture across hardware interfaces, microcontrollers, data structures, and algorithms. My experience with embedded Linux, shell scripting, and foundational firmware helps me build robust, tailored solutions for practical engineering teams.',
  },
  {
    title: 'Research Work',
    summary:
      'I have been involved in stellar astrophysics research under Professor Esteban D. Araya, receiving several grants and scholarships. I continue to collaborate with WIU and have contributed to three astronomy journal papers. My research work includes LaTeX manuscripts, IDL data analysis and reduction, and models of molecular transition spectral lines using RADEX and Python to study distant astronomical objects.',
  },
  {
    title: 'Skills and Knowledge',
    summary:
      'I have built a foundation in deep learning and machine learning through my NUS master program. I also use self-taught web platform skills including Node.js, JavaScript, and SQL, and applied them in a web-based smart home capstone project. Additional course work includes machine learning, deep learning, SQL, data foundations, Python for data science, AI development, data visualization, and mathematics for machine learning.',
  },
];

export const timeline = [
  {
    title: 'Software Consultant',
    date: 'Jan 2026 - Present',
    detail:
      'Help clients build data pipelines, computer vision integrations, full-stack applications, and retrieval-augmented generation (RAG) systems. Work includes integrating data into DeepStream, a hardware-accelerated SDK used to build AI-powered video, image, and sensor analytics applications.',
  },
  {
    title: 'Lead Optical Transceiver Firmware Engineer at Jabil Singapore',
    date: 'Aug 2025 - Jan 2026',
    detail:
      'Design and develop high-speed optical transceivers, including 100G, 200G, 400G, 800G, and 1.8T products. Develop software for firmware regression testing and implement firmware interfaces between DSPs and PMICs to optimize system performance and reliability.',
  },
  {
    title: 'Senior Research Software Engineer at Dyson Singapore',
    date: 'Oct 2023 - Aug 2025',
    detail:
      'Worked on research projects while mentoring graduates and new team members, reviewing technical literature and patents, and meeting suppliers to satisfy product requirements. Integrated embedded Linux software for demonstration rigs, implemented machine learning algorithms using SoC NPU APIs, mastered embedded SDKs and toolchains, and led the migration from legacy Make builds to modern CMake setups.',
  },
  {
    title: 'Senior Firmware Engineer at Scooterson',
    date: 'Jun 2023 - Oct 2023',
    detail:
      'Developed IoT firmware for electric vehicles using C++, applied Google Test for unit and functional testing, built backend services for consumer and factory applications with Node.js and Postgres, and implemented push notification services using Firebase Cloud Messaging APIs.',
  },
  {
    title: 'Firmware Engineer II / Senior Firmware Engineer at Thermo Fisher',
    date: 'Nov 2020 - Jun 2023',
    detail:
      'Designed and implemented embedded firmware using C, C++, and Python for life science instruments. Performed design and code reviews to meet firmware quality expectations and developed thermal control systems to satisfy instrument thermal performance specifications.',
  },
  {
    title: 'Firmware Engineer I at Toshiba TEC',
    date: 'Apr 2019 - Nov 2020',
    detail:
      'Designed, developed, tested, and supported printer firmware. Created software test plans and specifications, debugged products, and developed programmable content for electronic hardware devices.',
  },
  {
    title: 'Software Engineer at Exclusive Master',
    date: 'May 2018 - Apr 2019',
    detail:
      'Designed and developed automation software using PLC and C#. Developed programming for pick-and-place machinery motor controllers, including position teaching and motor control.',
  },
];

export const publications = [
  {
    title:
      'Excited Hydroxyl Outflow in the High-mass Star-forming Region G34.26+0.15',
    href: 'https://iopscience.iop.org/article/10.3847/1538-4357/acde7b',
    image: '/images/g34+0.15.jpg',
    abstract:
      "G34.26 + 0.15 is a high-mass star-forming region containing young stellar objects in different stages of evolution. High-sensitivity VLA and Arecibo observations of OH lines were used to study broad absorption features and discuss a scenario where OH absorption traces remnants of a pole-on molecular outflow being ionized inside-out by an ultracompact HII region.",
  },
  {
    title: 'Thermal formaldehyde emission in NGC 7538 IRS 1',
    href: 'https://academic.oup.com/mnras/article/504/2/1733/6211007?login=false',
    image: '/images/ngc7538.png',
    abstract:
      'Further GBT observations of 2 cm and 1 cm formaldehyde lines toward NGC 7538 IRS 1 were used to investigate rare thermal emission at centimeter wavelengths. A non-LTE radiative transfer analysis found the emission consistent with quasi-thermal radiation from dense gas.',
  },
  {
    title: 'High-sensitivity observations of molecular lines with the Arecibo Telescope',
    href: 'https://academic.oup.com/mnras/article/497/2/1348/5863227?login=false',
    image: '/images/Arecibo-Fa2018.jpg',
    abstract:
      'A high-sensitivity molecular line survey with the Arecibo Telescope covered 6.0-7.4 GHz toward 12 intermediate and high-mass star-forming regions. The observations detected spectral features absent from lower-sensitivity data, including excited OH and 6.7 GHz methanol absorption.',
  },
];

export const credits = [
  { label: 'NRAO', href: 'https://public.nrao.edu/' },
  { label: 'NASA', href: 'https://www.nasa.gov/' },
  { label: 'ESA', href: 'https://www.esa.int/' },
  { label: 'Hubble', href: 'https://science.nasa.gov/mission/hubble/' },
  { label: 'Steve Cullen', href: 'https://stevecullenmedia.com/about/' },
  { label: 'Mia Stalnacke', href: 'https://www.instagram.com/angrytheinch/' },
];
