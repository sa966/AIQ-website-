/**
 * ============================================================
 *   AIQ — SITE CONTENT (AIQ V2 / Figma "AIQ LTD")
 *   Every word on the site lives in this file.
 *   Edit a value here, save, and the page updates.
 * ============================================================
 */

export const BRAND = {
  name: 'AIQ',
  tagline: "Africa's first defence and Intelligence focused AI company.",
  email: 'info@aiq.ng',
  careersEmail: 'contact@aiq.ng',
  salesEmail: 'info@aiq.ng',
  phone: '+234 (0) 000 000 0000',
  location: 'Abuja, Nigeria',
  hydraDemo: 'https://hydrainsights.online/',
};

/* ══════════════════════════════════════════════════════════
   IMAGES — pulled from the live aiq.ng build into public/img
   ══════════════════════════════════════════════════════════ */

const IMG = '/img/assets';
const MEDIA = '/img/media';

export const IMAGES = {
  logo: `${IMG}/logo-aiq-artboard.png`,
  logoLight: `${IMG}/logo-aiq-artboard.png`,
  logoFull: `${IMG}/logo-aiq-artboard.png`,
  copyright: `${IMG}/copyright-aiq.png`,

  /* Hero assets */
  heroBg: `${IMG}/hero-bg-v2.jpg`,
  heroCardThumb: `${IMG}/hero-card-thumb.jpg`,
  heroAnim: `${IMG}/hero-anim.gif`,

  /* Product shots */
  product: {
    hydra: `${IMG}/product-hydra.webp`,
    geoAi: `${IMG}/product/geo-ai.webp`,
    dataCamp: `${IMG}/product-data-camp.jpg`,
    civet: `${IMG}/product/civet.png`,
    oneSearch: `${IMG}/product/one-search.png`,
    helix: `${IMG}/product/helix-splash.png`,
    helixWelcome: `${IMG}/product/helix-welcome.png`,
    helixRinging: `${IMG}/product/helix-ringing.png`,
    helixCall: `${IMG}/product/helix-call.png`,
  },

  /* Sector cards */
  sector: {
    defence: `${IMG}/sector-defence.jpg`,
    researchers: `${IMG}/sector-researchers.jpg`,
    humanitarian: `${IMG}/sector-humanitarian.jpg`,
    media: `${IMG}/sector-media.jpg`,
    others: `${IMG}/sector-others.jpg`,
  },

  /* Sector icons */
  sectorIcon: {
    defence: `${IMG}/Security.svg`,
    researchers: `${IMG}/Research.svg`,
    humanitarian: `${IMG}/icon-give.svg`,
    media: `${IMG}/megaphone.svg`,
    others: `${IMG}/categories.svg`,
  },

  /* Company page */
  earth: `${IMG}/earth-map.png`,
  mission: `${IMG}/mission.png`,
  vision: `${IMG}/vision.png`,
  overview: `${IMG}/Overview.svg`,
  companyBg: `${IMG}/company-bg.svg`,
  video: `${IMG}/collabo-img.svg`,

  /* Careers page */
  offices: `${MEDIA}/offices-NQYUBY4Y.jpg`,
  collaboration: `${MEDIA}/careers-collaboration.jpg`,
  remote: `${IMG}/workspace.svg`,
  grow: `${IMG}/Home.svg`,
  continents: `${MEDIA}/continents-64FDT2JJ.svg`,
};

export const NAV = [
  { label: 'Company', route: '/company' },
  { label: 'Solutions', route: '/products' },
  { label: 'Newsroom', route: '/newsroom' },
  { label: 'Careers', route: '/careers' },
];

export const MENU = [...NAV, { label: 'Contact us', route: '/contact' }];

/* ── PRODUCTS ─────────────────────────────────────────────── */

export interface Product {
  slug: string;
  name: string;
  category: string;
  summary: string;
  body: string;
  img: string;
  status: string;
  statusTone: 'open' | 'private' | 'beta';
  cta: string;
  ctaHref?: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: 'hydra',
    name: 'Hydra',
    category: 'Artificial Intelligence based Open Source Intelligence (OSINT) platform',
    summary: 'Real-time OSINT collection and analysis on an interactive map.',
    body: 'Hydra is an OSINT platform that scans the internet in real-time, extracts critical data, and presents valuable insights on an interactive map. With its analysis capabilities, Hydra helps you stay informed about global events, identify emerging threats, and gain a competitive edge.',
    img: IMAGES.product.hydra,
    status: 'Try a demo',
    statusTone: 'open',
    cta: 'Learn More',
    ctaHref: BRAND.hydraDemo,
  },
  {
    slug: 'geo-ai',
    name: 'GeoAI Tools',
    category: 'Geospatial Intelligence Artificial Intelligence Software',
    summary: 'Extract insight from satellite imagery and geospatial data.',
    body: 'GeoAI Tools provides an intuitive interface for extracting valuable insights from geospatial data. By analyzing satellite imagery, GeoAI Tools can automatically identify physical geographic features and their attributes with spatial and temporal accuracy, helping you make informed decisions based on geospatial data.',
    img: IMAGES.product.geoAi,
    status: 'Private Testing',
    statusTone: 'private',
    cta: 'Learn More',
  },
  {
    slug: 'data-camp',
    name: 'Data CAMP',
    category: 'Data Collection, Analysis and Management Platform',
    summary: 'Intelligence management software.',
    body: 'Data CAMP is an all-in-one solution for streamlining the intelligence cycle. From collecting and processing data to generating reports and disseminating intelligence, Data CAMP automates the entire process, saving the intelligence stakeholder time and effort.',
    img: IMAGES.product.dataCamp,
    status: 'Private Testing',
    statusTone: 'private',
    cta: 'Learn More',
  },
  {
    slug: 'civet',
    name: 'CIVET AI',
    category: 'Advanced video surveillance analytics software.',
    summary: 'Image and video analytics software.',
    body: 'Civet is an advanced AI recognition technology that empowers you to scan, identify, and track objects in both live and recorded videos. With its real-time detection, recognition, and geospatial analysis capabilities, Civet is a powerful tool for enhancing situational awareness.',
    img: IMAGES.product.civet,
    status: 'Private Testing',
    statusTone: 'private',
    cta: 'Learn More',
  },
  {
    slug: 'one-search',
    name: 'OneSearch',
    category: 'Securely manage sensitive documents with our enterprise workflow solution.',
    summary: 'Enterprise workflow solution.',
    body: 'OneSearch is a secure and efficient document management system designed for handling sensitive and classified information. With OneSearch, you can easily upload, access, and manage documents from anywhere, while ensuring the highest levels of data protection.',
    img: IMAGES.product.oneSearch,
    status: 'Private Testing',
    statusTone: 'private',
    cta: 'Learn More',
  },
  {
    slug: 'helix',
    name: 'Helix OS',
    category: 'Communicate securely with our end-to-end encrypted messaging platform.',
    summary: 'End-to-end encrypted messaging.',
    body: 'Helix is an indigenous instant messaging application that offers secure and encrypted communication channels, including text, voice, and video. It supports document sharing, location sharing, and unlimited group creation, while ensuring privacy.',
    img: IMAGES.product.helix,
    status: 'Beta Testing',
    statusTone: 'beta',
    cta: 'Learn More',
    ctaHref: 'https://helix.aiq.ng/',
  },
];

/* ── NEWSROOM ─────────────────────────────────────────────── */

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  img?: string;
}

export const NEWS: Post[] = [
  {
    title: 'Expanding Our Satellite Intelligence Capabilities',
    excerpt:
      "We're developing new ways to bring satellite imagery and other data sources together, helping teams build a clearer picture of changing conditions.",
    date: 'Sept 5, 2026',
    category: 'Systems Thinking',
    img: IMAGES.heroCardThumb,
  },
  {
    title: 'New Partnership to Advance Secure Data Sharing',
    excerpt:
      "We're working with technology partners to explore secure, interoperable ways for organizations to share information across complex environments.",
    date: 'Sept 5, 2026',
    category: 'Partnerships',
    img: IMAGES.heroCardThumb,
  },
  {
    title: 'Supporting Faster Humanitarian Response',
    excerpt:
      'Our platform is being adapted to help response teams combine field reports, logistics data, and geospatial information when time matters.',
    date: 'Sept 5, 2026',
    category: 'Impact',
    img: IMAGES.heroCardThumb,
  },
  {
    title: 'Building the Next Generation of Mission Software',
    excerpt:
      'Our engineering team is investing in flexible software designed to connect existing systems and support evolving operational needs.',
    date: 'Sept 5, 2026',
    category: 'Engineering',
    img: IMAGES.heroCardThumb,
  },
  {
    title: 'Research Initiative Focuses on Responsible AI',
    excerpt:
      "We've launched a research initiative exploring how AI can help analysts work with complex data while keeping human judgment central.",
    date: 'Sept 5, 2026',
    category: 'Research',
    img: IMAGES.heroCardThumb,
  },
  {
    title: 'Turning Geospatial Data into Better Decisions',
    excerpt:
      'Explore how satellite imagery and geospatial analysis can help organizations understand places, patterns, and change over time.',
    date: 'Sept 5, 2026',
    category: 'Systems Thinking',
    img: IMAGES.heroCardThumb,
  },
  {
    title: 'Why Secure Messaging Matters for Field Teams',
    excerpt:
      'A look at how end-to-end encrypted communication supports operational security when networks are unreliable.',
    date: 'Aug 21, 2026',
    category: 'Product',
    img: IMAGES.heroCardThumb,
  },
  {
    title: 'Designing Software for the Front Lines',
    excerpt:
      'Lessons from building tools that have to work under pressure, with limited connectivity and high stakes.',
    date: 'Aug 14, 2026',
    category: 'Design',
    img: IMAGES.heroCardThumb,
  },
  {
    title: 'AIQ at the Africa Intelligence Summit',
    excerpt:
      'Our team joined partners and policymakers to discuss the future of AI-enabled national security.',
    date: 'Jul 30, 2026',
    category: 'Company',
    img: IMAGES.heroCardThumb,
  },
  {
    title: 'A Practical Guide to Multi-Source Data Fusion',
    excerpt:
      'How combining disparate sources into a single operational picture changes the speed of decision-making.',
    date: 'Jul 12, 2026',
    category: 'Research',
    img: IMAGES.heroCardThumb,
  },
];

/* ── HOME ─────────────────────────────────────────────────── */

export const HOME = {
  hero: {
    headline: ['Transforming Data into', 'Decisions at the Speed of', 'Thought.'],
    body: 'We are transforming how organizations harness data intelligence and automation. We design and deploy innovative solutions that help organizations in critical sectors transform complex data into actionable insights, instantly.',
    primary: { label: 'Get in touch', route: '/contact' },
    cardBody:
      "AIQ is transforming defence and intelligence operations with innovative, real-time solutions built for Africa's unique security challenges.",
  },

  whatWeDo: {
    label: 'Innovative AI Solutions',
    body: 'AIQ is transforming the way defense and intelligence operations are conducted, offering innovative, real-time solutions tailored to the unique security challenges of the African continent.',
  },

  video: {
    label: 'What drives us',
  },

  statement:
    'We are founded on the belief that intelligence should empower progress, not slow it down. AIQ integrates artificial intelligence, geospatial analytics, and digital platforms to help clients operate smarter, move faster, and make decisions with greater confidence.',

  portfolio: {
    title: 'Selected organizations within',
    titleHighlight: 'our portfolio.',
    orgs: [{ name: 'Selected Organizations', logo: `${IMG}/selected-organizations.png`, height: '84.375px' }],
  },

  software: {
    label: 'Our Software',
  },

  technology: {
    title: 'Our technology domain',
    body: 'We operate at the intersection of intelligence, automation, and enterprise transformation.',
    items: [
      {
        title: 'Cloud and Enterprise Software Development',
        body: 'We deliver scalable, secure and flexible digital ecosystems through cloud-native architecture by integrating modern workflows, document management, and collaborative tools.',
      },
      {
        title: 'Database Infrastructure and Analytics',
        body: 'From data lakes to advanced dashboards, AIQ designs data pipelines and analytics platforms that unify information silos, ensuring real-time visibility across large enterprises.',
      },
      {
        title: 'Geospatial / Location Intelligence',
        body: 'Through advanced geospatial analytics, we help cities, utilities, and telecom providers visualize spatial patterns, optimize resource allocation, and enhance situational awareness.',
      },
      {
        title: 'Artificial Intelligence',
        body: 'We build intelligent systems that automate repetitive processes, generate insights from unstructured data, and enable organizations to make faster, data-driven decisions.',
      },
      {
        title: 'Cybersecurity',
        body: 'AIQ’s security-first architecture ensures data protection, compliance, and trust across every deployment.',
      },
      {
        title: 'Systems Integration',
        body: 'We develop technology that links platforms, sensors and data systems to create seamless digital ecosystems tailored to client needs.',
      },
    ],
  },

  possibilities: {
    title: 'There are endless possibilities yet to be created',
    body: 'We build connected technology for complex challenges across industries, and partner with people ready to turn new possibilities into real-world impact.',
    primary: { label: 'Get in touch', route: '/contact' },
    secondary: { label: 'Join our team', route: '/careers' },
  },

  newsroom: {
    label: 'Newsroom',
    link: { label: 'See all', route: '/newsroom' },
  },

  cta: {
    title: 'Gain a Competitive Edge',
    body: 'Let us utilize our creativity and expertise to create products that deliver wonderful results.',
    primary: { label: 'Request a Demo', route: '/contact' },
    secondary: { label: 'Start Building', route: '/contact' },
  },

  faq: {
    title: 'Frequently Asked Questions',
  },
};

/* ── ABOUT ────────────────────────────────────────────────── */

export const COMPANY = {
  hero: {
    label: 'About Us',
    title: "We are Africa's first defence and Intelligence focused AI company",
    body: 'We are at the forefront of harnessing artificial intelligence to redefine the landscape of national defense intelligence. Our cutting-edge solutions empower decision-makers with actionable insights derived from complex data sets. With a deep understanding of the unique challenges faced by defense agencies, we deliver tailored digital products that enhance operational efficiency, bolster security, and accelerate mission success. Our commitment to innovation and data-driven solutions sets us apart as a trusted partner in safeguarding national interests.',
    img: IMAGES.earth,
  },

  mission: {
    title: 'Our Mission',
    body: 'To transform data into decisions at the speed of thought, through innovative AI-driven technologies that make insight and automation accessible to organizations across Africa and beyond.',
  },

  strategic: {
    title: 'Our Strategic Direction',
    body: 'To be the leading provider of AI-driven intelligence solutions in Africa, transforming data into decisive action for a safer, more secure world.',
  },

  direction: {
    title: "Where we're going",
    body: 'To harness the power of artificial intelligence to deliver bespoke and turnkey intelligence solutions that empower defense and intelligence communities to derive actionable insights faster, ensuring national security and operational superiority.',
  },

  principlesIntro:
    'Working at AIQ means confronting challenges with Audaciousness, Big-headedness and Creativity despite the situation.',

  principles: [
    {
      letter: 'A',
      name: 'CHUTZ PAZ',
      gloss: "('gall, brazen nerve, incredible 'guts' ')",
      body: 'For us at AIQ, assertiveness is the norm; reticence or "being reserved" risks being left behind by the competition.',
    },
    {
      letter: 'B',
      name: 'ROSH GADOL',
      gloss: '(*improvisation over discipline, challenging the chief over respect for hierarchy. *)',
      body: '"Rosh gadol" thinking means following orders but doing so in the best possible way, using judgment, and investing whatever effort is necessary.',
    },
    {
      letter: 'C',
      name: 'BIT ZUA',
      gloss: '(Having an "Immigrant\'s Mentality")',
      body: 'At AIQ you have drive." You don\'t see what you\'ve got to lose; you see what you could win. That\'s the attitude we have here - across the entire population.',
    },
    {
      letter: 'D',
      name: 'DAV KA',
      gloss: '("despite" with "rub their nose in it" twist)',
      body: 'For us, we pride in the availability of challenges "the more they exist, the more we will succeed" We believe that we benefit by seeing "obstacles as the way" and finding the hidden lessons in all of our challenges',
    },
  ],
};

/* ── CAREERS ──────────────────────────────────────────────── */

export const CAREERS = {
  hero: {
    title: 'Shape the Future with AIQ',
    body: "Work with a passionate team of innovators as we push the boundaries of what's possible with AI.",
    cta: { label: 'View Open Roles', route: '/roles' },
  },

  tabs: [
    {
      label: 'How we Work',
      index: '01',
      cards: [
        {
          title: '01 / Innovation and growth',
          body: 'We foster an environment where creativity thrives and bold ideas become reality. Every team member is encouraged to push boundaries and explore new possibilities that drive our industry forward.',
        },
        {
          title: '02 / Collaboration and inclusion',
          body: 'Our diverse team brings together unique perspectives and experiences. We believe that the best solutions emerge when different minds work together in an inclusive and supportive environment.',
        },
        {
          title: '03 / Employee well-being',
          body: 'We prioritize work-life balance and provide comprehensive benefits that support both professional development and personal growth. Your success is our success, and we invest in your long-term happiness.',
        },
      ],
    },
    {
      label: 'What we value',
      index: '02',
      cards: [
        {
          title: '01 / Audaciousness',
          body: 'We take on problems others avoid, and we back our judgement with action rather than hesitation.',
        },
        {
          title: '02 / Clarity',
          body: 'We make complex systems understandable, for our users and for each other.',
        },
        {
          title: '03 / Ownership',
          body: 'Everyone here owns outcomes, not just tasks. You will see your work in the field.',
        },
      ],
    },
    {
      label: 'From the team',
      index: '03',
      cards: [
        {
          title: '01 / Engineers',
          body: 'We build for constrained environments where reliability matters more than novelty.',
        },
        {
          title: '02 / Designers',
          body: 'We design tools that stay out of the way when the stakes are high.',
        },
        {
          title: '03 / Researchers',
          body: 'We turn messy, multi-source data into decisions people can trust.',
        },
      ],
    },
  ],

  process: {
    label: 'What to expect',
    title: 'Interview process',
    body: 'We generally do not use recruiters for assessments. Applications are evaluated by our technical team members.',
    steps: [
      {
        index: '01',
        title: 'Submit your application',
        body: 'Our team will review your CV and statement of exceptional work.',
      },
      {
        index: '02',
        title: 'Screening interview',
        body: 'A short interview to learn more about you and assess if the role fits. Prepare for short technical questions and a review of your background.',
      },
      {
        index: '03',
        title: 'Technical interviews',
        body: 'Sessions where we dive deep into your technical expertise. We want to understand how you approach complex problems and think critically.',
      },
      {
        index: '04',
        title: 'Offer extended',
        body: "If you've demonstrated the exceptional skills and mindset we're looking for, we'll extend an offer to join AIQ.",
      },
    ],
  },

  offices: {
    label: 'Offices',
    title: 'Collaboration across borders',
    body: "We're hiring at our Abuja office! We build our teams in-person because we believe the best collaborative ideas happen live. If you love fast-paced projects and working shoulder-to-shoulder with great talent, we want to hear from you.",
    cta: { label: 'View Open Roles', route: '/roles' },
  },

  cta: {
    title: "Don't see your role? Tell us what you would build.",
    email: BRAND.careersEmail,
  },
};

/* ── ROLES ────────────────────────────────────────────────── */

export interface Role {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export const ROLES: Role[] = [
  { slug: 'drone-pilot', title: 'Drone Pilot', department: 'Operations', location: 'Onsite', type: 'Full-time' },
  {
    slug: 'customer-success-manager',
    title: 'Customer Success Manager',
    department: 'Operations',
    location: 'Onsite',
    type: 'Full-time',
  },
  {
    slug: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Onsite',
    type: 'Full-time',
  },
  {
    slug: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    location: 'Onsite',
    type: 'Full-time',
  },
  {
    slug: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Onsite',
    type: 'Full-time',
  },
  { slug: 'hr', title: 'HR', department: 'People', location: 'Onsite', type: 'Full-time' },
  {
    slug: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'Onsite',
    type: 'Full-time',
  },
  { slug: 'qa-tester', title: 'QA Tester', department: 'Engineering', location: 'Onsite', type: 'Full-time' },
  {
    slug: 'software-engineer',
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'Onsite',
    type: 'Full-time',
  },
  {
    slug: 'research-engineer',
    title: 'Research Engineer',
    department: 'Research',
    location: 'Onsite',
    type: 'Full-time',
  },
];

/* ── FAQ ──────────────────────────────────────────────────── */

export const FAQS = [
  {
    question: 'What is AIQ?',
    answer:
      'AIQ is Africa’s first defense and intelligence-focused AI company, providing bespoke and turnkey solutions to empower defense and intelligence communities with actionable insights. We are Africa’s pioneering startup specializing in defense and intelligence AI solutions, with a focus on multi-source data fusion and geospatial intelligence.',
  },
  {
    question: 'Where do you operate and how can I contact your team?',
    answer:
      'We are based in Abuja, Nigeria. You can reach us at info@aiq.ng or through the contact page, and our team will respond within 24 hours.',
  },
  {
    question: 'What industries does AIQ serve?',
    answer:
      'We serve a wide range of industries including defense, intelligence, private and public organizations, journalism, research, law enforcement, and many other industries.',
  },
  {
    question: 'How does AIQ ensure data security?',
    answer:
      'Our products are built with end-to-end encryption and the highest security standards to protect sensitive information.',
  },
  {
    question: 'Can AIQ’s solutions be customized?',
    answer:
      'Yes, some of our solutions have been white-labeled across intelligence organizations. More so, our solutions are designed to be flexible and can be tailored to meet the specific needs of our clients.',
  },
  {
    question: 'How can I get in touch with AIQ?',
    answer:
      'To learn more about AIQ’s solutions and discuss your specific needs, please contact our sales team. We can provide you with a personalized demo and answer any questions you may have. You can contact us through our website by clicking the “Get in touch” button or send an email to info@aiq.ng.',
  },
];

/* ── CONTACT ──────────────────────────────────────────────── */

export const CONTACT = {
  hero: {
    title: 'Talk to us',
    body: 'Need more information? Feel free to contact us for inquiries about our products, services, or company.',
  },

  intents: [
    {
      title: 'Product Training & Support',
      body: 'Practical guidance and responsive support to help your team get the most from our products.',
    },
    {
      title: 'Request a Demo',
      body: "See how AIQ's software can support your organization's needs. Request a demo to explore the right solution for your team.",
    },
    {
      title: 'Want a custom Solution',
      body: "Tell us what you need. We'll work with you to explore a solution tailored to your requirements.",
    },
    {
      title: 'Partnership or investment',
      body: 'Explore partnership and investment opportunities with AIQ.',
    },
  ],

  form: {
    title: 'Tell us more',
    body: 'Interested in solving your problems with AIQ software?',
    noteLabel: 'Tell us more',
    note: 'Within 24 hours',
    submit: 'Submit',
    fields: [
      { name: 'name', label: 'Full name *', placeholder: 'Full name', type: 'text' },
      { name: 'email', label: 'Email address *', placeholder: 'Email address *', type: 'email' },
      {
        name: 'problem',
        label: 'What is currently breaking or slowing the business? *',
        placeholder: 'What is currently breaking or slowing the business?',
        type: 'textarea',
      },
      {
        name: 'scale',
        label: 'How many customers, transactions or team members does it affect? *',
        placeholder: 'How many customers, transactions or team members does it affect?',
        type: 'textarea',
      },
      {
        name: 'tools',
        label: 'What tools or processes are involved? *',
        placeholder: 'What tools or processes are involved?',
        type: 'textarea',
      },
      {
        name: 'outcome',
        label: 'What outcome would make this engagement successful? *',
        placeholder: 'What outcome would make this engagement successful?',
        type: 'textarea',
      },
      {
        name: 'timing',
        label: 'When do you need movement? *',
        placeholder: 'When do you need movement?',
        type: 'textarea',
      },
    ],
  },
};

/* ── FOOTER ───────────────────────────────────────────────── */

export const FOOTER = {
  logo: IMAGES.logo,
  copyright: IMAGES.copyright,
  blurb: BRAND.tagline,
  productsTitle: 'Products',
  productsLinks: [
    { label: 'Geo AI', route: '/products' },
    { label: 'Helix OS', route: '/products' },
    { label: 'Civet', route: '/products' },
    { label: 'AuthQ', route: '/contact' },
    { label: 'OneSearch', route: '/products' },
    { label: 'Datacamp', route: '/products' },
  ],
  contactTitle: 'Contact us',
  contactLinks: [
    { label: 'Request a Demo', route: '/contact' },
    { label: 'Send a Message', route: '/contact' },
  ],
  companyTitle: 'Company',
  companyLinks: [
    { label: 'About Us', route: '/company' },
    { label: 'News Room', route: '/newsroom' },
    { label: 'Legal Note', route: '/company' },
  ],
  careersTitle: 'Careers',
  careersLinks: [{ label: 'Join Us', route: '/careers' }],
  email: BRAND.email,
  location: BRAND.location,
  legal: `© ${new Date().getFullYear()} AIQ Limited`,
};
