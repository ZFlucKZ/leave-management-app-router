import ArticleForm from '@/features/articles/admin/components/ArticleForm';
import {
  useGetArticle,
  useUpdateArticle,
} from '@/features/articles/admin/hooks/api';
import { type UpdateArticleInput } from '@/features/articles/admin/types';
import type * as types from '@/features/articles/types';
import { Button } from '@/features/shadcn/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/features/shadcn/components/ui/dialog';
import { ScrollArea } from '@/features/shadcn/components/ui/scroll-area';
import { Separator } from '@/features/shadcn/components/ui/separator';
import { toDateString } from '@/features/shared/helpers/date';
import { getImagePath } from '@/features/shared/helpers/upload';
import { CalendarDays, FileEdit } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ArticleDetailsProps {
  id: types.ArticleDetails['id'];
}

const ArticleDetails = ({ id }: ArticleDetailsProps) => {
  const [open, setOpen] = useState(false);

  const { mutateAsync } = useUpdateArticle(id);
  const article = useGetArticle(id);

  if (!article) return <div>No article found</div>;

  const handleUpdateArticle = async (form: UpdateArticleInput) => {
    setOpen(false);
    await mutateAsync(form);
  };

  return (
    <article>
      <figure>
        <div className="relative h-48 w-full object-contain">
          <Image
            src={getImagePath(article.image)}
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
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <FileEdit className="w-6"></FileEdit>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <ScrollArea className="max-h-[50vh]">
              <div className="p-4">
                <ArticleForm
                  kind="edit"
                  article={article}
                  onSubmit={handleUpdateArticle}
                ></ArticleForm>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
      <Separator></Separator>
      <p className="my-2 text-gray-600">{article.content}</p>
    </article>
  );
};

export default ArticleDetails;
