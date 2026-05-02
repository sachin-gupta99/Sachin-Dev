export type ExperienceEntry = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
  stack?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: 'JPMorganChase',
    role: 'SDE 1',
    location: 'Hyderabad, India',
    start: 'Aug 2024',
    end: 'Present',
    highlights: [
      'Own end-to-end UI development for critical internal financial applications — architecting the front-end from scratch and translating UI/UX designs into production-ready, maintainable code.',
      'Shipped 2000+ commits across 30+ repositories on an average every year, building full-stack features with React, Java (Spring Boot), and AWS services while maintaining high code quality.',
      'Reduced AWS infrastructure costs by $50,000+ annually by analyzing CloudWatch metrics, leading cross-team trade-off discussions, and implementing optimized resource configurations.',
      'Built advanced front-end capabilities with TanStack Query, React Hook Form, Zustand, AG Grid, and TinyMCE to streamline enterprise compensation management and payroll scheduling workflows.',
      'Developed real-time APIs with WebSockets and Redis Streams, integrated with MySQL/PostgreSQL to support complex payroll and incentive calculations.',
      'Led microfrontend deployments on AWS ECS using S3, DynamoDB, RDS, and Parameter Store — resolved deployment issues and established team-wide deployment standards.',
      'Took ownership of Terraform-managed infrastructure, applying IaC practices for deployment consistency.',
      "Maintained 90%+ code coverage on new work and lifted a legacy microservice's coverage from 10% to 85%.",
    ],
    stack: ['React', 'Spring Boot', 'AWS ECS', 'Terraform', 'PostgreSQL', 'Redis Streams', 'WebSockets'],
  },
  {
    company: 'JPMorganChase',
    role: 'Summer Intern',
    location: 'Hyderabad, India',
    start: 'Jun 2023',
    end: 'Jul 2023',
    highlights: [
      'Engineered microfrontend applications with ReactJS and Webpack Module Federation, integrating AG Grid and TinyMCE within a modular architecture.',
      'Contributed to backend integrations using AWS services and queue-based messaging for async processing; modernized the frontend using BEM standards in Agile sprints.',
    ],
    stack: ['React', 'Webpack Module Federation', 'AG Grid', 'AWS', 'BEM'],
  },
];
