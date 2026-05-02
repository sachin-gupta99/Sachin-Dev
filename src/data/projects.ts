export type Project = {
  name: string;
  summary: string;
  description: string;
  tags: string[];
  links: {
    github?: string | string[];
    live?: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'CascadeAI',
    summary:
      'An AI-powered pipeline that turns meeting transcripts into working code with human approval gates.',
    description:
      'Multi-service system: a Spring Boot orchestrator coordinating Python agents over Redis Streams, with a TypeScript web UI. Agents process transcripts through staged LLM steps; the orchestrator enforces approval gates before code is produced.',
    tags: ['Java', 'Spring Boot', 'Python', 'Redis Streams', 'LLMs', 'TypeScript'],
    links: {
      github: [
        'https://github.com/sachin-gupta99/CascadeAI-Orchestrator',
        'https://github.com/sachin-gupta99/CascadeAI-Agents',
        'https://github.com/sachin-gupta99/CascadeAI-UI',
      ],
    },
    featured: true,
  },
  {
    name: 'FitTrack AI',
    summary:
      'AI-assisted fitness tracker — placeholder copy until you confirm the one-liner.',
    description:
      'TODO: Add real description, stack, and links. Replace this copy with a 2–3 sentence summary of what FitTrack AI does and which problem it solves.',
    tags: ['TODO'],
    links: {
      github: 'https://github.com/sachin-gupta99',
    },
    featured: true,
  },
  {
    name: 'Downtown Books',
    summary:
      'A full-stack bookstore on Node.js + MongoDB with Stripe payments, email flows, and automated PDF invoicing.',
    description:
      'Full-stack Node.js/Express app with MongoDB/Mongoose. Implements robust authentication with secure password recovery via expiring tokens, Stripe payment gateway integration, SendGrid transactional emails, and automated PDF invoicing. Server-rendered with the Pug templating engine.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Pug', 'Stripe', 'SendGrid'],
    links: {
      github: 'https://github.com/sachin-gupta99/Downtown_Books',
    },
  },
  {
    name: 'Snap Wave',
    summary:
      'A MERN real-time chat app with WebSocket messaging, live presence, JWT auth, and engagement analytics.',
    description:
      'MERN-stack real-time chat application. Instant messaging and live online-status via WebSockets, secured with JWT authentication. User engagement metrics are visualized with ChartJS.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'JWT', 'ChartJS'],
    links: {
      github: 'https://github.com/sachin-gupta99/Snap-Wave',
    },
  },
];
