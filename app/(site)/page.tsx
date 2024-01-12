import Image from 'next/image';
import * as articlesApi from '@/features/articles/api';
import ArticleList from '@/features/articles/components/ArticleList';
import * as announcementsApi from '@/features/announcements/api';
import AnnouncementList from '@/features/announcements/components/AnnouncementList';

const HomePage = async () => {
  const articles = await articlesApi.findAll({ limit: 3 });
  const announcements = await announcementsApi.findAll({ limit: 3 });

  return (
    <>
      <h1 className="my-4 text-center text-4xl font-bold">Leave Management</h1>
      <div className="relative h-[500px]">
        <Image
          src="/assets/images/image.jpg"
          alt="Home Page"
          fill
          sizes="(min-width: 800px) 50vw, 100vw"
          className="object-cover"
        ></Image>
      </div>
      <ArticleList articles={articles}></ArticleList>;
      <AnnouncementList announcements={announcements}></AnnouncementList>;
    </>
  );
};

export default HomePage;
