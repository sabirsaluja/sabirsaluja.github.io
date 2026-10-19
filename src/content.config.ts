import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per publication in src/content/publications/.
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    /** Author list as printed in the citation, e.g. "Saluja S, Qiu L, ..." */
    authors: z.string(),
    journal: z.string().optional(),
    year: z.number().int(),
    /** Month (1–12), used only to sort items within a year. */
    month: z.number().int().min(1).max(12).optional(),
    /** Volume, issue, pages, or article number, e.g. "27(8):3374–3384" */
    details: z.string().optional(),
    doi: z.string().optional(),
    url: z.url().optional(),
    type: z.enum(['article', 'abstract', 'case report']),
    status: z.enum(['published', 'submitted']).default('published'),
  }),
});

// One Markdown file per talk or poster in src/content/presentations/.
const presentations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/presentations' }),
  schema: z.object({
    title: z.string(),
    authors: z.string().optional(),
    event: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    type: z.enum(['poster', 'oral']),
  }),
});

export const collections = { publications, presentations };
