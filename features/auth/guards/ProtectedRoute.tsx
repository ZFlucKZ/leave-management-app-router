'use client';

import { useUiStore } from '@/features/ui/store';
import { type Role } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  roles?: Role[];
}

const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isAllow, setIsAllow] = useState(false);

  const setToast = useUiStore((state) => state.setToast);

  useEffect(() => {
    if (status === 'loading') return;
    if (status === 'unauthenticated') {
      setToast({
        type: 'Error',
        message: 'You are not authenticated',
      });

      router.replace('/auth/sign-in');
      return;
    }
    if (!roles) return setIsAllow(true);
    if (session && roles.includes(session?.user.role)) return setIsAllow(true);

    setToast({
      type: 'Error',
      message: 'You are not authorized',
    });
    router.replace('/forbidden');
  }, [roles, router, session, session?.user.role, setToast, status]);

  if (status === 'loading') return <div>Loading...</div>;
  if (isAllow) return <>{children}</>;
  return null;
};

export default ProtectedRoute;
