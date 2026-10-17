import type { ImageMetadata } from "astro";

// Every image in src/assets/projects/<folder>/, bundled and optimized by Astro.
const files = import.meta.glob<ImageMetadata>(
  "../assets/projects/*/*.{png,jpg,jpeg,webp,gif,svg,avif}",
  { eager: true, import: "default" },
);

/**
 * All images in src/assets/projects/<folder>, sorted by file name
 * (prefix names with 01-, 02- ... to control the order).
 */
function imagesIn(folder: string): ImageMetadata[] {
  const prefix = `../assets/projects/${folder}/`;
  const found = Object.keys(files)
    .filter((path) => path.startsWith(prefix))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
    )
    .map((path) => files[path]);
  if (!found.length)
    throw new Error(`No project images found in src/assets/projects/${folder}`);
  return found;
}

export interface Project {
  name: string;
  org: string;
  description: string;
  industry: string;
  tags: string[];
  /** Mockup color theme used until a real screenshot is added. */
  tone: "blue" | "warm" | "green" | "slate";
  /**
   * Optional screenshots, usually `imagesIn("<folder>")`. With more than one, the
   * card cycles through them. Without any, the card shows a mockup.
   */
  images?: ImageMetadata[];
  /**
   * How the images fill the card. "cover" (default) fills it edge to edge, for
   * screenshots. "contain" shows the whole image centered on a dark plate, for logos.
   */
  imageFit?: "cover" | "contain";
  /** Optional live or case-study link. */
  href?: string;
}

export const projects: Project[] = [
  {
    name: "Quill Note",
    org: "Quill Note · Senior FullStack Engineer",
    description:
      "Quill Note is a privacy-first note-taking app that lets you write your own meeting notes and use AI to summarize them only when you choose. Its Float Mode keeps notes visible on top of any app, so you can capture ideas during calls without switching windows.",
    industry: "SaaS",
    tags: [
      "Astro",
      "React",
      "TypeScript",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
    ],
    tone: "blue",
    images: imagesIn("quillnote"),
  },
  {
    name: "Openroom Platform",
    org: "Openroom · Lead Frontend Engineer",
    description:
      "Openroom collects public tenancy records and connects them to the broader financial credit system to help you make informed decisions on who to rent from and rent to.",
    industry: "Fintech · Proptech",
    tags: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
    ],
    tone: "blue",
    images: imagesIn("openroom"),
  },
  {
    name: "Clinical Study Platform (DTP)",
    org: "IQVIA · Frontend Team Lead",
    description:
      "DTP, A configurable web platform for patient participation in clinical studies.",
    industry: "Healthtech",
    tags: [
      "React",
      "Redux Toolkit",
      "FormIO",
      "Auth0",
      "Vite",
      "Vitest",
      "Material UI",
    ],
    tone: "green",
    images: imagesIn("iqvia"),
  },
  {
    name: "Security Insights Dashboard",
    org: "Elevate Security · Senior Software Engineer (React)",
    description:
      "Security Insights Dashboard, A platform providing actionable insights into human risk factors to help organizations improve their cybersecurity posture.",
    industry: "Cybersecurity · SaaS",
    tags: ["React", "Redux", "D3.js", "single-spa", "Storybook", "Jest"],
    tone: "warm",
    images: imagesIn("elevate-security"),
  },
  {
    name: "Unlayer Studio",
    org: "Unlayer · Senior Software Engineer (React, Apollo GraphQL)",
    description:
      "Unlayer Studio, A SaaS, low-code platform for creating responsive HTML templates.",
    industry: "SaaS · Low-code",
    tags: [
      "React",
      "Apollo GraphQL",
      "styled-components",
      "Node.js",
      "AWS Serverless",
    ],
    tone: "slate",
    images: imagesIn("unlayer"),
    imageFit: "contain",
  },
  {
    name: "Luminary Media",
    org: "HireNinja · Software Engineer",
    description:
      "Luminary is a premium podcast platform offering access to hundreds of thousands of shows from top creators, plus 40+ Luminary Originals exclusive to the platform. I was part of the frontend team that built both of the platform's sites from scratch.",
    industry: "Media & Entertainment (Audio Streaming)",
    tags: ["Vue.js", "Vuex", "Element UI"],
    tone: "slate",
    images: imagesIn("luminarymedia"),
  },
  {
    name: "Control My Events (CME)",
    org: "HireNinja · Software Engineer",
    description:
      "Your subscription includes complete access to our managed service, unlimited support, and development of external APIs when not available (additional subscription chargex may apply for external services)",
    industry: "SaaS",
    tags: ["Angular2"],
    tone: "slate",
    images: imagesIn("control-my-events"),
  },
  {
    name: "Undolus",
    org: "HireNinja · Software Engineer",
    description:
      "Undolus is a dating safety platform for women in the U.S. that lets them look up people they’re dating or planning to date. Users can unlock detailed profiles with public records and background check data, share their own dating experiences, and see a score that rates a person’s dating potential based on criminal history and review sentiment.",
    industry: "Dating Safety Tech",
    tags: ["AngularJS", "AngularJS Material", "REST APIs", "Laravel", "MySql"],
    tone: "slate",
    images: imagesIn("undolus"),
  },
];
