'use client';

import AuthForm from '@/features/auth/components/AuthForm';
import { useRegister } from '@/features/auth/hooks/api';
import { type SignUp } from '@/features/auth/types';
import { useUiStore } from '@/features/ui/store';
import { useRouter } from 'next/navigation';

const Register = () => {
  const { mutateAsync } = useRegister();
  const router = useRouter();

  const setToast = useUiStore((state) => state.setToast);

  const submit = async (credentials: SignUp) => {
    await mutateAsync(credentials);
    setToast({ type: 'Success', message: 'Account created!' });

    router.replace('/');
  };

  return <AuthForm kind="register" onSubmit={submit}></AuthForm>;
};

export default Register;
