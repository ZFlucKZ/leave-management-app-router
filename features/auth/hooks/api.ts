import { useMutation } from '@tanstack/react-query';
import { type Profile, type SignUp } from '../types';

export const useRegister = () => {
  return useMutation({
    async mutationFn(input: SignUp) {
      const response = await fetch('/api/auth/sign-up', {
        method: 'POST',
        body: JSON.stringify(input),
      });

      const profile = await (response.json() as Promise<Profile>);

      return profile;
    },
  });
};

export const useEditProfile = () => {
  return useMutation({
    async mutationFn(input: FormData) {
      const response = await fetch('/api/auth/profile', {
        method: 'PATCH',
        body: input,
      });

      const profile = await (response.json() as Promise<Profile>);

      return profile;
    },
  });
};
