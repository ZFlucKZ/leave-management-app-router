import { findById } from '@/features/articles/api';
import ArticleDetails from '@/features/articles/components/ArticleDetails';

interface ArticlePageProps {
  params: {
    id: string;
  };
}

//* For SSG of each id
export const generateStaticParams = () => {
  return [{ id: '1' }, { id: '3' }];
};

//* Server Action
// const updateArticle = async (id: Article['id']) => {
//   'use server';
//   await update(id, { title: 'yyyyy' });

//   revalidatePath(`/articles/${id}`);
// };

const ArticlePage = async ({ params: { id } }: ArticlePageProps) => {
  const article = await findById(+id);

  if (!article) return <div>No Article found.</div>;

  return <ArticleDetails article={article}></ArticleDetails>;
};

export default ArticlePage;
