import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// Optional long-form write-ups for the project detail pages. The file name must
// match the project's slug in src/data/projects.ts, e.g. quill-note.md.
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
});

export const collections = { projects };
