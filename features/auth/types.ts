import { type Role } from '@prisma/client';
import type * as validators from './validators';
import type * as z from 'zod';

export type SignIn = z.infer<typeof validators.signin>;

export type SignUp = z.infer<typeof validators.signup>;

export type ProfileForm = z.infer<typeof validators.profile>;

export interface Profile {
  id: string | number;
  email: string;
  image?: string;
  name: string;
  role: Role;
}
