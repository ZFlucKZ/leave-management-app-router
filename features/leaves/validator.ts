import * as z from 'zod';

export const add = z.object({
  leaveDate: z
    .string({
      required_error: 'Leave date is required',
    })
    .datetime(),
  reason: z
    .string({
      required_error: 'Reason is required',
    })
    .min(1),
});

export const update = add.partial();
