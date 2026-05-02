export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  link?: string;
  badge?: string;
};

// TODO: Fill in `year` for each credential when convenient.
export const certifications: Certification[] = [
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/0ade807d-d6b8-4382-9df1-605a7f46ed18/public_url',
    badge: 'https://github.com/user-attachments/assets/d1d94d79-4902-4c4a-94bf-42513cfb143d',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/4ba5ef41-c115-4994-9514-d4613f2bdd84/public_url',
    badge: 'https://github.com/user-attachments/assets/784be135-e457-41d6-a467-d5c560a51121',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate (003)',
    issuer: 'HashiCorp',
    link: 'https://www.credly.com/badges/4eaeb407-2a71-4226-a21f-5bfa6ac040c5/public_url',
    badge: 'https://github.com/user-attachments/assets/34020f87-7a51-436d-8f9f-e319c509aba6',
  },
];

export type Achievement = {
  title: string;
  description: string;
  year?: string;
};

export const achievements: Achievement[] = [
  {
    title: 'Winner — Code for Good Hackathon',
    description:
      'National-level hackathon organized by JPMorganChase. Team built a solution for a partner non-profit and took first place.',
    year: '2022',
  },
  {
    title: 'Reduced AWS infrastructure costs by $50,000+ annually',
    description:
      'Analyzed CloudWatch metrics and resource configurations at JPMorganChase and led cross-team discussions to implement optimized solutions.',
    year: '2025',
  },
  {
    title: 'Open-source contributions to Spring AI and LangChain4j',
    description:
      'Raised enhancements around multi-domain metadata filtering in PgVector and a MongoDB-backed chat memory store.',
    year: '2026',
  },
];
