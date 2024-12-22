import z from "zod";

export const tableSchema = z.object({
  tableName: z.string().min(3).max(255),
  header: z.string().optional(),
  votes: z.array(z.number()),
});

export type tableSchemaProps = z.infer<typeof tableSchema>;
