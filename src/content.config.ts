import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  blog: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
    }),
  }),
  learn: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/learn" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      order: z.number().default(0),
      level: z.enum(["beginner", "intermediate", "advanced"]).default("beginner"),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      updated: z.coerce.date().optional(),
      /** Optional end-of-lesson practice quiz. Omit on short/reference pages. */
      quiz: z
        .object({
          title: z.string().optional(),
          questions: z
            .array(
              z
                .object({
                  prompt: z.string().min(1),
                  choices: z.array(z.string().min(1)).min(2).max(6),
                  answer: z.string().regex(/^[A-Fa-f]$/, "answer must be a letter A–F"),
                  hint: z.string().optional(),
                  explanation: z.string().optional(),
                  level: z.enum(["beginner", "intermediate", "advanced"]).optional(),
                  tags: z.array(z.string()).optional(),
                })
                .superRefine((q, ctx) => {
                  const idx = q.answer.trim().toUpperCase().charCodeAt(0) - 65;
                  if (idx < 0 || idx >= q.choices.length) {
                    ctx.addIssue({
                      code: "custom",
                      message: `answer "${q.answer}" is out of range for ${q.choices.length} choices`,
                      path: ["answer"],
                    });
                  }
                }),
            )
            .min(2),
        })
        .optional(),
    }),
  }),
};
