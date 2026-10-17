import type { ImageMetadata } from "astro";

// Every image and video in src/assets/projects/<folder>/. Images are optimized
// by Astro; videos are copied as-is and only download when their slide plays.
const imageFiles = import.meta.glob<ImageMetadata>(
  "../assets/projects/*/*.{png,jpg,jpeg,webp,gif,svg,avif}",
  { eager: true, import: "default" },
);
const videoFiles = import.meta.glob<string>("../assets/projects/*/*.{mp4,webm}", {
  eager: true,
  query: "?url",
  import: "default",
});

export type ProjectMedia =
  | { kind: "image"; src: ImageMetadata }
  | { kind: "video"; src: string; poster?: ImageMetadata };

/** "../assets/projects/iqvia/demo.poster.png" -> "../assets/projects/iqvia/demo" */
const stem = (path: string) => path.replace(/(\.poster)?\.[^./]+$/, "");

/**
 * All images and videos in src/assets/projects/<folder>, sorted by file name
 * (prefix names with 01-, 02- ... to control the order). A video's still frame,
 * shown until it plays, goes next to it as <name>.poster.<ext>.
 */
function mediaIn(folder: string): ProjectMedia[] {
  const prefix = `../assets/projects/${folder}/`;
  const posters = new Map<string, ImageMetadata>();
  const items: [string, ProjectMedia][] = [];

  for (const [path, src] of Object.entries(imageFiles)) {
    if (!path.startsWith(prefix)) continue;
    if (/\.poster\.[^./]+$/.test(path)) posters.set(stem(path), src);
    else items.push([path, { kind: "image", src }]);
  }
  for (const [path, src] of Object.entries(videoFiles)) {
    if (path.startsWith(prefix)) items.push([path, { kind: "video", src }]);
  }
  for (const [path, item] of items) {
    if (item.kind === "video") item.poster = posters.get(stem(path));
  }

  if (!items.length)
    throw new Error(`No project media found in src/assets/projects/${folder}`);
  return items
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map(([, item]) => item);
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
   * Optional screenshots and videos, usually `mediaIn("<folder>")`. With more than
   * one, the card cycles through them. Without any, the card shows a mockup.
   */
  media?: ProjectMedia[];
  /**
   * How images fill the card (videos always fill it). "cover" (default) fills it
   * edge to edge, for screenshots. "contain" shows the whole image centered on a
   * dark plate, for logos.
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
    media: mediaIn("quillnote"),
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
    media: mediaIn("openroom"),
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
    media: mediaIn("iqvia"),
  },
  {
    name: "Security Insights Dashboard",
    org: "Elevate Security · Senior Software Engineer (React)",
    description:
      "Security Insights Dashboard, A platform providing actionable insights into human risk factors to help organizations improve their cybersecurity posture.",
    industry: "Cybersecurity · SaaS",
    tags: ["React", "Redux", "D3.js", "single-spa", "Storybook", "Jest"],
    tone: "warm",
    media: mediaIn("elevate-security"),
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
    media: mediaIn("unlayer"),
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
    media: mediaIn("luminarymedia"),
  },
  {
    name: "Control My Events (CME)",
    org: "HireNinja · Software Engineer",
    description:
      "Your subscription includes complete access to our managed service, unlimited support, and development of external APIs when not available (additional subscription chargex may apply for external services)",
    industry: "SaaS",
    tags: ["Angular2"],
    tone: "slate",
    media: mediaIn("control-my-events"),
  },
  {
    name: "Undolus",
    org: "HireNinja · Software Engineer",
    description:
      "Undolus is a dating safety platform for women in the U.S. that lets them look up people they’re dating or planning to date. Users can unlock detailed profiles with public records and background check data, share their own dating experiences, and see a score that rates a person’s dating potential based on criminal history and review sentiment.",
    industry: "Dating Safety Tech",
    tags: ["AngularJS", "AngularJS Material", "REST APIs", "Laravel", "MySql"],
    tone: "slate",
    media: mediaIn("undolus"),
  },
];
