import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    destination: z.enum(['seoul', 'busan', 'jeju', 'korea']),
    category: z.enum([
      'where-to-stay',
      'tours-tickets',
      'transport',
      'sim-money',
      'itineraries',
      'compare',
      'travel-basics',
    ]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('MyTripTip'),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    monetizationType: z.enum(['hotel', 'tour', 'sim', 'adsense', 'mixed']),
    primaryCTA: z.enum(['booking', 'agoda', 'tripdotcom', 'viator', 'klook', 'kkday', 'airalo', 'getyourguide']).optional(),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    relatedPosts: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
