import db from '@/features/shared/db';

interface findAllParams {
  limit?: number | undefined;
}

export const findAll = async ({ limit }: findAllParams = {}) => {
  const announcements = await db.announcement.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: limit,
  });

  return announcements;
};

export const findById = async (id: number) => {
  const announcement = await db.announcement.findUnique({
    where: { id },
  });

  if (!announcement) throw new Error('announcement not found');

  return announcement;
};
