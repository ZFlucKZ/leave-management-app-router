// import { type update, type add } from '@/features/articles/validator';
// import { type z } from 'zod';

import { type findById, type findAll } from '@/features/articles/api';

// export type CreateArticleInput = z.infer<typeof add>;

// export type UpdateArticleInput = z.infer<typeof update>;

export type ArticleItem = Awaited<ReturnType<typeof findAll>>[number];

export type ArticleDetails = NonNullable<Awaited<ReturnType<typeof findById>>>;
