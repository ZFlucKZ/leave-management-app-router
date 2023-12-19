import * as api from '@/features/articles/admin/api';
import { type AddArticleInput } from '@/features/articles/admin/types';
import * as validators from '@/features/articles/admin/validator';
import { revalidatePath } from 'next/cache';

export const POST = async (req: Request) => {
  const form = await (req.json() as Promise<AddArticleInput>);
  const formValidation = await validators.add.safeParseAsync(form);

  if (!formValidation.success) {
    return new Response(JSON.stringify(formValidation.error), {
      status: 422,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const article = await api.add(formValidation.data);

  revalidatePath('/articles');

  return new Response(JSON.stringify(article), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
