import { useGetArticle } from '@/features/articles/admin/hooks/api';
import type * as types from '@/features/articles/types';
import { Separator } from '@/features/shadcn/components/ui/separator';
import { toDateString } from '@/features/shared/helpers/date';
import { CalendarDays, FileEdit } from 'lucide-react';
import Image from 'next/image';

interface ArticleDetailsProps {
  id: types.ArticleDetails['id'];
}

const ArticleDetails = ({ id }: ArticleDetailsProps) => {
  const article = useGetArticle(id);

  if (!article) return <div>No article found</div>;

  return (
    <article>
      <figure>
        <div className="relative h-48 w-full object-contain">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 800px) 50vw, 100vw"
          ></Image>
        </div>
        {/* <figcaption>{article.image}</figcaption> */}
      </figure>
      <h2 className="my-2 text-center text-xl">{article.title}</h2>
      <Separator></Separator>
      <div className="flex justify-between rounded-sm bg-gray-50 p-2">
        <div className="flex items-center">
          <CalendarDays className="mr-2 w-6"></CalendarDays>
          {toDateString(article.createdAt)}
        </div>
        <FileEdit className="w-6"></FileEdit>
      </div>
      <Separator></Separator>
      <p className="my-2 text-gray-600">{article.content}</p>
    </article>
  );
};

export default ArticleDetails;
