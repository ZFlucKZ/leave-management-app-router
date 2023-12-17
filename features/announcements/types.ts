import { type findAll, type findById } from '@/features/announcements/api';

export type AnnouncementItem = Awaited<ReturnType<typeof findAll>>[number];

export type AnnouncementDetails = Awaited<ReturnType<typeof findById>>;
