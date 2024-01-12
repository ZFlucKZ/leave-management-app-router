'use client';

import { statusColor } from '@/features/leaves/helpers/leave-status';
import { useGetLeave } from '@/features/leaves/hooks/api';
import { Badge } from '@/features/shadcn/components/ui/badge';
import { Separator } from '@/features/shadcn/components/ui/separator';
import { toDateString } from '@/features/shared/helpers/date';
import { useParams } from 'next/navigation';

const LeaveDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: leave, isLoading } = useGetLeave(+id);

  if (isLoading) return <div>Loading...</div>;
  if (!leave) return <div>Leave Not Found</div>;

  return (
    <section>
      <header className="text-center">
        <Badge className={statusColor(leave.status)}>{leave.status}</Badge>
        <h1 className="text-3xl font-bold">{toDateString(leave.leaveDate)}</h1>
        <p>{leave.reason}</p>
        {leave.status === 'REJECTED' && (
          <>
            <Separator className="my-4"></Separator>
            <p className="text-red-500">{leave.rejectionReason}</p>
          </>
        )}
      </header>
    </section>
  );
};

export default LeaveDetail;
