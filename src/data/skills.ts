import {
  siJavascript, siTypescript, siReact, siRedux, siNextdotjs, siReactquery, siReacthookform,
  siZod, siVuedotjs, siAngular, siHtml5, siCss3, siSass, siLess, siTailwindcss,
  siStyledcomponents, siVitest, siJest, siTestinglibrary, siIonic, siElectron, siD3dotjs,
  siNodedotjs, siApollographql, siLaravel, siOpenai, siClaude, siFigma,
  siGit, siWebpack, siVite, siVercel, siCircleci, siGitlab, siDocker,
  type SimpleIcon,
} from 'simple-icons';

export interface SkillIcon {
  icon: SimpleIcon;
  /** Optional color override. Use a CSS value such as 'var(--fg)' for logos that are black. */
  color?: string;
}

export interface Skill {
  name: string;
  icons: SkillIcon[];
}

export interface SkillGroup {
  title: string;
  wide?: boolean;
  skills: Skill[];
}

// Black or very dark logos follow the text color so they work in both themes.
const FG = 'var(--fg)';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    wide: true,
    skills: [
      { name: 'JavaScript (ES6)', icons: [{ icon: siJavascript }] },
      { name: 'TypeScript', icons: [{ icon: siTypescript }] },
      { name: 'React', icons: [{ icon: siReact }] },
      { name: 'Redux', icons: [{ icon: siRedux }] },
      { name: 'React Hooks', icons: [{ icon: siReact }] },
      { name: 'Next.js', icons: [{ icon: siNextdotjs, color: FG }] },
      { name: 'TanStack Query', icons: [{ icon: siReactquery }] },
      { name: 'React Hook Form', icons: [{ icon: siReacthookform }] },
      { name: 'Zod', icons: [{ icon: siZod }] },
      { name: 'Vue.js', icons: [{ icon: siVuedotjs }] },
      { name: 'Angular', icons: [{ icon: siAngular, color: '#DD0031' }] },
      { name: 'HTML5', icons: [{ icon: siHtml5 }] },
      { name: 'CSS3', icons: [{ icon: siCss3 }] },
      { name: 'Sass / Less', icons: [{ icon: siSass }, { icon: siLess, color: '#4B83C6' }] },
      { name: 'Tailwind CSS', icons: [{ icon: siTailwindcss }] },
      { name: 'Styled Components', icons: [{ icon: siStyledcomponents }] },
      { name: 'Vitest', icons: [{ icon: siVitest }] },
      { name: 'Jest', icons: [{ icon: siJest }] },
      { name: 'React Testing Library', icons: [{ icon: siTestinglibrary }] },
      { name: 'Ionic', icons: [{ icon: siIonic }] },
      { name: 'Electron', icons: [{ icon: siElectron }] },
      { name: 'D3.js', icons: [{ icon: siD3dotjs }] },
    ],
  },
  {
    title: 'Backend & API',
    skills: [
      { name: 'Node.js', icons: [{ icon: siNodedotjs }] },
      { name: 'Apollo GraphQL', icons: [{ icon: siApollographql, color: FG }] },
      { name: 'Laravel', icons: [{ icon: siLaravel }] },
      { name: 'OpenAI API Integration', icons: [{ icon: siOpenai, color: FG }] },
    ],
  },
  {
    title: 'AI & Agents',
    skills: [
      { name: 'Claude Code', icons: [{ icon: siClaude }] },
      { name: 'Claude VS Code Extension', icons: [{ icon: siClaude }] },
      { name: 'OpenAI API', icons: [{ icon: siOpenai, color: FG }] },
      { name: 'Figma MCP', icons: [{ icon: siFigma }] },
      { name: 'Claude Code Plugins', icons: [{ icon: siClaude }] },
    ],
  },
  {
    title: 'Tools & Platform',
    skills: [
      { name: 'Git', icons: [{ icon: siGit }] },
      { name: 'Webpack', icons: [{ icon: siWebpack }] },
      { name: 'Vite', icons: [{ icon: siVite }] },
      { name: 'Vercel', icons: [{ icon: siVercel, color: FG }] },
      { name: 'CircleCI', icons: [{ icon: siCircleci, color: FG }] },
      { name: 'GitLab CI/CD', icons: [{ icon: siGitlab }] },
      { name: 'Docker', icons: [{ icon: siDocker }] },
    ],
  },
];
