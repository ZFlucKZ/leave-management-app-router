import { type update, type add } from '@/features/leaves/validator';
import type * as z from 'zod';
import type * as api from './api';

export type LeaveItem = Awaited<ReturnType<typeof api.findAll>>[0];

export type LeaveDetails = Awaited<ReturnType<typeof api.findById>>;

export type AddLeaveInput = z.infer<typeof add>;

export type UpdateLeaveInput = z.infer<typeof update>;
