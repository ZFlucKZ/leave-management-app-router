'use client';

import { useCreateArticle } from '@/features/articles/hooks/api';
import { Button } from '@/features/shadcn/components/ui/button';

const CreateArticle = () => {
  const { mutateAsync } = useCreateArticle();

  return (
    <Button onClick={() => mutateAsync({ title: 'xxxxx' })}>Create</Button>
  );
};

export default CreateArticle;
