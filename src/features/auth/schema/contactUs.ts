import {z} from 'zod';


export const contactUsSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(500),
  avatar: z.string().url().nullable(),
})


 export type contactFormData = z.infer<typeof contactUsSchema>;