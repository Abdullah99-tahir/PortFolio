// ── PERSONAL INFO ──
export const personalInfo = {
  name: 'Hafiz Abdullah Tahir',
  firstName: 'Hafiz Abdullah',
  lastName: 'Tahir',
  email: '2024cs490@student.uet.edu.pk',
  website: 'https://resume-cv-delta.vercel.app/',
  linkedin: 'https://www.linkedin.com/in/hafiz-abdullah-tahir',
  github: 'https://github.com/hafiz-abdullah-tahir',
  location: 'Gujranwala, Punjab, Pakistan',
  university: 'UET Lahore',
  degree: 'BS Computer Science',
  tagline: 'CS student @ UET Lahore building things at the intersection of web, systems & intelligent software.',
  brand: '</> Code with Abdullah',
  roles: [
    'Frontend Developer',
    'UI/UX Designer',
    'CS Student',
    'Graphic Designer',
    'Freelancer',
  ],
  stats: [
    { num: '6+',  label: 'Projects Shipped' },
    { num: '8+',  label: 'Languages & Tools' },
    { num: '4th', label: 'Semester @ UET' },
    { num: '∞',   label: 'Curiosity Level' },
  ],
  badges: [
    { label: 'Web Design',  type: 'cyan'  },
    { label: 'UI/UX',       type: 'cyan'  },
    { label: 'Algorithms',  type: 'green' },
    { label: 'Systems',     type: 'green' },
    { label: 'Databases',   type: 'amber' },
    { label: 'Security',    type: 'amber' },
    { label: 'AI',          type: 'cyan'  },
    { label: 'Assembly',    type: 'green' },
  ],
};

// ── SKILLS ──
export const skillCategories = [
  {
    id: 'languages',
    icon: '⌨',
    title: 'Languages',
    skills: [
      { name: 'HTML / CSS',     pct: 88 },
      { name: 'Python',         pct: 82 },
      { name: 'JavaScript',     pct: 72 },
      { name: 'C#',             pct: 75 },
      { name: 'SQL / PL-SQL',   pct: 70 },
   
    ],
  },
  {
    id: 'cs-fundamentals',
    icon: '🔬',
    title: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms', pct: 80 },
      { name: 'Database Systems',             pct: 78 },
      { name: 'Information Security',         pct: 74 },
      { name: 'AI / Search Algorithms',       pct: 72 },
      { name: 'Theory of Automata',           pct: 68 },
      { name: 'Computer Organization',        pct: 70 },
    ],
  },
  {
    id: 'design',
    icon: '🎨',
    title: 'Design & Creative',
    skills: [
      { name: 'Graphic Design',   pct: 88 },
      { name: 'Adobe Suite',      pct: 85 },
      { name: 'Web Designing',    pct: 82 },
      { name: 'Figma / UI Design',pct: 80 },
      { name: 'Video Editing',    pct: 80 },
    ],
  },
 
];

// ── PROJECTS ──
export const projects = [
  {
    id: 1,
    num: '01',
    icon: '🩸',
    title: 'Hope Drip — Blood Donation Platform',
    desc: 'A full-stack web application connecting blood donors with recipients across Pakistan. Built for the Software Engineering course, featuring donor registration, blood group matching, request management, and real-time availability tracking. Designed with a mission-driven UI that prioritizes accessibility and urgency.',
    tags: ['Web App', 'Software Engineering', 'HTML/CSS/JS', 'Database'],
    link: '#',
    featured: true,
  },
  {
    id: 2,
    num: '02',
    icon: '✈️',
    title: 'Airline Management System',
    desc: 'A robust desktop application in C# with Oracle DBMS backend. Handles flight scheduling, seat reservations, passenger records, and billing — with a clean Windows Forms interface built on solid OOP principles.',
    tags: ['C#', 'Oracle DBMS', 'Windows Forms', 'OOP'],
    link: '#',
  },
  {
    id: 3,
    num: '03',
    icon: '🎮',
    title: 'State Quest — DFA Puzzle Game',
    desc: 'An interactive DFA-based puzzle game built in Python/Pygame for the Theory of Automata course. Players navigate states and transitions to construct valid automata, making formal language theory genuinely fun.',
    tags: ['Python', 'Pygame', 'Automata Theory', 'DFA'],
    link: '#',
  },
  {
    id: 4,
    num: '04',
    icon: '🔐',
    title: 'Cipher Suite — Cryptography Toolkit',
    desc: 'A menu-driven Python application implementing classical & modern ciphers: Caesar, Vigenère (with brute-force), and AES/CBC encryption using pycipher & PyCryptodome. Includes frequency analysis for cryptanalysis.',
    tags: ['Python', 'Cryptography', 'AES/CBC', 'Info Security'],
    link: '#',
  },
  {
    id: 5,
    num: '05',
    icon: '🗃️',
    title: 'Advanced DB Indexing Lab',
    desc: 'Oracle-based ADBMS lab implementing B+ Tree indexing (equality & range queries with EXPLAIN PLAN analysis) and static hashing with h(k) = k mod 7, collision analysis, and chaining.',
    tags: ['Oracle DB', 'B+ Tree', 'Hashing', 'ADBMS'],
    link: '#',
  },
  {
    id: 6,
    num: '06',
    icon: '🖥️',
    title: 'Student Management System',
    desc: 'A feature-rich C# Windows Forms application for OOP course (Lab 10). Manages student records, grades, and enrollment using SqlConnection / SqlCommand with solid OOP design patterns.',
    tags: ['C#', 'SQL Server', 'OOP', 'Windows Forms'],
    link: '#',
  },
  {
    id: 7,
    num: '07',
    icon: '⚙️',
    title: 'x86 Assembly Programs',
    desc: 'Low-level COAL lab implementations in EMU8086/MASM using DOS INT 21h interrupts. Programs include uppercase string conversion and asterisk pattern printing — direct hardware-level programming.',
    tags: ['x86 Assembly', 'EMU8086', 'MASM', 'DOS'],
    link: '#',
  },
  {
    id: 8,
    num: '08',
    icon: '🎨',
    title: 'Brand Identity Design',
    desc: 'Complete brand design including LinkedIn cover & social media assets for </> Code with Abdullah (dark navy/neon cyan dev theme), and full branding for Hakim Ibn Khalil Dawa Khana — a traditional herbal medicine clinic.',
    tags: ['Graphic Design', 'Adobe Suite', 'Branding', 'Social Media'],
    link: '#',
  },
];

// ── TIMELINE ──
export const timeline = [
  {
    id: 1,
    year: 'Sep 2024 — Present',
    title: 'BS Computer Science',
    sub: 'University of Engineering & Technology, Lahore · Pakistan',
    body: 'Pursuing a rigorous CS degree at one of Pakistan\'s top engineering universities. Courses span algorithms, computer organization & assembly, advanced databases, AI, information security, automata theory, digital logic & more.',
  },
  {
    id: 2,
    year: '2024 — Present',
    title: 'Web Designer & Freelancer',
    sub: 'Freelance · Fiverr / Upwork',
    body: 'Delivering web design and UI/UX services while studying. Focused on Figma + front-end development combination, building a client portfolio on international freelancing platforms.',
  },
  {
    id: 3,
    year: '2024',
    title: 'Voice of Hope Seminar — Volunteer',
    sub: 'JZT Pakistan · Community Event',
    body: 'Participated and contributed to the Voice of Hope seminar organized by JZT Pakistan — a community-driven initiative fostering hope and social impact.',
  },
  {
    id: 4,
    year: 'Sep 2022 — Apr 2024',
    title: 'FSc I.Cs',
    sub: 'KIPS College Boys Campus · Gujranwala',
    body: 'Completed FSc (I.Cs) with strong academic foundations in mathematics, physics, and computer science — the gateway to UET admission.',
  },
];

// ── COURSES ──
export const courses = [
  { code: 'CS-DAA',  name: 'Design & Analysis of Algorithms', sub: 'Sorting · Recurrences · Complexity' },
  { code: 'CS-COAL', name: 'Computer Organization & Assembly', sub: 'x86 · DOS Interrupts · Memory' },
  { code: 'CS-ADBMS',name: 'Advanced Database Management',     sub: 'Oracle · B+ Trees · Hashing' },
  { code: 'CS-IS',   name: 'Information Security',             sub: 'AES · Ciphers · CIA Triad' },
  { code: 'CS-AI',   name: 'Artificial Intelligence',          sub: 'BFS · DFS · A* · Hill Climbing' },
  { code: 'CS-ToA',  name: 'Theory of Automata',               sub: 'DFA · NFA · Formal Languages' },

  { code: 'HUM-QT',  name: 'Quranic Translation',              sub: 'QT-101 · Humanities' },
];
