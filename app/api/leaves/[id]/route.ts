import { type UpdateLeaveInput } from '@/features/leaves/types';
import * as api from '@/features/leaves/api';
import * as validators from '@/features/leaves/validator';

interface PathParams {
  params: {
    id: string;
  };
}

export const GET = async (_req: Request, { params: { id } }: PathParams) => {
  const leave = await api.findById(Number(id));

  return Response.json(leave);
};

export const PATCH = async (req: Request, { params: { id } }: PathParams) => {
  const body = await (req.json() as Promise<UpdateLeaveInput>);

  try {
    const form = await validators.update.parseAsync(body);
    const leave = await api.update(+id, form);

    return new Response(JSON.stringify(leave), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), { status: 422 });
  }
};
