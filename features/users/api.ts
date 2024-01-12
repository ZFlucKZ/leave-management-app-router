import { type ProfileForm, type SignUp } from '@/features/auth/types';
import prisma from '@/features/shared/db';
import { removeDirFromFile, saveFile } from '@/features/shared/helpers/file';
import bcrypt from 'bcryptjs';

export const findById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      image: true,
    },
  });

  if (!user) throw new Error('User not found');

  return user;
};

export const add = async (input: SignUp) => {
  const password = hashPassword(input.password);
  const user = await prisma.user.create({
    data: {
      ...input,
      password,
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      image: true,
    },
  });

  return user;
};

export const update = async (userId: number, input: ProfileForm) => {
  let { image } = await findById(userId);

  if (input.image) {
    const currentImage = image;
    image = await saveFile(input.image);

    if (currentImage) {
      await removeDirFromFile(currentImage);
    }
  }

  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      ...input,
      image,
      password: input.password ? hashPassword(input.password) : undefined,
    },
  });

  return user;
};

const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 12);
};
