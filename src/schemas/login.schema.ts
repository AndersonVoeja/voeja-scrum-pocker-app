import z from "zod";

export const loginSchema = z.object({
  name: z.string().min(3).max(255),
});

export type loginSchemaProps = z.infer<typeof loginSchema>;
