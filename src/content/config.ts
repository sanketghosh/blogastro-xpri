import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({});

export const collections = {
  blog: blogCollection,
};
