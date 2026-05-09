export type Contribution = {
  project: string;
  title: string;
  description: string;
  link?: string;
  kind: 'issue' | 'pr' | 'discussion' | 'talk' | 'post';
};

export const contributions: Contribution[] = [
  {
    project: 'spring-projects/spring-ai',
    title: 'Add migration guide for switching between model providers',
    description:
      'Proposed a documentation guide that walks through migrating a Spring AI application between model providers — highlighting configuration, tool-calling, and prompt differences developers hit in practice.',
    link: 'https://github.com/spring-projects/spring-ai/issues/5721',
    kind: 'issue',
  },
  {
    project: 'spring-projects/spring-ai',
    title: 'Support multi-domain metadata filtering in PgVector queries',
    description:
      'Raised an enhancement to support multi-domain metadata filters on PgVector-backed vector stores, so retrieval can be scoped across tenants or content domains in a single query.',
    link: 'https://github.com/spring-projects/spring-ai/issues/5720',
    kind: 'issue',
  },
  {
    project: 'langchain4j/langchain4j',
    title: 'Add built-in MongoDB-backed ChatMemoryStore',
    description:
      'Proposed a first-class MongoDB implementation of the ChatMemoryStore abstraction so teams on MongoDB can persist conversation history without writing a custom store.',
    link: 'https://github.com/langchain4j/langchain4j/issues/4830',
    kind: 'issue',
  },
  {
    project: 'langchain4j/langchain4j',
    title: 'Support multi-domain metadata filtering in RAG retrieval',
    description:
      'Mirror of the Spring AI request — extend LangChain4j RAG retrieval to filter across multiple metadata domains, enabling multi-tenant and multi-corpus retrieval patterns.',
    link: 'https://github.com/langchain4j/langchain4j/issues/4831',
    kind: 'issue',
  },
];
