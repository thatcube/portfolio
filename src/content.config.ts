import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortDesc: z.string(),
      problem: z.string().optional(),
      solution: z.string().optional(),
      role: z.string().optional(),
      heroImage: image(),
      thumbnail: image(),
      publishedAt: z.coerce.date(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

export const collections = { projects };
