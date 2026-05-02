export const profile = {
  name: 'Sachin Gupta',
  role: 'Full-Stack Developer',
  tagline: [
    'SDE at JPMorganChase, shipping internal financial apps end-to-end.',
    'React and Spring Boot on top. Terraform and AWS underneath.',
  ],
  location: 'Hyderabad, India',
  summary:
    "I'm an SDE 1 at JPMorganChase, where I own end-to-end UI development for critical internal financial applications and ship full-stack features across React, Spring Boot, and AWS. MCA from NIT Warangal. I care about clean code, test coverage, and infrastructure-as-code — and I'm currently going deeper on Spring AI and system design.",
  email: 'sachin.gupta.2j99@gmail.com',
  socials: {
    github: 'https://github.com/sachin-gupta99',
    linkedin: 'https://www.linkedin.com/in/sachin-gupta-4aa151222/',
    resume:
      'https://drive.google.com/file/d/120fdbxxkWPNEukrtSgbFTTc_BKbUzGt7/view?usp=sharing',
  },
  skills: {
    languages: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C++', 'SQL', 'PL/SQL', 'R'],
    frameworks: [
      'Spring Boot',
      'React',
      'TanStack Query',
      'React Hook Form',
      'Zustand',
      'AG Grid',
      'Node.js',
      'Express',
    ],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'RDS'],
    tools: [
      'AWS (ECS, S3, CloudWatch, Parameter Store)',
      'Terraform',
      'Redis Streams',
      'Kafka',
      'RabbitMQ',
      'WebSockets',
      'Git',
    ],
  },
  learning: ['Spring AI', 'Deeper AWS patterns', 'System Design'],
} as const;
