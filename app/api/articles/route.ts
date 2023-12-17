import { findAll } from '@/features/articles/api';

export const GET = async () => {
  const articles = await findAll();

  return Response.json(articles);
  // return new Response(JSON.stringify(articles), {
  //   status: 200,
  //   headers: { 'Content-type': 'application/json' },
  // });
};
