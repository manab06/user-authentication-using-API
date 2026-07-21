import {z} from 'zod';


export const contactUsSchemaZod = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
})
 export type contactFormDatazod = z.infer<typeof contactUsSchemaZod>;
