export interface Job {
  when: string;
  role: string;
  company: string;
  summary: string;
}

// Newest first. Edit freely; the timeline renders whatever is in this list.
export const jobs: Job[] = [
  {
    when: 'Aug 2024 – Apr 2026',
    role: 'Lead Frontend Engineer',
    company: 'Openroom',
    summary:
      'Canada, remote. Led frontend architecture for tenant screening, rent reporting and credit-building products used by landlords and property managers.',
  },
  {
    when: 'Jan 2024 – Jun 2025',
    role: 'Frontend Team Lead',
    company: 'IQVIA',
    summary:
      'United States, remote. Led the frontend team on DTP, a configurable platform for patient participation in clinical studies.',
  },
  {
    when: 'Mar 2022 – Dec 2023',
    role: 'Senior Software Engineer',
    company: 'Elevate Security (acquired by Mimecast)',
    summary:
      'United States, remote. Built the rules engine UI and data visualizations for a human-risk security platform.',
  },
  {
    when: 'Oct 2020 – Dec 2021',
    role: 'Senior Software Engineer',
    company: 'Unlayer',
    summary:
      'United States, remote. Stabilized and extended a low-code email and page template builder with React and Apollo GraphQL.',
  },
  {
    when: 'Aug 2018 – Sep 2020',
    role: 'Senior Frontend Engineer',
    company: 'Luminary Media',
    summary:
      'United States, remote. Helped build a premium podcast subscription platform from the ground up in Vue.js, with Segment, Branch and Firebase integrations.',
  },
  {
    when: 'Jun 2015 – Jul 2018',
    role: 'Software Engineer',
    company: 'HireNinja',
    summary:
      'Delivered web and hybrid mobile apps for multiple clients with Angular, Vue, Ionic and Laravel.',
  },
];
