import { z } from 'zod';
import { image } from '@/features/shared/validators/image';

// z.object({
//   name: z.string(),
//   gender: z.enum(['male', 'female']),
//   age: z.number().min(1),
//   email: z.string().email(),
//   password: z.string().min(8),
// });

export const add = z.object({
  // title: z.string({required_error: 'ใส่มาหน่อย'}).email({message:'ใส่เมลล์มา'}).min(1, { message: 'ใส่มา' }),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  image: image,
});

export const update = add.partial();
