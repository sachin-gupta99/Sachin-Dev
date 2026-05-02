export type Contribution = {
  project: string;
  title: string;
  description: string;
  link?: string;
  kind: 'issue' | 'pr' | 'discussion' | 'talk' | 'post';
};

// TODO: Swap these stubs for the actual PR/issue URLs from your GitHub activity.
export const contributions: Contribution[] = [
  {
    project: 'Spring AI',
    title: 'Multi-domain metadata filtering in PgVector queries',
    description:
      'Raised an enhancement to support multi-domain metadata filters in PgVector-backed vector stores.',
    kind: 'issue',
  },
  {
    project: 'LangChain4j',
    title: 'MongoDB-backed chat memory store',
    description:
      'Proposed and discussed a MongoDB implementation for the chat memory abstraction.',
    kind: 'issue',
  },
];
