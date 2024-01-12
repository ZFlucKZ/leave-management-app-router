import {
  type AddLeaveInput,
  type UpdateLeaveInput,
} from '@/features/leaves/types';
import prisma from '@/features/shared/db';

export const findAll = async (userId: number) => {
  const leaves = prisma.leave.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      reason: true,
      leaveDate: true,
      status: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return leaves;
};

export const findById = async (id: number) => {
  const leave = await prisma.leave.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      reason: true,
      leaveDate: true,
      status: true,
      rejectionReason: true,
    },
  });

  if (!leave) throw new Error('Leave not found');

  return leave;
};

export const add = async (userId: number, input: AddLeaveInput) => {
  const leave = prisma.leave.create({
    data: {
      ...input,
      userId,
    },
  });

  return leave;
};

export const update = async (id: number, input: UpdateLeaveInput) => {
  const leave = await prisma.leave.update({
    where: {
      id,
    },
    data: {
      ...input,
    },
  });

  return leave;
};
