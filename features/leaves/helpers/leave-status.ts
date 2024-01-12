import { type LeaveItem } from '@/features/leaves/types';

export const statusColor = (status: LeaveItem['status']) => {
  switch (status) {
    case 'APPROVED':
      return 'bg-green-500';
    case 'REJECTED':
      return 'bg-red-500';
    default:
      return 'bg-cyan-500';
  }
};
