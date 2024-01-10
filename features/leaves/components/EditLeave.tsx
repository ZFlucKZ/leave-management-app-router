'use client';

import LeaveForm from '@/features/leaves/components/LeaveForm';
import { useEditLeave, useGetLeave } from '@/features/leaves/hooks/api';
import { type UpdateLeaveInput } from '@/features/leaves/types';
import { useParams, useRouter } from 'next/navigation';

const EditLeave = () => {
  const router = useRouter();

  const { id } = useParams<{ id: string }>();
  const { data: leave, isLoading } = useGetLeave(+id);

  const { mutateAsync } = useEditLeave(+id);

  const editLeave = async (form: UpdateLeaveInput) => {
    await mutateAsync(form);

    router.push('/leaves');
  };

  if (isLoading) return <div>Loading...</div>;
  if (!leave) return <div>No leave data found</div>;

  return <LeaveForm kind="edit" leave={leave} onSubmit={editLeave}></LeaveForm>;
};

export default EditLeave;
