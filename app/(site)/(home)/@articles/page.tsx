import * as api from '@/features/articles/api';
import ArticleList from '@/features/articles/components/ArticleList';

const LatestArticleList = async () => {
  const articles = await api.findAll({ limit: 3 });

  return <ArticleList articles={articles}></ArticleList>;
};

export default LatestArticleList;
