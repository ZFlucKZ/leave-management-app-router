import { findBySlug } from '@/features/articles/api';
import ArticleDetails from '@/features/articles/components/ArticleDetails';
import { getImagePath } from '@/features/shared/helpers/upload';
import { type Metadata } from 'next';

interface ArticlePageProps {
  params: {
    slug: string;
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

export async function generateMetadata({
  params: { slug },
}: ArticlePageProps): Promise<Metadata> {
  const article = await findBySlug(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      images: getImagePath(article.image),
    },
  };
}

const ArticlePage = async ({ params: { slug } }: ArticlePageProps) => {
  const article = await findBySlug(slug);

  if (!article) return <div>No Article found.</div>;

  return <ArticleDetails article={article}></ArticleDetails>;
};

export default ArticlePage;
