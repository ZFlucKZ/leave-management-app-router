import { type LeaveItem } from '@/features/leaves/types';
import { Badge } from '@/features/shadcn/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/features/shadcn/components/ui/card';
import { Separator } from '@/features/shadcn/components/ui/separator';
import { toDateString } from '@/features/shared/helpers/date';
import { Edit } from 'lucide-react';
import Link from 'next/link';

const statusColor = (status: LeaveItem['status']) => {
  switch (status) {
    case 'APPROVED':
      return 'bg-green-500';
    case 'REJECTED':
      return 'bg-red-500';
    default:
      return 'bg-cyan-500';
  }
};

const LeaveItem = ({ id, reason, leaveDate, status }: LeaveItem) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="font-bold">{toDateString(leaveDate)}</CardHeader>
      <CardContent>{reason}</CardContent>
      <Separator></Separator>
      <CardFooter className="flex items-center justify-between px-6 py-4">
        <Badge className={statusColor(status)}>{status}</Badge>
        <Link href={`/leaves/${id}/edit`}>
          <Edit className="h-6 w-6"></Edit>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LeaveItem;
