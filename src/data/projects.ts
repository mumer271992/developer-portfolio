export interface Project {
  name: string;
  org: string;
  description: string;
  industry: string;
  tags: string[];
  /** Mockup color theme used until a real screenshot is added. */
  tone: 'blue' | 'warm' | 'green' | 'slate';
  /**
   * Optional screenshot, e.g. '/projects/openroom.png' (put the file in /public/projects).
   * When set, the card shows the image instead of the mockup.
   */
  image?: string;
  /** Optional live or case-study link. */
  href?: string;
}

export const projects: Project[] = [
  {
    name: 'Openroom Platform',
    org: 'Openroom · Lead Frontend Engineer',
    description:
      'Owned the frontend architecture for BureauEdge, a multi-step rental-data ingestion workflow built from scratch, plus Public Record Search, Legal Research and an SSG marketing site in Next.js.',
    industry: 'Fintech · Proptech',
    tags: ['Next.js', 'TypeScript', 'TanStack Query', 'React Hook Form', 'Zod', 'Tailwind CSS'],
    tone: 'blue',
  },
  {
    name: 'Clinical Study Platform (DTP)',
    org: 'IQVIA · Frontend Team Lead',
    description:
      'Led a configurable platform that runs many clinical studies from one codebase. Built the configuration engine, a Tailwind design system and WCAG-compliant UI, and moved the build from CRA to Vite.',
    industry: 'Healthtech',
    tags: ['React', 'Redux Toolkit', 'FormIO', 'Auth0', 'Vite', 'Vitest'],
    tone: 'green',
  },
  {
    name: 'Security Insights Dashboard',
    org: 'Elevate Security · Senior Software Engineer',
    description:
      'Built the UI for a risk reduction rules engine and interactive security dashboards. Used list virtualization and lazy loading to keep large datasets fast.',
    industry: 'Cybersecurity · SaaS',
    tags: ['React', 'Redux', 'D3.js', 'single-spa', 'Storybook', 'Jest'],
    tone: 'warm',
  },
  {
    name: 'Unlayer Studio',
    org: 'Unlayer · Senior Software Engineer',
    description:
      'Joined at launch of this low-code HTML template builder. Fixed revenue-impacting bugs, added billing validations that stopped revenue leakage, and built premium tools for the embeddable editor.',
    industry: 'SaaS · Low-code',
    tags: ['React', 'Apollo GraphQL', 'styled-components', 'Node.js', 'AWS Serverless'],
    tone: 'slate',
  },
];
