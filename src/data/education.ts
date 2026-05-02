export type EducationEntry = {
  institution: string;
  degree: string;
  start: string;
  end: string;
  details?: string;
};

export const education: EducationEntry[] = [
  {
    institution: 'National Institute of Technology, Warangal',
    degree: 'Master of Computer Applications (MCA)',
    start: '2021',
    end: '2024',
    details: 'CGPA: 8.00 · Warangal, Telangana',
  },
  {
    institution: 'Durgapur Government College',
    degree: 'B.Sc. Mathematics',
    start: '2018',
    end: '2021',
    details: 'CGPA: 9.42 · Durgapur, West Bengal',
  },
];
