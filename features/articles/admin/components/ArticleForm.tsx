import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/features/shadcn/components/ui/form';
import { Separator } from '@/features/shadcn/components/ui/separator';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as validators from '@/features/articles/validator';
import { Input } from '@/features/shadcn/components/ui/input';
import { Textarea } from '@/features/shadcn/components/ui/textarea';
import { Button } from '@/features/shadcn/components/ui/button';
import type * as types from '../types';
import { type ArticleDetails } from '@/features/articles/types';
import { capitalize } from 'lodash';

type ArticleFormProps =
  | { kind: 'create'; onSubmit: SubmitHandler<types.AddArticleInput> }
  | {
      kind: 'edit';
      onSubmit: SubmitHandler<types.UpdateArticleInput>;
      article: ArticleDetails;
    };

const ArticleForm = (props: ArticleFormProps) => {
  const { kind, onSubmit } = props;

  const form = useForm({
    mode: 'onChange',
    resolver: zodResolver(
      kind === 'create' ? validators.add : validators.update,
    ),
    defaultValues:
      kind === 'edit'
        ? { ...props.article, image: '' }
        : {
            title: '',
            content: '',
            excerpt: '',
            image: '',
          },
  });

  return (
    <Form {...form}>
      <form
        className="relative space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-center text-2xl">
          {kind === 'create' ? 'Create Article' : 'Update Article'}
        </h1>
        <Separator></Separator>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="1989" {...field}></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Taylor's version"
                  {...field}
                  className="resize-none"
                ></Textarea>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="1989 (Taylor's version)"
                  {...field}
                  className="resize-none"
                ></Textarea>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        ></FormField>
        <Button type="submit">{capitalize(kind)}</Button>
      </form>
    </Form>
  );
};

export default ArticleForm;
