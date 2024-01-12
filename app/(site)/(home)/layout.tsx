import { type ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
  articles: ReactNode;
  announcements: ReactNode;
}

//* Parallel Loading of Home Page Content
const HomeLayout = ({ children, articles, announcements }: HomeLayoutProps) => {
  return (
    <>
      {children}
      {articles}
      {announcements}
    </>
  );
};

export default HomeLayout;
