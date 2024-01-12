'use client';

import AuthForm from '@/features/auth/components/AuthForm';
import { type SignIn } from '@/features/auth/types';
import { useUiStore } from '@/features/ui/store';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const Login = () => {
  const router = useRouter();
  const setToast = useUiStore((state) => state.setToast);
  const submit = async (credentials: SignIn) => {
    const result = await signIn('credentials', {
      ...credentials,
      redirect: false,
    });

    if (result?.ok) {
      setToast({
        type: 'Success',
        message: 'Login successful',
      });
      router.replace('/');
    }

    if (result?.error) {
      setToast({
        type: 'Error',
        message: 'Login failed',
      });
    }
  };

  return <AuthForm kind="login" onSubmit={submit}></AuthForm>;
};

export default Login;
