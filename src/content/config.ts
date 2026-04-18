import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    type: z.string(),
    description: z.string(),
    order: z.number(),
    logo: z.string(),
    liveDemoUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
